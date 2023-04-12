import {verticalScale} from 'react-native-size-matters';
import Toast from 'react-native-toast-message';

interface type {
  error: 'error';
  success: 'success';
}

interface Props {
  status: 'error' | 'success';
  msg: string;
}
const ToastMsg = (props: Props) => {
  const {status, msg} = props;
  return Toast.show({
    type: status,
    text1: msg,
    position: 'bottom',
    bottomOffset: verticalScale(80),
    visibilityTime: 1700,
  });
};
export default ToastMsg;
