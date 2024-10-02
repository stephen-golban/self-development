import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const distance = (x: number, y: number) => {
  return Math.hypot(x, y);
};
const mod = (n: number, m: number) => {
  return ((n % m) + m) % m;
};

const STACK_UTILS = {
  ACTION_OFFSET: 150,
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  SECOND_CARD_ZOOM: 0.95,
  SWIPE_OUT_DURATION: 300,
  SWIPE_THRESHOLD: 0.4 * width,
  IS_WEB: Platform.OS === 'web',
  OUT_OF_SCREEN: width + 0.5 * width,
};

export { mod, distance, STACK_UTILS };
