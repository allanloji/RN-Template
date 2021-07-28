import React, { useState } from 'react';
import { Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { Label, Input, PickerContainer, ExpenseContainer } from './styles';
import { AddExpenseScreenProps } from './types';

const TYPES = [
  'Vivienda',
  'Impuestos',
  'Seguros',
  'Servicios',
  'Vestimenta',
  'Personal',
  'Comida',
  'Transporte',
  'Ahorros/Inversiones',
  'Salud',
  'Recreacion',
  'Deudas',
];
function AddExpenseScreen({ backScreen, addExpense }: AddExpenseScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [name, setName] = useState('');
  const [expense, setExpense] = useState(0);
  return (
    <>
      <ExpenseContainer>
        <Label>Nombre</Label>
        <Input placeholder="Nombre" onChangeText={val => setName(val)} value={name} />
        <Label>Gasto</Label>
        <Input
          placeholder="Ingreso mensual"
          keyboardType="numeric"
          onChangeText={val => setExpense(val)}
          value={expense}
        />
      </ExpenseContainer>

      <PickerContainer>
        <Label>Tipo</Label>
        <Picker
          itemStyle={{
            color: '#fff',
            fontSize: 36,
          }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
          {TYPES.map(type => (
            <Picker.Item label={type} value={type} />
          ))}
        </Picker>
      </PickerContainer>

      <Button
        onPress={() => {
          addExpense({ name, cost: expense, type: selectedLanguage });
          backScreen();
        }}
        title="Agregar"
        accessibilityLabel="Learn more about this purple button"
      />
    </>
  );
}

export default AddExpenseScreen;
