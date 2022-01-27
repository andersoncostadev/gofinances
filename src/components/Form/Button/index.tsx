import React from 'react';
import {IButton} from '../../../types/types';

import {Container, Title} from './styles';

const Button: React.FC<IButton> = ({title, ...rest}) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
