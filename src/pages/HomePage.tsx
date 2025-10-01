import { useMemo } from "react";
import { PROGRAM_DATA, PRODUCT_DATA } from "../constants/menstrualData";
import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import { FaCalculator, FaInfoCircle } from "react-icons/fa";

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
    const kmDriven = padFootprint / CO2_PER_KM_CAR;
    return { totalPads, padFootprint, kmDriven };
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
          O Programa do governo de Proteção e Promoção da Saúde Menstrual é um avanço
          vital. No entanto, a distribuição exclusiva de absorventes
          descartáveis, com um investimento de{" "}
          <b>R$ {PROGRAM_DATA.investmentValue.toLocaleString("pt-BR")}</b>, 
          geraria uma pegada de carbono de{" "}
          <b>{(simulationResults.padFootprint / 1000).toFixed(2)} toneladas</b> de CO2.
        </p>
        <p className={styles.analogy}>
          Para se ter uma ideia, esse impacto ambiental é o mesmo que um carro
          de passeio percorrendo a <b>distância da Terra à Lua mais de 15 vezes</b>!
        </p>
        <p>
          A boa notícia? Investir em alternativas sustentáveis, como o coletor
          menstrual, poderia <b>reduzir essa pegada em mais de 90%</b>,
          mostrando que dignidade e sustentabilidade podem e devem andar juntas.
        </p>
      </div>

      <NavLink to="/calculadora" className={styles.ctaButton}>
        <FaCalculator /> Calcule seu Impacto Pessoal
      </NavLink>
    </div>
  );
};

export default HomePage;
