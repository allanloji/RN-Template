import React from 'react';
import { Text } from 'react-native';

import { Container, Name, Cost } from './styles';
import { SpendingProps } from './types';

function Spending({ name, cost }: SpendingProps) {
  return (
    <Container>
      <Name>{name}</Name>
      <Cost>${cost}</Cost>
    </Container>
  );
}

export default Spending;
