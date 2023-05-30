import { Form, Formik } from "formik";
import * as yup from "yup";
import { Select, TextField } from "./components/";
import formJson from "./data/form.json";

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Field is required");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        rule.value as number,
        `Min length must be ${rule.value} char at least`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("Enter valid email");
    }
    // other rules here...
  }

  requiredFields[input.name] = schema;
}

const validationSchema = yup.object().shape({ ...requiredFields });

const DinamicFormPage = () => {
  return (
    <div className="container mt-5">
      <h1>Dinamic form</h1>
      <hr />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ isValid, handleReset }) => (
          <Form noValidate>
            {formJson.map((field) => {
              if (field.type === "select") {
                return (
                  <Select name={field.name} label={field.label} key={field.id}>
                    <option value="">Select option</option>
                    {field.options?.map(({ id, label }) => (
                      <option value={id} key={id}>
                        {label}
                      </option>
                    ))}
                  </Select>
                );
              } else if (
                field.type === "text" ||
                field.type === "password" ||
                field.type === "email"
              ) {
                return <TextField {...field} key={field.id} />;
              } else {
                throw new Error("Format not supported");
              }
            })}
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
