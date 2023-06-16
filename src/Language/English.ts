interface type {
  LoginAccount: string;
  Email: string;
  Password: string;
  Login: string;
  ForgotPassword: string;
  Error: string;
  AllFieldsRequired: string;
  PleaseEmail: string;
  ValidEmail: string;
  PleasePassword: string;
}
const english: type = {
  LoginAccount: 'Login to your Account',
  Email: 'Email id',
  Password: 'Password',
  Login: 'Login',
  ForgotPassword: 'Forgot My Password',
  Error: 'error',
  AllFieldsRequired: 'All fields are required',
  PleaseEmail: 'Please enter Email',
  ValidEmail: 'Please enter valid Email',
  PleasePassword: 'Please enter password',
};

export default english;
