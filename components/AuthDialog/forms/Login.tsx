import React from 'react';
import { Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';

interface LoginFormProps {
  onOpenRegister: () => void;
}

interface IFormInputs {
  email: string;
  password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm<IFormInputs>({
    mode: 'onSubmit',
    resolver: yupResolver(LoginFormSchema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);
  return (
    <div>
      <FormProvider {...form}>
        <FormField name="email" label="Эл. почта" type="email" />
        <FormField name="password" label="Пароль" type="password" />

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex justify-between">
            <Button type="submit" className="mt-20" color="primary" variant="contained">
              Войти
            </Button>
            <Button onClick={onOpenRegister} className="mt-20" color="primary" variant="text">
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
