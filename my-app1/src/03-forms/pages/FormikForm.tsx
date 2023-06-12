import { FormikErrors, useFormik } from "formik";

interface FormValues {
  name: string;
  lastName: string;
  email: string;
}

const isValidEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const FormikForm = () => {
  const initialValues: FormValues = {
    name: "Jose",
    lastName: "Quintero",
    email: "jose.quintero@gmail.com",
  };

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else if (values.lastName.length > 10) {
      errors.lastName = "Must be 10 characters or less";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  const {
    values: { name, lastName, email },
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validate,
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
          name="name"
          value={name}
          placeholder="First name"
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${touched.name && errors.name && "has-error"}`}
        />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${touched.lastName && errors.lastName && "has-error"}`}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
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

export default FormikForm;
