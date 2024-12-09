// src/validations/validationSchema.ts
import * as Yup from 'yup';
import { CivilStatus, EmploymentStatus,  } from '@/enums/user';
import { Roll } from '@/enums/rolls';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.number()
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  nationality: Yup.string().required('Nationality is required'),
  dni: Yup.number().required('DNI is required'),
  DOB: Yup.date().required('Date of Birth is required'),
  civilStatus: Yup.string().oneOf(Object.values(CivilStatus), 'Invalid civil status').required('Civil Status is required'),
  employmentStatus: Yup.string().oneOf(Object.values(EmploymentStatus), 'Invalid employment status').required('Employment Status is required'),
  userName: Yup.string().min(4, 'Username must be at least 4 characters').max(20, 'Username can\'t exceed 20 characters').required('Username is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/, 
      'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character [!@#$%^&*]')
    .required('Password is required'),
  comfirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  roll: Yup.string().oneOf(Object.values(Roll), 'Invalid roll').required('Roll is required')
});
