import { Field, ErrorMessage } from 'formik';

const TextInput = ({ label, ...props }: { label: string; [key: string]: any }) => {
  return (
    <div className="flex flex-col items-center">
      <label className="block text-sm font-medium text-blue-600 mb-1">{label}</label>
      <Field
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-center focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
        {...props}
      />
      <ErrorMessage name={props.name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
};

export default TextInput;
