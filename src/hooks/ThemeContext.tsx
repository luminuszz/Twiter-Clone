import React, { createContext, useCallback, useContext } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';
import blue from 'styles/themes/blue';

import usePersistedState from './usePersistedState';

interface ThemeContextData {
  currentTheme: DefaultTheme;
  changeTheme(themetitle: string): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = usePersistedState<DefaultTheme>(
    '@Twiter::theme',
    blue,
  );
  const themes = [blue];

  const changeTheme = useCallback(
    (themetitle: string) => {
      const findedTheme = themes.find(theme => theme.title === themetitle);

      setCurrentTheme(findedTheme);
    },
    [themes, setCurrentTheme],
  );

  return (
    <ThemeContext.Provider value={{ changeTheme, currentTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('useTheme must to used inside ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
