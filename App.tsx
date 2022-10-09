import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
    </Container>
  );
}
