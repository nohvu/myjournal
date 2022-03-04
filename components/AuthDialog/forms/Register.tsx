import React from 'react';
import { Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';

interface RegisterFormProps {
  onOpenLogin: () => void;
}
interface IFormInputs {
  email: string;
  password: string;
}
export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(RegisterFormSchema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);
  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullName" label="Имя и Фамилия" type="text" />
        <FormField name="email" label="Эл. почта" type="email" />
        <FormField name="password" label="Пароль" type="password" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex justify-between">
            <Button type="submit" className="mt-20" color="primary" variant="contained">
              Зарегистрироваться
            </Button>
            <Button onClick={onOpenLogin} className="mt-20" color="primary" variant="text">
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
