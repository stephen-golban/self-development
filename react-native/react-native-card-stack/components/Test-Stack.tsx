/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Animated, Platform } from 'react-native';

import useStack from './hooks/useStack';
import useMount from 'react-use/lib/useMount';

import { IStackProps } from './Stack.types';
import { STACK_UTILS } from './Stack.utils';

const Stack = React.forwardRef((props: IStackProps, ref) => {
  const { state, _setPointerEvents, initDeck, width, panResponder, ...rest } = useStack(props);
  const { renderNoMoreCards } = props;
  const { drag, dragDistance, cardA, cardB, topCard } = state;

  const scale = dragDistance.interpolate({
    inputRange: [0, 10, 220],
    outputRange: [STACK_UTILS.secondCardZoom, STACK_UTILS.secondCardZoom, 1],
    extrapolate: 'clamp',
  });
  const rotate = drag.x.interpolate({
    inputRange: [width * -1.5, 0, width * 1.5],
    outputRange: STACK_UTILS.outputRotationRange,
    extrapolate: 'clamp',
  });

  useMount(() => initDeck());
  React.useImperativeHandle(ref, () => ({ ...rest }));

  return (
    <View {...panResponder.panHandlers} style={[{ position: 'relative' }]}>
      {renderNoMoreCards && renderNoMoreCards}

      <Animated.View
        {...(_setPointerEvents(topCard, 'cardB') as any)}
        style={[
          {
            position: 'absolute',
            zIndex: topCard === 'cardB' ? 3 : 2,
            ...Platform.select({
              android: {
                elevation: topCard === 'cardB' ? 3 : 2,
              },
            }),
            transform: [
              { rotate: topCard === 'cardB' ? rotate : '0deg' },
              { translateX: topCard === 'cardB' ? drag.x : 0 },
              { translateY: topCard === 'cardB' ? drag.y : 0 },
              { scale: topCard === 'cardB' ? 1 : scale },
            ],
          },
        ]}
      >
        {cardB}
      </Animated.View>
      <Animated.View
        {...(_setPointerEvents(topCard, 'cardA') as any)}
        style={[
          {
            position: 'absolute',
            zIndex: topCard === 'cardA' ? 3 : 2,
            ...Platform.select({
              android: {
                elevation: topCard === 'cardA' ? 3 : 2,
              },
            }),
            transform: [
              { rotate: topCard === 'cardA' ? rotate : '0deg' },
              { translateX: topCard === 'cardA' ? drag.x : 0 },
              { translateY: topCard === 'cardA' ? drag.y : 0 },
              { scale: topCard === 'cardA' ? 1 : scale },
            ],
          },
        ]}
      >
        {cardA}
      </Animated.View>
    </View>
  );
});

export default Stack;
