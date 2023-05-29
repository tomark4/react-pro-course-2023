import { ErrorMessage, Field, useField } from "formik";

interface Props {
  name: string;
  id?: string;
  label?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

const TextField = ({ name, id, type, label, placeholder, ...rest }: Props) => {
  const [field, meta] = useField({ name, ...rest });

  return (
    <>
      {label && <label htmlFor={id || name}>{label}</label>}
      <Field
        type={type || "text"}
        placeholder={placeholder}
        {...rest}
        {...field}
        className={`form-control ${meta.error && meta.touched && "has-error"}`}
      />
      <ErrorMessage
        className="invalid-feedback d-block"
        component="div"
        name={name}
      />
    </>
  );
};

export default TextField;
