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
  Dashboard: string;
  CheckUpcomingLeaves: string;
  UPCOMINGLEAVE: string;
  ViewALL: string;
  LASTLEAVE_TAKEN: string;
  ViewHistory: string;
  NEXTPUBLIC_HOLIDAY: string;
  ViewPublic_Holiday: string;

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
  Dashboard: 'Dashboard',
  CheckUpcomingLeaves:
    'Check your upcoming leaves,Leave balance or apply for one',
  UPCOMINGLEAVE: 'UPCOMING LEAVE',
  ViewALL: 'View ALL',
  LASTLEAVE_TAKEN:"LAST LEAVE TAKEN",
  ViewHistory : "View History",
  NEXTPUBLIC_HOLIDAY:"NEXT PUBLIC HOLIDAY",
  ViewPublic_Holiday:"View Public Holiday",
};

export default english;
