import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import {
  FaHome,
  FaHeart,
  FaLeaf,
  FaUsers,
  FaSun,
  FaMoon,
  FaUniversity,
} from "react-icons/fa";

const logo = "/absorria.png";

interface SidebarProps {
  theme: string;
  toggleTheme: () => void;
}

const Sidebar = ({ theme, toggleTheme }: SidebarProps) => {
  return (
    <>
      {/* Botão fixo no topo */}
      <div className={styles.themeToggleTop} onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src={logo} alt="Logo" className={styles.logo} />
          Absorria
        </div>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            {/* Logo no mobile, ícone no desktop */}
            <span className={styles.mobileLogo}>
              <img src={logo} alt="Logo Absorria" />
            </span>
            <span className={styles.desktopIcon}>
              <FaHome />
            </span>
            <span>Início</span>
          </NavLink>
          <NavLink
            to="/dignidade-menstrual"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            <FaHeart />
            <span>Dignidade Menstrual</span>
          </NavLink>
          <NavLink
            to="/mercado-de-carbono"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            <FaLeaf />
            <span>Mercado de Carbono</span>
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            <FaUniversity />
            <span>Sobre o Projeto</span>
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            <FaUsers />
            <span>Fale Conosco</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
