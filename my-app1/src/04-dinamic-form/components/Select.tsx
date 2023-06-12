import { ErrorMessage, useField } from "formik";

interface Props {
  name: string;
  id?: string;
  label?: string;
  [x: string]: any;
}

const Select = ({ id, name, label, ...props }: Props) => {
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
