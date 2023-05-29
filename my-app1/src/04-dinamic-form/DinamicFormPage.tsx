import { Form, Formik } from "formik";
import * as yup from "yup";
import { TextField } from "./components/";

const validationSchema = yup.object().shape({
  name: yup.string().required().max(15).min(2),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  passwordConfirm: yup
    .string()
    .required()
    .min(6)
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const DinamicFormPage = () => {
  return (
    <div className="container mt-5">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ isValid, handleReset }) => (
          <Form>
            <div className="mb-3">
              <TextField name="name" label="Name" placeholder="Jhon doe" />
            </div>
            <div className="mb-3">
              <TextField
                name="email"
                type="email"
                label="Name"
                placeholder="jhon.doe@microsoft.com"
              />
            </div>
            <div className="mb-3">
              <TextField
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <TextField
                name="passwordConfirm"
                type="password"
                label="Password confirm"
                placeholder="Confirm password"
              />
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={!isValid}
              >
                Submit
              </button>
              <button
                onClick={handleReset}
                className="btn btn-success"
                style={{ marginLeft: "10px" }}
              >
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DinamicFormPage;
