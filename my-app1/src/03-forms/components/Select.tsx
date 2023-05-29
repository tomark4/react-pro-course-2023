import { ErrorMessage, useField } from "formik";

interface Props {
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  [x: string]: any;
}

const Select = ({ id, name, label, type, placeholder, ...props }: Props) => {
  const [field] = useField({ ...props, name });

  return (
    <>
      {label && <label htmlFor={id || name}>{label}</label>}
      <select {...field} {...props} />
      <ErrorMessage component="span" name={name} />
    </>
  );
};

export default Select;
