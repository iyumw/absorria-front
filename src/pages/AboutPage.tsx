import styles from "./InfoPage.module.css";
import { FaBook, FaCode, FaLaptopCode, FaUniversity } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className={styles.infoContainer}>
      <h1>Sobre o Projeto</h1>
      <p className={styles.intro}>
        Esta aplicação foi desenvolvida como parte de um projeto acadêmico
        interdisciplinar, unindo tecnologia e consciência socioambiental.
      </p>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
              <FaUniversity />
            </span>
            Objetivo Central do Projeto
          </h3>
          <p>
            Este projeto se materializa em uma plataforma digital interativa. O
            objetivo é <strong>traduzir em números o impacto ambiental</strong> de políticas
            públicas e escolhas individuais, <strong>incentivando a adoção de
            alternativas sustentáveis</strong> para reduzir a pegada de carbono associada ao ciclo menstrual.
          </p>
        </div>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
              <FaLaptopCode />
            </span>
            A Solução: A Calculadora de Carbono
          </h3>
          <p>
            O programa foi desenvolvido para calcular e simular os créditos de
            carbono gerados pela distribuição governamental de absorventes
            descartáveis. Ele também simula a pegada individual, comparando-a
            com alternativas sustentáveis como o coletor menstrual.
          </p>
        </div>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
              <FaCode />
            </span>
            Os Desenvolvedores
          </h3>
          <p>
            O núcleo do projeto foi conduzido por um grupo de estudantes de
            tecnologia, com o objetivo de encontrar soluções que gerem impacto
            positivo. Este trabalho reflete a dedicação em aplicar o
            conhecimento técnico para promover a sustentabilidade e a dignidade
            menstrual.
          </p>
        </div>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
              <FaBook />
            </span>
            O Papel da Educação
          </h3>
          <p>
            É crucial que a promoção da dignidade menstrual inclua uma abordagem
            educacional abrangente. A educação sobre a dignidade menstrual é
            identificada como a chave mestra para que a distribuição de
            descartáveis possa adquirir créditos provenientes de alternativas
            sustentáveis, equilibrando finanças públicas e o impacto ambiental.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
