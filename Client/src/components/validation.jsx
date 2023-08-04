const validation = (userData, setUserData, errors, setErrors, event) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /\d/;
  if (event.target.name === "email") {
    if (
      !regexEmail.test(userData.email) ||
      userData.email.length >= 34 ||
      userData.email.length === 0
    ) {
      setErrors({
        ...errors,
        email: "El correo ingresado, no es permitido.",
      });
    } else {
      setErrors({
        ...errors,
        email: "",
      });
    }
  } else {
    if (
      !regexPassword.test(userData.password) ||
      userData.password.length < 4 ||
      userData.password.length > 9
    ) {
      setErrors({
        ...errors,
        password: "La constraseña no es válida.",
      });
    } else {
      setErrors({
        ...errors,
        password: "",
      });
    }
  }
};
export default validation;
