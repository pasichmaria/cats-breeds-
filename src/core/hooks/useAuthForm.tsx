import * as Yup from 'yup';
import { useFormik } from 'formik';

import { loginUser, useAppDispatch } from '../../store';

export const useAuthForm = () => {
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values) => dispatch(loginUser(values)),
  });
  return { formik };
};
