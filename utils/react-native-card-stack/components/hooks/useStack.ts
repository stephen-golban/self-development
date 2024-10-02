import React from 'react';
import { Animated, Dimensions, PanResponder } from 'react-native';
import { IStackProps } from '../Stack.types';
import { useMap } from '../../lib/react-use';
import { distance, mod, STACK_UTILS } from '../Stack.utils';
import usePrevious from 'react-use/lib/usePrevious';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

type Direction = 'left' | 'right';
type CardType = JSX.Element[];

const { width } = Dimensions.get('window');

const useStack = (props: IStackProps) => {
  const prevProps = usePrevious({ children: props.children });
  const [state, { set: setState, setAll }] = useMap({
    drag: new Animated.ValueXY({ x: 0, y: 0 }),
    dragDistance: new Animated.Value(0),
    sindex: 0, // index to the next card to be renderd mod card.length
    cardA: null as CardType | null,
    cardB: null as CardType | null,
    topCard: 'cardA',
    cards: [] as CardType[],
    touchStart: 0,
  });

  const _resetCard = () => {
    Animated.timing(state.dragDistance, {
      toValue: 0,
      duration: STACK_UTILS.duration,
      useNativeDriver: false,
    }).start();
    Animated.spring(state.drag, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const _nextCard = (direction: Direction, x: number, y: number, duration = 400) => {
    const { loop } = props;
    const { sindex, cards, topCard } = state;

    // index for the next card to be renderd
    const nextCard = loop ? Math.abs(sindex) % cards.length : sindex;

    // index of the swiped card
    const index = loop ? mod(nextCard - 2, cards.length) : nextCard - 2;

    if (index === cards.length - 1) {
      props.onSwipedAll && props.onSwipedAll();
    }

    if (sindex - 2 < cards.length || loop) {
      Animated.spring(state.dragDistance, {
        toValue: 220,
        useNativeDriver: false,
      }).start();

      Animated.timing(state.drag, {
        toValue: { x: x, y: 0 },
        duration,
        useNativeDriver: false,
      }).start(() => {
        const newTopCard = topCard === 'cardA' ? 'cardB' : 'cardA';

        if (newTopCard === 'cardA') {
          setState('cardB', cards[nextCard]);
        }
        if (newTopCard === 'cardB') {
          setState('cardA', cards[nextCard]);
        }
        state.drag.setValue({ x: 0, y: 0 });
        state.dragDistance.setValue(0);
        setAll({ ...state, topCard: newTopCard, sindex: nextCard + 1 });

        props.onSwiped && props.onSwiped(index);
        switch (direction) {
          case 'left':
            props.onSwipedLeft && props.onSwipedLeft(index);
            if (state.cards[index] && state.cards[index].props.onSwipedLeft) {
              state.cards[index] && state.cards[index].props.onSwipedLeft(index);
            }
            break;
          case 'right':
            props.onSwipedRight && props.onSwipedRight(index);
            if (state.cards[index] && state.cards[index].props.onSwipedRight) {
              state.cards[index].props.onSwipedRight(index);
            }
            break;

          default:
        }
      });
    }
  };

  const _goBack = (direction: Direction) => {
    const { cards, sindex, topCard } = state;

    if (sindex - 3 < 0 && !props.loop) {
      return;
    }

    const previusCardIndex = mod(sindex - 3, cards.length);

    if (topCard === 'cardA') {
      setState('cardB', cards[previusCardIndex]);
    } else {
      setState('cardA', cards[previusCardIndex]);
    }

    setAll({
      ...state,
      topCard: topCard === 'cardA' ? 'cardB' : 'cardA',
      sindex: sindex - 1,
    });

    switch (direction) {
      case 'left':
        state.drag.setValue({ x: -width, y: 0 });
        state.dragDistance.setValue(width);
        break;
      case 'right':
        state.drag.setValue({ x: width, y: 0 });
        state.dragDistance.setValue(width);
        break;
      default:
    }

    Animated.spring(state.dragDistance, {
      toValue: 0,
      useNativeDriver: false,
    }).start();

    Animated.spring(state.drag, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const goBackFromRight = () => {
    _goBack('right');
  };

  const goBackFromLeft = () => {
    _goBack('left');
  };

  const swipeRight = (d = null) => {
    _nextCard('right', width * 1.5, 0, d || STACK_UTILS.duration);
  };

  const swipeLeft = (d = null) => {
    _nextCard('left', -width * 1.5, 0, d || STACK_UTILS.duration);
  };

  const initDeck = () => {
    if (typeof props.children === 'undefined') {
      return;
    }
    const { children, loop } = props;
    const cards = React.Children.toArray(children);
    const initialIndexA = props.initialIndex && props.initialIndex < cards.length ? props.initialIndex : 0;
    const initialIndexB = loop ? mod(initialIndexA + 1, cards.length) : initialIndexA + 1;
    const cardA = cards[initialIndexA] || null;
    const cardB = cards[initialIndexB] || null;
    setAll({
      ...state,
      cards: cards as CardType[],
      cardA: cardA as CardType,
      cardB: cardB as CardType,
      sindex: initialIndexB + 1,
    });
  };

  /**
   * @description CardB’s click feature is trigger the CardA on the card stack. (Solved on Android)
   * @see https://facebook.github.io/react-native/docs/view#pointerevents
   */
  const _setPointerEvents = (topCard: any, topCardName: 'cardA' | 'cardB') => {
    return { pointerEvents: topCard === topCardName ? 'auto' : 'none' };
  };

  const _isSameChildren = (a: any, b: any) => {
    if (typeof a !== typeof b) {
      return false;
    }
    if (typeof a === 'undefined') {
      return false;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }
      for (let i in a) {
        if (a[i].key !== b[i].key) {
          return false;
        }
      }
      return true;
    }
    if (a.key !== b.key) {
      return false;
    }

    return true;
  };
  const _getIndex = (index: number, cards: number) => {
    return props.loop ? mod(index, cards) : index;
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (evt, { dx, dy }) => {
        const isVerticalSwipe = Math.pow(dx, 2) < Math.pow(dy, 2);
        if (isVerticalSwipe) {
          return false;
        }
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) > 10;
      },
      onMoveShouldSetPanResponderCapture: (evt, { dx, dy }) => {
        const isVerticalSwipe = Math.pow(dx, 2) < Math.pow(dy, 2);
        if (isVerticalSwipe) {
          return false;
        }
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)) > 10;
      },
      onPanResponderGrant: () => {
        props?.onSwipeStart && props.onSwipeStart();
        setState('touchStart', new Date().getTime());
      },
      onPanResponderMove: (evt, gestureState) => {
        const movedX = gestureState.moveX - gestureState.x0;
        const movedY = gestureState.moveY - gestureState.y0;

        props.onSwipe && props.onSwipe(movedX, movedY);

        state.dragDistance.setValue(distance(gestureState.dx, 0));
        state.drag.setValue({ x: gestureState.dx, y: 0 });
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        props.onSwipeEnd && props.onSwipeEnd();
        const currentTime = new Date().getTime();
        const swipeDuration = currentTime - state.touchStart;
        const { horizontalThreshold, duration } = STACK_UTILS;

        if (
          Math.abs(gestureState.dx) > horizontalThreshold ||
          (Math.abs(gestureState.dx) > horizontalThreshold * 0.6 && swipeDuration < 150)
        ) {
          const swipeDirection = gestureState.dx < 0 ? width * -1.5 : width * 1.5;

          if (swipeDirection < 0) {
            _nextCard('left', swipeDirection, gestureState.dy, duration);
          } else if (swipeDirection > 0) {
            _nextCard('right', swipeDirection, gestureState.dy, duration);
          } else {
            _resetCard();
          }
        } else {
          _resetCard();
        }
      },
      onPanResponderTerminate: () => {},
      onShouldBlockNativeResponder: () => {
        return true;
      },
    }),
  ).current;

  useUpdateEffect(() => {
    if (typeof props.children === 'undefined') {
      return;
    }
    if (!_isSameChildren(props.children, prevProps?.children)) {
      const children = React.Children.toArray(props.children);
      let aIndex =
        state.topCard === 'cardA'
          ? _getIndex(state.sindex - 2, children.length)
          : _getIndex(state.sindex - 1, children.length);
      let bIndex =
        state.topCard === 'cardB'
          ? _getIndex(state.sindex - 2, children.length)
          : _getIndex(state.sindex - 1, children.length);
      setAll({
        ...state,
        cards: children as CardType[],
        cardA: (children[aIndex] as CardType) || null,
        cardB: (children[bIndex] as CardType) || null,
      });
    }
  }, [props.children]);

  return {
    state,
    width,
    _getIndex,
    initDeck,
    panResponder,
    _isSameChildren,
    goBackFromLeft,
    goBackFromRight,
    swipeLeft,
    swipeRight,
    _setPointerEvents,
    _goBack,
  };
};

export default useStack;
