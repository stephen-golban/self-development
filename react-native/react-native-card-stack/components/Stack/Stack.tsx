import React from 'react';
import { Animated, Button, Text } from 'react-native';

import S from './Stack.styles';

import useStack from './hooks/useStack';
import { useStackContext } from './Stack.context';
import usePanResponder from './hooks/usePanResponder';

import Card from '../Card/Card';
import Swipable from '../Swipeable/Swipeable';

import { IStackProps } from './Stack.types';

const Stack: React.FC<IStackProps> = (props) => {
  const { cardsEnded, jumpToCardIndex } = useStackContext();
  const { onSwipeStart, onSwipeEnd, onSwiping } = props;
  const { swipeCard, position, ...stack } = useStack(props);
  const panHandlers = usePanResponder({ onSwipeStart, onSwipeEnd, onSwiping, swipeCard, position });

  return (
    <Animated.View style={S.StackView}>
      {cardsEnded
        ? props.renderNoMoreCards ?? <Text>No more cards!</Text>
        : stack.cards
            .slice(0, 2)
            .reverse()
            .map((item, index, items) => {
              index = items.length - index - 1;
              const isFirstItem = index === 0;

              return (
                <Swipable
                  key={item.name + index}
                  dragHandlers={isFirstItem ? panHandlers.panHandlers : {}}
                  style={[isFirstItem && stack.dragAnimation, !isFirstItem && stack.nextCardAnimation]}
                >
                  <Card title={item.name} source={item.images[0]} />
                </Swipable>
              );
            })}

      <Button
        title="Jump"
        onPress={() => {
          const id = props.data.find((item) => item.name.startsWith('Cristina'))?.id;
          if (id) {
            return jumpToCardIndex({ index: 3 });
          }
        }}
      />
    </Animated.View>
  );
};

export default Stack;
