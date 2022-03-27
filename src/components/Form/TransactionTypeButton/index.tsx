import React from 'react';
import {ITransactionTypeButton} from '../../../types/types';

import {Container, Icon, Title, Button} from './styles';

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
    <Container type={type} isActive={isActive}>
      <Button {...rest}>
        <Icon type={type} name={icons[type]} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
};

export default TransactionTypeButton;
