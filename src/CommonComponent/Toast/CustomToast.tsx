import { FC } from 'react';
import {verticalScale} from 'react-native-size-matters';
import Toast from 'react-native-toast-message';
interface Props {
  status: 'error' | 'success';
  msg: string;
}
const ToastMsg:FC<Props> = ({status, msg}) => {
  Toast.show({
    type: status,
    text1: msg,
    position: 'bottom',
    bottomOffset: verticalScale(80),
    visibilityTime: 1700,
  });
 return null;
};
export default ToastMsg;
