import React from 'react';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';
import { useDarkMode } from '../../hooks/useDarkMode';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className={styles.layoutContainer}>
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;