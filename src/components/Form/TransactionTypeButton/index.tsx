import React from 'react';
import {ITransactionTypeButton} from '../../../types/types';

import {Container, Icon, Title} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

const TransactionTypeButton: React.FC<ITransactionTypeButton> = ({
  title,
  type,
  isActive,
  ...rest
}) => {
  return (
    <Container {...rest} type={type} isActive={isActive}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
};

export default TransactionTypeButton;
