export const checkValidData = (email, password, fullname) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  if (!isEmailValid) return "Please enter a valid email Id";
  if (!isPasswordValid) return "Please enter a valid password";
  return null;
};
