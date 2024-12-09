import * as Yup from 'yup';

export const SingInSchema = Yup.object().shape({
    userName: Yup.string().required("Please type your User Name"),
    password: Yup.string().required("Please type your Password")
})