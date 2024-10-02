import React from 'react';
import { Animated } from 'react-native';

import { STACK_UTILS } from '../../Stack.utils';
import { SwipeCardDirection } from '../Stack.types';

const useStackUtilities = () => {
  const position = React.useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const interpolate = React.useCallback(
    (outputRange: number[] | string[]) => {
      return position.x.interpolate({
        inputRange: [-STACK_UTILS.SCREEN_WIDTH / 2, 0, STACK_UTILS.SCREEN_WIDTH / 2],
        outputRange,
        extrapolate: 'clamp',
      });
    },
    [position.x],
  );

  const dragAnimation = React.useMemo(() => {
    const rotate = interpolate(['-10deg', '0deg', '10deg']);

    return {
      transform: [...position.getTranslateTransform(), { rotate }],
    };
  }, [interpolate, position]);

  const nextCardAnimation = React.useMemo(() => {
    const scale = interpolate([1, STACK_UTILS.SECOND_CARD_ZOOM, 1]);
    return { transform: [{ scale: scale }] };
  }, [interpolate]);

  const swipe = (cb: (arg: SwipeCardDirection) => void) => {
    return (direction: SwipeCardDirection) => {
      const sign = direction === 'left' ? -1 : 1;
      Animated.timing(position.x, {
        useNativeDriver: false,
        duration: STACK_UTILS.SWIPE_OUT_DURATION,
        toValue: sign * STACK_UTILS.OUT_OF_SCREEN,
      }).start(() => cb(direction));
    };
  };

  return { swipe, dragAnimation, nextCardAnimation, position };
};

export default useStackUtilities;
