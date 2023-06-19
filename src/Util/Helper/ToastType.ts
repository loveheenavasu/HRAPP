import {DeviceEventEmitter} from 'react-native';
const toast = {
  info: (options: any) => {
    DeviceEventEmitter.emit('SHOW_TOAST', {options, type: 'info'});
  },
  success: (options: any) => {
    DeviceEventEmitter.emit('SHOW_TOAST', {options, type: 'success'});
  },
  danger: (options: any) => {
    DeviceEventEmitter.emit('SHOW_TOAST', {options, type: 'danger'});
  },
  error: (options: any) => {
    DeviceEventEmitter.emit('SHOW_TOAST', {options, type: 'error'});
  },
};
export default toast;
