import React from 'react';
import { setCookie } from 'nookies';
import { Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { UserApi } from '../../../utils/api';
import { CreateUserDto } from '../../../utils/api/types';
import Alert from '@mui/material/Alert';
import { setUserData } from '../../../redux/slices/user';
import { useAppDispatch } from '../../../redux/hooks';
interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState('');
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (error) {
      console.warn('Ошибка при регистрации', error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullName" label="Имя и Фамилия" type="text" />
        <FormField name="email" label="Эл. почта" type="email" />
        <FormField name="password" label="Пароль" type="password" />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex justify-between">
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              type="submit"
              className="mt-20"
              color="primary"
              variant="contained">
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
