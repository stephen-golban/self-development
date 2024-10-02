import React from 'react';
import { Animated, GestureResponderHandlers } from 'react-native';

import styles from './Swipeable.styles';

const AVStyle = Animated.View.defaultProps?.style;

interface ISwipableProps extends React.PropsWithChildren {
  style: typeof AVStyle;
  dragHandlers: GestureResponderHandlers;
}

const Swipable: React.FC<ISwipableProps> = ({ children, style, dragHandlers }) => {
  return (
    <Animated.View style={[style, styles.swipeable]} {...dragHandlers}>
      {children}
    </Animated.View>
  );
};

export default Swipable;
