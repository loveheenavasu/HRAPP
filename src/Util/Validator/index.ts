/* eslint-disable no-useless-escape */
const isEmailValid = (email: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};
export {isEmailValid};
const Validator = {
  isEmailValid,
};

export default Validator;
