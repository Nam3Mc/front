"use client";

import { GetAccount } from "@/CRUD/account/getById";
import { SignIn } from "@/CRUD/auth/singIn";
import { SingIn } from "@/tipos/singIn";
import { SingInSchema } from "@/utilities/singInSchema";
import { singInValues } from "@/utilities/singInvalues";
import TextInput from "@/utilities/texInput";
import { AxiosError } from "axios";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SingInForm = () => {
  const router = useRouter();

  const singInHandler = async (value: SingIn, { setSubmitting }: any) => {
    try {
      const response = await SignIn(value);

      if (response?.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.id);
        localStorage.setItem("roll", response.roll);
        window.dispatchEvent(new Event("storage"));

        // Obtener la cuenta después de iniciar sesión
        const account = await GetAccount(response.id);

        alert("User Logged Successfully");
        router.push("/dashboard");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error while logging in: ", error.response?.data);
        alert(error.response?.data?.message || "Error while logging in. Please try again.");
      } else {
        console.error("Unexpected error: ", error);
        alert("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    // Este efecto se ejecutará cuando el componente se monte
    // Si se requiere hacer algo con el userId después de un inicio de sesión exitoso, se puede hacer aquí.
    const userId = localStorage.getItem("userId");
    if (userId) {
      // Puedes hacer algo con el userId si es necesario
      console.log("Current User ID:", userId);
    }
  }, []); // Puedes agregar dependencias aquí si es necesario.

  return (
    <div>
      <Formik
        initialValues={singInValues}
        validationSchema={SingInSchema}
        onSubmit={singInHandler}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput label="User Name" name="userName" />
            <TextInput label="Password" name="password" type="password" />

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SingInForm;
