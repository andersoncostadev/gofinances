import React from 'react';
import {IHiglightCard} from '../../types/types';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LasTransaction,
} from './styles';

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'currency-usd',
};

const HighlightCard: React.FC<IHiglightCard> = ({
  type,
  title,
  amount,
  lastTransaction,
}) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LasTransaction type={type}>{lastTransaction}</LasTransaction>
      </Footer>
    </Container>
  );
};

export default HighlightCard;
