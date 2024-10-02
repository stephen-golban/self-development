import { StyleSheet } from 'react-native';
import { STACK_UTILS } from '../Stack.utils';

export default StyleSheet.create({
  swipeable: {
    width: STACK_UTILS.SCREEN_WIDTH,
    height: STACK_UTILS.SCREEN_HEIGHT - 100,
    position: 'absolute',
    borderRadius: 3,
    top: undefined,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    elevation: 2,
  },
});
