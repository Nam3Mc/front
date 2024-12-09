"use client"
import { SignUp } from "@/CRUD/auth/singUp"
import { Roll } from "@/enums/rolls"
import { CivilStatus, EmploymentStatus } from "@/enums/user"
import { SingUp } from "@/tipos/singUp"
import { initialValues } from "@/utilities/initialValues"
import SelectInput from "@/utilities/selectInput"
import TextInput from "@/utilities/texInput"
import { validationSchema } from "@/utilities/validationSchema"
import { Form, Formik } from "formik"
import { AxiosError } from "axios"

const RegisterForm = () => {
  const handleSubmit = async (values: SingUp, { setSubmitting, resetForm }: any) => {
    try {

      const user = await SignUp(values)
      console.log('User registered successfully:', user)
      alert('User registered successfully!')
      resetForm() 

    } catch (error) {

      if (error instanceof AxiosError) {
        if (error.response) {
          console.error('Backend responded with error:', error.response.data) 
          alert(`Error: ${error.response.data.message || "Something went wrong."}`)
        } else {
          console.error('Error with the request:', error.message) 
          alert('Network error: Please check your connection.')
        }
      } else {
        console.error('Unexpected error:', error) 
        alert('An unexpected error occurred.')
      }
    } finally {
      setSubmitting(false) 
    }

  }

  return (
    <div className="max-w-md mx-auto p-6 border border-blue-500 rounded-lg bg-gray-50 shadow-lg">
      <h2 className="text-2xl font-bold text-blue-500 text-center mb-6">Register User</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput label="Name(s)" name="name" />
            <TextInput label="Last Name" name="lastName" />
            <TextInput label="Email" name="email" type="email" />
            <TextInput label="Phone" name="phone" />
            <TextInput label="Nationality" name="nationality" />
            <TextInput label="DNI" name="dni" type="number" />
            <TextInput label="Date of Birth" name="DOB" type="date" />

            <SelectInput
              label="Civil Status"
              name="civilStatus"
              options={Object.values(CivilStatus)}
            />

            <SelectInput
              label="Employment Status"
              name="employmentStatus"
              options={Object.values(EmploymentStatus)}
            />

            <TextInput label="User Name" name="userName" />
            <TextInput label="Password" name="password" type="password" />
            <TextInput
              label="Confirm Password"
              name="comfirmPassword"
              type="password"
            />

            <SelectInput
              label="Roll"
              name="roll"
              options={Object.values(Roll)}
            />

            <button
              type="submit"
              // disabled={isSubmitting}
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm
