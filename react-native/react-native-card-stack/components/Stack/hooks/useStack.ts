import useLooper from './useLooper';
import useMount from 'react-use/lib/useMount';
import { useStackContext } from '../Stack.context';
import useStackUtilities from './useStackUtilities';

import { IStackProps, SwipeCardDirection } from '../Stack.types';

export type SwipeDirection = 'right' | 'left';

type UseStackCard = Partial<Omit<IStackProps, 'data'>> & { data: IStackProps['data'] };

const useStackCard = (props: UseStackCard) => {
  const { loop, data, initialIndex } = props;
  const { setState } = useStackContext();
  const { position, swipe, ...stackUtilities } = useStackUtilities();
  const looper = useLooper<IStackProps['data']>({ data, loop, initialIndex });

  const swipeFunction = (arg0?: (arg: number) => void) => {
    if (arg0) {
      arg0(looper.currentCardIndex);
    }
  };

  const removeTopCard = (dir: SwipeCardDirection) => {
    position.setValue({ x: 0, y: 0 });
    swipeFunction(props.onSwiped);

    if (dir === 'right') {
      swipeFunction(props.onSwipedRight);
    } else {
      swipeFunction(props.onSwipedLeft);
    }

    return looper.goToNext();
  };

  const swipeCard = (direction: SwipeCardDirection) => swipe(removeTopCard)(direction);

  useMount(() => setState((prev) => ({ ...prev, swipeCard })));
  return {
    cards: looper.CARDS,
    position,
    swipeCard,
    ...stackUtilities,
  };
};

export default useStackCard;
