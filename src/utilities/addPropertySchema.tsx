
import { minor, pets } from '@/enums/property';
import * as Yup from 'yup';

export const PropertySchema = Yup.object().shape({
    name: Yup.string().required("A name is need"),
    price: Yup.number().required("How much for renting?"),
    description: Yup.string(),
    address: Yup.string().required("Please provide your address"),
    hasMinor: Yup.boolean().required(),
    pets: Yup.boolean().required(),
    accountId: Yup.string().required(),
    // image: Yup.string().required("You need unlest 4 photos to list yoour property"),
})