import { useState, useEffect } from 'react';

export const useDarkMode = (): [string, () => void] => {
  const getInitialTheme = (): string => {
    if (typeof window !== 'undefined') {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
    return 'light';
  };

  const [theme, setTheme] = useState<string>(getInitialTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};