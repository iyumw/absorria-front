import styles from "./InfoPage.module.css";
import {
  FaBookOpen,
  FaUsers,
  FaExclamationTriangle,
  FaUniversity,
  FaLeaf,
} from "react-icons/fa";

const DignityPage = () => {
  return (
    <div className={styles.infoContainer}>
      <h1>O Tabu da Menstruação e a Vulnerabilidade</h1>
      <p className={styles.intro}>
        É o direito de menstruar com acesso a produtos, informação e saneamento,
        livre de tabus e preconceitos que historicamente trataram o ciclo como
        algo impuro e vergonhoso.
      </p>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
              <FaUsers />
            </span>
            O Tabu da Menstruação e a Vulnerabilidade
          </h3>
          <p>
            A menstruação foi historicamente construída como um "tabu" de
            "impureza" pela cultura patriarcal. Essa opressão resulta na
            carência de acesso à educação e cuidados básicos de saúde, afetando
            principalmente pessoas em situação de pobreza e vulnerabilidade. A
            pobreza menstrual é a falta de infraestrutura, recursos e
            conhecimento para esses cuidados.
          </p>
        </div>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
              <FaExclamationTriangle />
            </span>
            Consequências da Falta de Higiene
          </h3>
          <p>
            A necessidade de trocar absorventes descartáveis a cada 4 horas é
            essencial para evitar odores e infecções. A falta de itens adequados
            leva ao uso de alternativas inseguras, como panos velhos, jornal ou
            papelão , o que causa constrangimento e problemas de saúde. 67% das
            pessoas que menstruam já deixaram de frequentar um lugar por conta
            da menstruação
          </p>
        </div>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
              <FaUniversity />
            </span>
            O Programa Federal de Dignidade Menstrual
          </h3>
          <p>
            O Programa de Proteção e Promoção da Saúde e Dignidade Menstrual
            (instituído em março de 2023) visa combater a precariedade
            menstrual, garantindo o acesso a produtos de higiene e cuidados
            básicos de saúde. Os beneficiários são pessoas de baixa renda
            matriculadas, em situação de rua, no sistema prisional ou em
            cumprimento de medidas socioeducativas.
          </p>
        </div>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
              <FaLeaf />
            </span>
            Sustentabilidade e Alternativas Ecológicas
          </h3>
          <p>
            O absorvente descartável é composto de materiais advindos de árvores
            e petróleo, impactando negativamente o ambiente. O descarte
            inapropriado e a degradação lenta (500 a 800 anos) contaminam o
            planeta. Por outro lado, alternativas sustentáveis (coletor,
            calcinhas e panos) oferecem durabilidade maior, economia e não geram
            resíduos tóxicos.
          </p>
        </div>
      </div>
      <div className={styles.readMoreContainer}>
        <a
          href="https://www.unicef.org/brazil/dignidade-menstrual"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.readMoreButton}
        >
          <FaBookOpen /> Saiba Mais na UNICEF
        </a>
      </div>
    </div>
  );
};

export default DignityPage;
