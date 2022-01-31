import React from 'react';
import {ICategorySelectButton} from '../../../types/types';

import {Container, Category, Icon} from './styles';

const CategorySelectButton: React.FC<ICategorySelectButton> = ({
  title,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelectButton;
