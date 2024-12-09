import { Field } from "formik";

export const CheckBoxInput = ( {label, spans, ...props}: { label: string; spans: string; [key: string]:any }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-blue-600 mb-1">{label}</label>
            <Field
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
                {...props}
            />
            <span>{spans}</span>
        </div>
    )
}