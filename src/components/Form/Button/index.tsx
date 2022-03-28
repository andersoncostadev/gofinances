import React from 'react';
import {IButton} from '../../../types/types';

import {Container, Title} from './styles';

const Button: React.FC<IButton> = ({title, onPress, ...rest}) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
