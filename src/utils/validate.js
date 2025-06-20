export const Validate = (name,email, password) => {
  const nameValidation = /^[A-Za-z\s]{2,50}$/.test(name);
  const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@()!%*?&.]{6,}$/.test(password);
  if (!emailValidation) return "Email is not Valid";
  if (!passwordValidation) return "Password is not Valid";
  if(!nameValidation) return "Name is not Valid"
  return null;
}