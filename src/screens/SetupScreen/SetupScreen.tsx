import React, { useState } from 'react';
import { StatusBar, Button, Text } from 'react-native';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { Container, Label, Input } from './styles';
import ExpensesScreen from '../ExpensesScreen';
import { useSetupForm } from './utils';

function SetupScreen() {
  const [step, setStep] = useState(1);
  const methods = useSetupForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <FormProvider {...methods}>
        {step === 1 && (
          <>
            <Label>Tu ingreso mensual</Label>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Ingreso mensual"
                  keyboardType="numeric"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="firstName"
              defaultValue=""
            />
            {errors.firstName && <Text>This is required.</Text>}
            <Button
              onPress={() => setStep(2)}
              title="Siguiente"
              accessibilityLabel="Learn more about this purple button"
            />
          </>
        )}
        {step === 2 && <ExpensesScreen setStep={setStep} />}
      </FormProvider>
    </Container>
  );
}

export default SetupScreen;
