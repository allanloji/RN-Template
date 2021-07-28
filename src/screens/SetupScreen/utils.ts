import { useForm, UseFormReturn } from 'react-hook-form';

function useSetupForm() {
  const form = useForm();

  return form;
}

export { useSetupForm };
