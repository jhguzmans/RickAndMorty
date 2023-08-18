import style from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    setUserData(
      {
        ...userData,
        [event.target.name]: event.target.value,
      },
      validation(userData, setUserData, errors, setErrors, event)
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.container}>
        <label htmlFor="email">Email</label>
        <input
          autoComplete="email"
          name="email"
          type="email"
          placeholder="Ingrese su email."
          value={userData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className={style.danger}>{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          autoComplete="current-password"
          name="password"
          type="password"
          placeholder="Ingrese su contraseña."
          value={userData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className={style.danger}>{errors.password}</p>}
      </div>
      <button
        disabled={
          !userData.email ||
          !userData.password ||
          errors.email ||
          errors.password
        }
        className={style.button}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
