"use client";

import { AddProperty } from "@/CRUD/properties/addProperty";
import { Property } from "@/tipos/property";
import { PropertySchema } from "@/utilities/addPropertySchema";
import { newPropertyValues } from "@/utilities/newPropertyValues";
import TextInput from "@/utilities/texInput";
import { ErrorMessage, Field, Form, Formik } from "formik";

const PropertyForm: React.FC = () => {
  const handleSubmit = async (values: Property) => {
    console.log("Form submitted:", values);
    const propertyAdded = await AddProperty(values);
    return propertyAdded;
  };

  return (
    <div className="bg-blue-50 p-6 border border-gray-300 rounded-lg max-w-md mx-auto my-6 h-[600px] flex flex-col justify-between">
      <Formik
        initialValues={newPropertyValues}
        validationSchema={PropertySchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-4 text-blue-900 text-center font-sans text-base w-full">
            {/* Name */}
            <div>
              <TextInput label="Title" name="name" />
              <TextInput label="Monthly Payment" name="price" />
              <TextInput label="Describe Your Property" name="description" />
              <TextInput label="Property Address" name="address" />
              <div style={{ display: "none" }}>
                <TextInput label="Account ID" name="accountId" />
              </div>
            </div>

            {/* Has Minor */}
            <div>
              <h2 className="font-semibold mb-2">Are Minors Allowed?</h2>
              <div className="flex items-center justify-center space-x-4">
                <label className="flex items-center p-2">
                  <Field type="radio" name="hasMinor" value="true" />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="flex items-center p-2">
                  <Field type="radio" name="hasMinor" value="false" />
                  <span className="ml-2">No</span>
                </label>
              </div>
              <ErrorMessage name="hasMinor" component="div" className="text-red-500" />
            </div>

            {/* Pets */}
            <div>
              <h2 className="font-semibold mb-2">Are Pets Allowed?</h2>
              <div className="flex items-center justify-center space-x-4">
                <label className="flex items-center p-2">
                  <Field type="radio" name="pets" value="true" />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="flex items-center p-2">
                  <Field type="radio" name="pets" value="false" />
                  <span className="ml-2">No</span>
                </label>
              </div>
              <ErrorMessage name="pets" component="div" className="text-red-500" />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PropertyForm;
