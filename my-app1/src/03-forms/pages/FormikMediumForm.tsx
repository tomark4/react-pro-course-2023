import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  lastName: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().required().max(15),
  lastName: Yup.string().required().max(10),
});

const FormikMediumForm = () => {
  const initialValues: FormValues = {
    name: "Jose",
    lastName: "Quintero",
    email: "jose.quintero@gmail.com",
  };

  const { errors, touched, isValid, getFieldProps, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <h1>Formik basic tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="name">First name</label>
        <input
          type="text"
          {...getFieldProps("name")}
          className={`${touched.name && errors.name && "has-error"}`}
        />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          {...getFieldProps("lastName")}
          className={`${touched.lastName && errors.lastName && "has-error"}`}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...getFieldProps("email")}
          className={`${touched.email && errors.email && "has-error"}`}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit" disabled={!isValid}>
          Store user
        </button>
      </form>
    </>
  );
};

export default FormikMediumForm;
