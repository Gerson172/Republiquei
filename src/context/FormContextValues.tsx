import { createContext, useContext } from 'react';
import { useForm, FormProviderProps } from "react-hook-form";

interface FormContextValues {
  formMethods: ReturnType<typeof useForm>;
}

export const MyFormContext = createContext<FormContextValues | null>(null);

export function useMyFormContext() {
  const context = useContext(MyFormContext);
  if (!context) {
    throw new Error('useMyFormContext must be used within a FormProvider');
  }
  return context;
}
