import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

interface FormValues {
  name: string;
  lastName: string;
  email: string;
  job: string;
  terms: boolean;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().required().max(15),
  lastName: Yup.string().required().max(10),
  job: Yup.string()
    .required()
    .notOneOf(["marketing"], "Cannot select this value"),
  terms: Yup.boolean().oneOf([true], "Must accept terms and condition"),
});

const FormikComponent = () => {
  const initialValues: FormValues = {
    name: "Jose",
    lastName: "Quintero",
    email: "jose.quintero@gmail.com",
    job: "",
    terms: false,
  };

  return (
    <>
      <h1>Formik basic tutorial</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ isValid }) => (
          <Form noValidate>
            <label htmlFor="name">First name</label>
            <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" component="span" />

            <label htmlFor="lastName">Last name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="job">Job</label>
            <Field name="job" as="select">
              <option value="">Choose job</option>
              <option value="developer">Developer</option>
              <option value="marketing">Marketing</option>
              <option value="manager">Manager</option>
            </Field>
            <ErrorMessage name="job" component="span" />

            <div style={{ marginTop: "20px" }}>
              <label htmlFor="terms">
                <Field name="terms" type="checkbox" />
                Accept terms and condition
              </label>
              <div>
                <ErrorMessage name="terms" component="span" />
              </div>
            </div>

            <button type="submit" disabled={!isValid}>
              Store user
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormikComponent;
