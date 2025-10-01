import React, { useState, useRef, useEffect } from "react"; // 1. IMPORTAR useRef e useEffect
import { PRODUCT_DATA } from "../constants/menstrualData";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import styles from "./CalculatorPage.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CalculatorPage = () => {
  const navigate = useNavigate();
  const [padsPerDay, setPadsPerDay] = useState("");
  const [cycleDays, setCycleDays] = useState("");
  const [result, setResult] = useState<{
    padFootprint: number;
    cupFootprint: number;
  } | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numPads = parseInt(padsPerDay);
    const numDays = parseInt(cycleDays);

    if (isNaN(numPads) || isNaN(numDays) || numPads <= 0 || numDays <= 0) {
      setResult(null);
      return;
    }

    const annualPads = numPads * numDays * 12;
    const padFootprint =
      (annualPads * PRODUCT_DATA.disposablePadCarbonFootprint) /
      PRODUCT_DATA.disposablePadAnnualCycle;
    const cupFootprint = PRODUCT_DATA.cupCarbonFootprint;

    setResult({ padFootprint, cupFootprint });
  };
  
  // ... (o restante do código para 'chartData' continua igual)
  const chartData = result
    ? {
        labels: ["Absorventes descartáveis", "Coletor menstrual"],
        datasets: [
          {
            label: "CO2 Anual (kg)",
            data: [result.padFootprint, result.cupFootprint],
            backgroundColor: [
              getComputedStyle(document.documentElement)
                .getPropertyValue("--secondary-color")
                .trim(),
              getComputedStyle(document.documentElement)
                .getPropertyValue("--primary-color")
                .trim(),
            ],
          },
        ],
      }
    : null;

  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.pageTitle}>Calculadora de Impacto Ambiental</h1>
      <p className={styles.pageSubtitle}>
        Descubra como suas escolhas menstruais impactam o meio ambiente. Compare
        o uso de absorventes descartáveis com o coletor menstrual.
      </p>

      <div className={styles.card}>
        <p className={styles.introText}>
          Preencha abaixo a quantidade média de absorventes que você usa por dia
          e a duração do seu ciclo menstrual. Nossa calculadora estimará sua{" "}
          <strong>pegada anual de carbono</strong> e mostrará alternativas mais
          sustentáveis.
        </p>

        <form onSubmit={handleSubmit} className={styles.calcForm}>
          <div className={styles.formGroup}>
            <label htmlFor="pads">
              Absorventes por dia:
            </label>
            <input
              id="pads"
              type="number"
              value={padsPerDay}
              onChange={(e) => setPadsPerDay(e.target.value)}
              placeholder="Ex: 4"
              min={1}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="days">
              Dias de menstruação:
            </label>
            <input
              id="days"
              type="number"
              value={cycleDays}
              onChange={(e) => setCycleDays(e.target.value)}
              placeholder="Ex: 5"
              min={1}
              required
            />
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.calcButton}>
              Calcular
            </button>
            <button
              type="button"
              className={styles.backButton}
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft /> Voltar
            </button>
          </div>
        </form>

        {result && (
          <div ref={resultRef} className={styles.resultDisplay}> 
            <h3>Resultados Estimados</h3>
            <Bar
              data={chartData!}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      label: (context) =>
                        `${context.parsed.y.toFixed(2)} kg CO2`,
                    },
                  },
                },
              }}
            />
            <div className={styles.resultText}>
              <p>
                Sua pegada anual de carbono com absorventes descartáveis é de{" "}
                <strong>{result.padFootprint.toFixed(2)} kg</strong> de CO2. Ao
                utilizar um coletor menstrual, a emissão cai para{" "}
                <strong>{result.cupFootprint.toFixed(2)} kg</strong> de CO2,
                representando uma redução de até 90% no impacto ambiental.
              </p>
              <p className={styles.tip}>
                Dica: Alternativas reutilizáveis ajudam a preservar recursos
                naturais e reduzir emissões.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorPage;