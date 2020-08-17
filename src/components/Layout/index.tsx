import Main from '@/components/Main';
import React from 'react';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import { Container, Whapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Whapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Whapper>
    </Container>
  );
};

export default Layout;
