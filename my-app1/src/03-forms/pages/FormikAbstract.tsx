import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Checkbox, Select, TextInput } from "../components";

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

const FormikAbstract = () => {
  const initialValues: FormValues = {
    name: "Jose",
    lastName: "Quintero",
    email: "jose.quintero@gmail.com",
    job: "",
    terms: false,
  };

  return (
    <>
      <h1>Formik Abstract tutorial</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ isValid }) => (
          <Form noValidate>
            <TextInput name="name" label="Name" placeholder="Name" />

            <TextInput
              name="lastName"
              label="Last name"
              placeholder="Last name"
            />

            <TextInput
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
            />

            <Select name="job" label="Job">
              <option value="">Choose job</option>
              <option value="developer">Developer</option>
              <option value="marketing">Marketing</option>
              <option value="manager">Manager</option>
            </Select>

            <Checkbox label="Accept terms & condition" name="terms" />

            <button type="submit" disabled={!isValid}>
              Store user
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormikAbstract;
