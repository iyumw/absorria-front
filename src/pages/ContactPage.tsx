import styles from "./InfoPage.module.css";
import { FaGithub, FaLinkedinIn, FaBook } from "react-icons/fa";

const developers = [
  {
    name: "Amanda Ribeiro",
    github: "https://github.com/Amandyis",
    linkedin: "https://www.linkedin.com/in/amanda-ribeiro-16b307207/",
    photo: "/amanda.jpeg", // Substitua pela foto real
  },
  {
    name: "Danielle Pereira",
    github: "https://github.com/DanielleSilvaPereira",
    linkedin: "https://www.linkedin.com/in/danielle-pereira-474771204/",
    photo: "/dani.jpeg", // Substitua pela foto real
  },
  {
    name: "Isis Okamoto",
    github: "https://github.com/iyumw",
    linkedin: "https://www.linkedin.com/in/isis-okamoto/",
    photo: "/isis.jpeg",
  },
];

const ContactPage = () => {
  return (
    <div className={styles.infoContainer}>
      <h1>Fale Conosco</h1>
      <p className={styles.intro}>
        Conecte-se com as desenvolvedoras do projeto ou explore o repositório
        principal.
      </p>

      <div className={styles.cardGrid}>
        {/* Card do Repositório Principal */}
        <div className={styles.card}>
          <h3>
            <span className={styles.iconWrapper}>
              <FaBook />
            </span>
            Repositório do Projeto
          </h3>
          <p>
            Todo o código-fonte da aplicação está
            disponível neste repositório.
          </p>
          <a
            href="https://github.com/SI2aps/absorria"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            Ver Repositório
          </a>
        </div>

        {/* Cards individuais */}
        {developers.map((dev) => (
          <div key={dev.name} className={styles.card}>
            <div className={styles.devPhotoContainer}>
              <img src={dev.photo} alt={dev.name} className={styles.devPhoto} />
              <div className={styles.devInfo}>
                <h3>{dev.name}</h3>
                <div className={styles.socialLinks}>
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
