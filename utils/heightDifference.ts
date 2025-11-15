import { Platform } from 'react-native';

export const HandleHightAcordingly = (height: number): number => {
  if (Platform.OS === 'android') {
    return height / 2 - 50;
  } else {
    return height / 2 - 100;
  }
};
