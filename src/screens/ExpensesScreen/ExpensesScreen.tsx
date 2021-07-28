import React, { useState } from 'react';
import { Button, FlatList } from 'react-native';
import { useFormContext, useFieldArray } from 'react-hook-form';

import { Title } from './styles';
import { Spending } from './components';
import { ExpensesScreenProps } from './types';
import AddExpenseScreen from '../AddExpenseScreen';

const DATA = [
  {
    type: 'Recreacion',
    name: 'Twitch',
    cost: 100,
  },
];

function ExpensesScreen({ setStep }: ExpensesScreenProps) {
  const [addingExpense, setAddingExpense] = useState(false);
  const { control } = useFormContext();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'test', // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });

  console.log(fields);

  return (
    <>
      {!addingExpense && (
        <>
          <Title>Tus gastos</Title>
          <FlatList
            data={fields}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <Spending name={item.name} cost={item.cost} key={`expense-${index}`} />
            )}
          />
          <Button
            onPress={() => setAddingExpense(true)}
            title="Agregar"
            accessibilityLabel="Learn more about this purple button"
          />
        </>
      )}
      {addingExpense && (
        <AddExpenseScreen backScreen={() => setAddingExpense(false)} addExpense={append} />
      )}
    </>
  );
}

export default ExpensesScreen;
