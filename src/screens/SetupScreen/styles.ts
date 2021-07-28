import styled from '@emotion/native';

const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: '#23262b',
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
});

const Label = styled.Text({
  fontSize: 36,
  color: '#fff',
});

const Input = styled.TextInput({
  fontSize: 36,
  color: '#fff',
});

const PickerContainer = styled.View({
  width: 300,
});

const ExpenseContainer = styled.View({
  width: 300,
  marginBottom: 20,
});

export { Container, Input, Label, PickerContainer, ExpenseContainer };
