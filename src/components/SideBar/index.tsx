import React from 'react';
import StickyBox from 'react-sticky-box';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  BodySideBar,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <BodySideBar>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="luiz bataneiro"
                nickname="@Luizbataneiro"
              />,
              <FollowSuggestion
                name="luiz bataneiro"
                nickname="@Luizbataneiro"
              />,
              <FollowSuggestion
                name="luiz bataneiro"
                nickname="@Luizbataneiro"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </BodySideBar>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
