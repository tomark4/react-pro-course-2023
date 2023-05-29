import { ErrorMessage, useField } from "formik";

interface Props {
  name: string;
  id?: string;
  label?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

const TextInput = ({ id, name, label, type, placeholder, ...props }: Props) => {
  const [field, meta] = useField({ ...props, name });

  return (
    <>
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...field}
        className={`${meta.error && meta.touched && "has-error"}`}
      />
      <ErrorMessage component="span" name={name} />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};

export default TextInput;
