import React from 'react';

import Colors from '../Colors';
import ProfilePage from '../ProfilePage';
import {
  Container,
  Header,
  ProfileInfo,
  BackIcon,
  BottomMenu,
  HomeIconm,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Davi Ribeiro</strong>
          <span>260 tweets</span>
        </ProfileInfo>
        <Colors flexDirection="row" />
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIconm />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
