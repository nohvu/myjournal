import * as yup from 'yup';

export const LoginFormSchema = yup.object({
  email: yup.string().email('Неверная почта').required('Введите почту'),
  password: yup.string().min(6, 'Не менее 6 символов').required('Введите пароль'),
});

export const RegisterFormSchema = yup
  .object({
    fullName: yup.string().required('Введите имя'),
  })
  .concat(LoginFormSchema);
