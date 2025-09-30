import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { FaHome, FaHeart, FaLeaf, FaUsers, FaSun, FaMoon, FaUniversity } from 'react-icons/fa';

const logo = "../../public/absorria.png";

interface SidebarProps {
  theme: string;
  toggleTheme: () => void;
}

const Sidebar = ({ theme, toggleTheme }: SidebarProps) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <img src={logo} alt="Logo" className={styles.logo} />
        Absorria
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
          <FaHome /> Início
        </NavLink>
        <NavLink to="/dignidade-menstrual" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
          <FaHeart /> Dignidade Menstrual
        </NavLink>
        <NavLink to="/mercado-de-carbono" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
          <FaLeaf /> Mercado de Carbono
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
          <FaUniversity /> Sobre o Projeto
        </NavLink>
        <NavLink to ="/contato" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
          <FaUsers /> Fale Conosco
        </NavLink>
      </nav>
      <div className={styles.themeToggle} onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
        <span>{theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}</span>
      </div>

    </aside>
  );
};

export default Sidebar;