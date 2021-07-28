import styled from '@emotion/native';

const Container = styled.View({
  flexDirection: 'row',
  width: '75%',
  height: 50,
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: 10,
});

const Name = styled.Text({
  color: 'white',
  fontSize: 15,
  lineHeight: 15,
});

const Cost = styled.Text({
  color: 'white',
  fontSize: 20,
  lineHeight: 20,
});

export { Container, Name, Cost };
