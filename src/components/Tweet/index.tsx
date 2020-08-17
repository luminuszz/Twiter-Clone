import React from 'react';

import {
  Container,
  Retweeted,
  RockseatIcon,
  TweetBody,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RockseatIcon />
        Você retweetou
      </Retweeted>

      <TweetBody>
        <Avatar />

        <Content>
          <Header>
            <strong>Rockseat</strong>
            <span>@rockseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Alguma coisa aqui</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </TweetBody>
    </Container>
  );
};

export default Tweet;
