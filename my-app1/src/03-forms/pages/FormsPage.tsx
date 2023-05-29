import "../styles/styles.css";
import useForm from "../hooks/useForm";

const RegisterComponent = () => {
  const { values, handleChange, handleSubmit, reset, isValidEmail } = useForm({
    email: "a@algo.com",
    name: "Joseph",
    password: "123",
    passwordConfirm: "123",
    terms: false,
  });

  return (
    <>
      <h1>Create user account</h1>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          className={`${values.name.trim().length <= 0 && "has-error"}`}
        />
        {values.name.trim().length <= 0 && <span>Required field</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          className={`${!isValidEmail(values.email) && "has-error"}`}
        />
        {!isValidEmail(values.email) && <span>Invalid email</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {values.password.trim().length <= 0 && <span>Required field</span>}
        {values.password.trim().length < 6 &&
          values.password.trim().length > 0 && (
            <span>Password must have at least 6 chars</span>
          )}
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Repeat password"
          value={values.passwordConfirm}
          onChange={handleChange}
        />
        {values.passwordConfirm.trim().length <= 0 && (
          <span>Required field</span>
        )}
        {values.passwordConfirm.trim().length > 0 &&
          values.password.trim() !== values.passwordConfirm.trim() && (
            <span>Password must match</span>
          )}

        {/* <input
          type="checkbox"
          name="terms"
          onChange={() => handleCheckboxChange("terms")}
          checked={values.terms}
        /> 
        Accept terms and conditions*/}

        <button type="submit">Create account</button>
        <button type="button" onClick={reset}>
          Reset form
        </button>
      </form>
    </>
  );
};

const FormsPage = () => {
  return (
    <div>
      <RegisterComponent />
    </div>
  );
};

export default FormsPage;
