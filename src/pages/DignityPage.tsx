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
        É <strong>o direito de menstruar</strong> com acesso a produtos, informação e saneamento,
        livre de tabus e preconceitos que historicamente trataram o ciclo como
        algo <strong>impuro e vergonhoso</strong>.
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
            A menstruação foi historicamente construída como um <strong>"tabu"</strong> de{" "}
            <strong>"impureza"</strong> pela cultura patriarcal. Essa opressão resulta na
            carência de acesso à educação e cuidados básicos, afetando
            principalmente pessoas em situação de vulnerabilidade. A{" "}
            <strong>pobreza menstrual</strong> é a falta de infraestrutura, recursos e
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
            A necessidade de <strong>trocar absorventes a cada 4 horas</strong> é
            essencial para evitar odores e <strong>infecções</strong>. A falta de itens adequados
            leva ao uso de <strong>alternativas inseguras</strong>, como panos velhos ou
            jornal, o que causa constrangimento e sérios{" "}
            <strong>problemas de saúde</strong>. Cerca de <strong>67%</strong> das
            pessoas que menstruam já deixaram de frequentar um lugar por conta
            da menstruação.
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
            O <strong>Programa de Proteção e Promoção da Saúde e Dignidade Menstrual</strong>{" "}
            (instituído em março de 2023) visa <strong>combater a precariedade
            menstrual</strong>, garantindo o acesso a produtos de higiene e cuidados
            básicos. Os beneficiários são pessoas de baixa renda, em situação de
            rua, no sistema prisional ou em cumprimento de medidas socioeducativas.
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
            O absorvente descartável, composto por derivados de árvores e petróleo,
            impacta o ambiente. Sua <strong>degradação lenta (500 a 800 anos)</strong>{" "}
            contamina o planeta. Por outro lado,{" "}
            <strong>alternativas sustentáveis</strong> (coletor, calcinhas e panos)
            oferecem <strong>maior durabilidade</strong>, economia e não geram resíduos
            tóxicos.
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