import { useTheme } from 'hooks/ThemeContext';
import React, { useCallback } from 'react';

import { Container, Color } from './styles';

const Colors: React.FC = () => {
  const { changeTheme } = useTheme();

  const setTheme = useCallback(
    (colorName: string) => {
      changeTheme(colorName);
    },
    [changeTheme],
  );

  return (
    <Container>
      <Color color="#E0245E" onClick={() => setTheme('red')} />
      <Color color="#2AAC59" onClick={() => setTheme('green')} />
      <Color color="#DC541F" onClick={() => setTheme('orange')} />
      <Color color="#794bc4" onClick={() => setTheme('purple')} />
      <Color color="#FBAD20" onClick={() => setTheme('yellow')} />
    </Container>
  );
};

export default Colors;
