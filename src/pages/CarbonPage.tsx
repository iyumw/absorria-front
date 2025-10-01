import styles from "./InfoPage.module.css";
import {
  FaLeaf,
  FaExchangeAlt,
  FaBalanceScale,
  FaBookOpen,
} from "react-icons/fa";

const CarbonPage = () => {
  return (
    <div className={styles.infoContainer}>
      <h1>Entendendo o Mercado de Carbono</h1>
      <p className={styles.intro}>
        O mercado de carbono é um sistema criado para controlar as emissões de
        gases de efeito estufa (GEE), transformando a redução de emissões em um
        ativo financeiro.
      </p>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
                <FaLeaf />
            </span>  
            O que é um Crédito de Carbono?
          </h3>
          <p>
            Um crédito de carbono representa uma tonelada de dióxido de carbono
            (CO2) que deixou de ser emitida para a atmosfera. Empresas ou
            projetos que reduzem suas emissões podem "vender" esses créditos.
          </p>
        </div>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
                <FaExchangeAlt />
            </span>  
            Como Funciona?
          </h3>
          <p>
            Empresas que têm metas de emissão a cumprir (ou que voluntariamente
            querem zerar seu impacto) podem comprar créditos de carbono para
            compensar as emissões que não conseguem evitar. Isso cria um
            incentivo financeiro para a sustentabilidade.
          </p>
        </div>
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
                <FaBalanceScale />
            </span>   
            Nossa Simulação
          </h3>
          <p>
            Ao calcular a pegada de carbono dos absorventes, podemos estimar o
            "custo ambiental". O valor em créditos de carbono que mostramos
            representa o valor financeiro dessa pegada no mercado voluntário,
            tornando o impacto ambiental mais tangível.
          </p>
        </div>
      </div>
      <div className={styles.readMoreContainer}>
        <a
          href="https://sebrae.com.br/sites/PortalSebrae/o-que-e-credito-de-carbono,0371bc6d15757810VgnVCM1000001b00320aRCRD"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.readMoreButton}
        >
          <FaBookOpen /> Leia Mais no SEBRAE
        </a>
      </div>
    </div>
  );
};

export default CarbonPage;
