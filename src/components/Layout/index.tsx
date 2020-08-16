import Main from '@/components/Main';
import React from 'react';

import { Container, Whapper, MenuBar } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Whapper>
        <MenuBar />
        <Main />
      </Whapper>
    </Container>
  );
};

export default Layout;
