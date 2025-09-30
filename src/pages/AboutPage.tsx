import styles from "./InfoPage.module.css";
import { FaBook, FaCode, FaLaptopCode, FaLinkedin, FaLinkedinIn, FaUniversity } from "react-icons/fa";

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
            O projeto propõe a intervenção por meio da aplicação da tecnologia
            Python. O objetivo é conscientizar a população e exigir do Estado o
            fornecimento de condições básicas, promovendo a adoção de
            absorventes sustentáveis para reduzir a pegada de carbono na
            atmosfera.
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
            As Desenvolvedoras
          </h3>
          <p>
            O núcleo do projeto foi conduzido por um grupo de estudantes de
            tecnologia, apaixonadas por encontrar soluções que gerem impacto
            positivo. Este trabalho reflete a dedicação em aplicar o
            conhecimento técnico para promover a sustentabilidade e a dignidade.
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
