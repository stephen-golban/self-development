import React from 'react';
import { Animated, PanResponder, GestureResponderEvent, PanResponderGestureState } from 'react-native';

import { STACK_UTILS } from '../../Stack.utils';
import { IStackUtilities, SwipeCardDirection } from '../Stack.types';

export interface IPanResponderProps extends Pick<IStackUtilities, 'onSwipeEnd' | 'onSwipeStart' | 'onSwiping'> {
  position: Animated.ValueXY;
  swipeCard: (arg: SwipeCardDirection) => void;
}

const onPanResponderMove = (props: Pick<IPanResponderProps, 'onSwiping' | 'position'>) => {
  const { position, onSwiping } = props;
  return (_: GestureResponderEvent, { dx, dy }: PanResponderGestureState) => {
    onSwiping && onSwiping(dx, dy);
    return position.setValue({ x: dx, y: dy });
  };
};

const onPanResponderRelease = (props: Pick<IPanResponderProps, 'swipeCard' | 'position' | 'onSwipeEnd'>) => {
  const { swipeCard, position, onSwipeEnd } = props;
  return (_: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    onSwipeEnd && onSwipeEnd();
    const direction = Math.sign(gestureState.dx); // returns -1 if dragged to 'left' and 1 if dragged to 'right'
    if (Math.abs(gestureState.dx) > STACK_UTILS.ACTION_OFFSET) {
      // if direction is 1 it will effectuate swipe right else left
      if (direction === 1) {
        return swipeCard('right');
      }
      return swipeCard('left');
    }
    //reset position
    return Animated.spring(position, {
      friction: 5,
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };
};

const onPanResponderGrant = (onSwipeStart: IStackUtilities['onSwipeStart']) => {
  return () => {
    if (!onSwipeStart) {
      return;
    }

    return onSwipeStart();
  };
};

const usePanResponder = ({ position, swipeCard, ...utilities }: IPanResponderProps) => {
  const panResponder = React.useMemo(() => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: onPanResponderMove({ position, onSwiping: utilities.onSwiping }),
      onPanResponderRelease: onPanResponderRelease({ swipeCard, position, onSwipeEnd: utilities.onSwipeEnd }),
      onPanResponderGrant: onPanResponderGrant(utilities.onSwipeStart),
    });
  }, [position, swipeCard, utilities]);

  return panResponder;
};

export default usePanResponder;
