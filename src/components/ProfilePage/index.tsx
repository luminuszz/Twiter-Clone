import React from 'react';

import Feed from '../Feed';
import {
  Contaienr,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Foollowage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Contaienr>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outilened> Editar perfil</EditButton>
        <h1>Davi Ribeiro</h1>
        <h2>@Davi_ribeiro</h2>

        <p>
          Developer at
          <a href="https://rockseat.com.br"> @Rockeseat</a>
        </p>

        <ul>
          <li>
            <CakeIcon />
            Salvador, Brasil
          </li>
          <li>
            <LocationIcon />
            Nascido(a) em 27 de abril de 2000
          </li>
        </ul>

        <Foollowage>
          <span>
            seguindo
            <strong> 200 </strong>
          </span>
          <span>
            <strong>829 </strong>
            seguidores
          </span>
        </Foollowage>
      </ProfileData>

      <Feed />
    </Contaienr>
  );
};

export default ProfilePage;
