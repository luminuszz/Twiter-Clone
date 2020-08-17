import Button from 'components/Button';
import React from 'react';

import Colors from '../Colors';
import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FacoriteIcon,
  ProfileIcon,
  BotSide,
  BotSideAvatar,
  ProfileDataBotSide,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FacoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>

        <Colors flexDirection="column" />
      </TopSide>
      <BotSide>
        <BotSideAvatar />
        <ProfileDataBotSide>
          <strong>Davi Ribeiro</strong>
          <span>@Davi Riveiro</span>
        </ProfileDataBotSide>
        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
