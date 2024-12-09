import { Field, ErrorMessage } from 'formik';

const SelectInput = ({ label, options, ...props }: { label: string; options: string[]; [key: string]: any }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-blue-600 mb-1">{label}</label>
      <Field as="select" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200" {...props}>
        <option value="" label="Select option" />
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <ErrorMessage name={props.name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
};

export default SelectInput;