import { useMemo } from "react";
import { PROGRAM_DATA, PRODUCT_DATA } from "../constants/menstrualData";
import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import { FaBalanceScale, FaCalculator, FaInfoCircle } from "react-icons/fa";

const CO2_PER_KM_CAR = 0.12;

const HomePage = () => {
  const simulationResults = useMemo(() => {
    const totalPads = Math.round(
      (PROGRAM_DATA.investmentValue /
        PROGRAM_DATA.averageDisposablePadPackPrice) *
        PROGRAM_DATA.padsPerPack
    );
    const padFootprint =
      (totalPads * PRODUCT_DATA.disposablePadCarbonFootprint) /
      PRODUCT_DATA.disposablePadAnnualCycle;

    const totalCups = Math.round(
      PROGRAM_DATA.investmentValue / PROGRAM_DATA.averageCupPrice
    );
    const cupFootprint =
      (totalCups * PRODUCT_DATA.cupCarbonFootprint) /
      PRODUCT_DATA.cupAnnualCycle;

    const relativeImpact = (cupFootprint / padFootprint) * 100;
    const reduction = 100 - relativeImpact;
    const kmDriven = padFootprint / CO2_PER_KM_CAR;
    return {
      totalPads,
      totalCups,
      padFootprint,
      cupFootprint,
      relativeImpact,
      reduction,
      kmDriven,
    };
  }, []);

  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.pageTitle}>O Custo Invisível do Ciclo Menstrual</h1>
      <p className={styles.pageSubtitle}>
        Descubra como uma política pública de saúde menstrual impacta o planeta
        e como suas escolhas individuais fazem a diferença.
      </p>

      <div className={styles.card}>
        <h3>
          <FaInfoCircle /> O Dilema do Descartável
        </h3>
        <p>
          O Programa do governo de Proteção e Promoção da Saúde Menstrual é um
          avanço vital. No entanto, a distribuição exclusiva de absorventes
          descartáveis, com um investimento de{" "}
          <b>R$ {PROGRAM_DATA.investmentValue.toLocaleString("pt-BR")}</b>,
          geraria uma pegada de carbono de{" "}
          <b>{(simulationResults.padFootprint / 1000).toFixed(2)} toneladas</b>{" "}
          de CO2.
        </p>
        <p className={styles.analogy}>
          Para se ter uma ideia, esse impacto ambiental é o mesmo que um carro
          de passeio percorrendo a{" "}
          <b>distância da Terra à Lua mais de 15 vezes</b>!
        </p>
      </div>

      <div className={styles.card}>
        <h3>
          <FaBalanceScale /> Comparativo: Absorvente x Coletor
        </h3>
        <p>
          Se o mesmo valor fosse aplicado em{" "}
          <strong>coletores menstruais</strong>, o impacto cairia para apenas{" "}
          <b>{(simulationResults.cupFootprint / 1000).toFixed(2)} toneladas</b>{" "}
          de CO₂.
        </p>
        <p>
          Isso representa apenas{" "}
          <b>{simulationResults.relativeImpact.toFixed(1)}%</b> do impacto dos
          absorventes — ou seja, uma{" "}
          <b>redução de cerca de {simulationResults.reduction.toFixed(1)}%</b>.
        </p>

        <div className={styles.barComparison}>
          <div className={styles.barLabel}>
            Absorvente Descartável ({simulationResults.padFootprint.toFixed(0)}{" "}
            kg CO₂)
          </div>
          <div className={styles.barWrapper}>
            <div
              className={styles.barAbsorvente}
              style={{ width: "100%" }}
            ></div>
          </div>

          <div className={styles.barLabel}>
            Coletor Menstrual ({simulationResults.cupFootprint.toFixed(0)} kg
            CO₂)
          </div>
          <div className={styles.barWrapper}>
            <div
              className={styles.barColetor}
              style={{
                width: `${simulationResults.relativeImpact.toFixed(1)}%`,
              }}
            ></div>
          </div>
        </div>

        <p>
          A comparação mostra, de forma simples, como{" "}
          <strong>escolhas sustentáveis </strong>
          podem reduzir drasticamente as emissões e ainda promover{" "}
          <strong>dignidade menstrual</strong>.
        </p>
      </div>

      <NavLink to="/calculadora" className={styles.ctaButton}>
        <FaCalculator /> Calcule seu Impacto Pessoal
      </NavLink>
    </div>
  );
};

export default HomePage;
