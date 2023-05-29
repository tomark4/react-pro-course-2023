import { ErrorMessage, useField } from "formik";

interface Props {
  name: string;
  label: string;
  id?: string;
  [x: string]: any;
}

const Checkbox = ({ id, name, label, type, placeholder, ...props }: Props) => {
  const [field] = useField({ ...props, name });

  return (
    <div style={{ marginTop: "20px" }}>
      <label htmlFor={id || name}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage component="span" name={name} />
    </div>
  );
};

export default Checkbox;
