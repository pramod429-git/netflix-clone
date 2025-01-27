export const checkValidData = (email, password) => {
  //const NameValidate = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const EmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const PasswordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //   if (!NameValidate) {
  //     return <p>Name is not valid</p>;
  //   }

  if (!EmailValidate) {
    return "Email ID is not valid";
  }

  if (!PasswordValidate) {
    return "Password is not valid";
  }

  return null;
};
