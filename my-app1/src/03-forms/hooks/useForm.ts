import React, { useState } from "react";

const useForm = <T>(initialValues: T) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  const handleCheckboxChange = (field: string) => {
    setValues((prev: any) => ({ ...prev, terms: !prev[field] }));
  };

  const reset = () => {
    setValues(initialValues);
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    values,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    reset,
    isValidEmail,
  };
};

export default useForm;
