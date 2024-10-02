import { Model } from '../../mock';
import { PropsWithChildren } from 'react';

type SwipeFn = () => void;
type SwipeFnWIndex = (index: number) => void;

export interface IStackUtilities {
  onSwipeStart?: SwipeFn;
  onSwipeEnd?: SwipeFn;
  onSwipedLeft?: SwipeFnWIndex;
  onSwipedRight?: SwipeFnWIndex;
  onSwipedAll?: SwipeFn;
  onSwiped?: SwipeFnWIndex;
  onSwipeBack?: () => void;
  onSwiping?: (x: number, y: number) => void;
}

export interface IStackProps extends PropsWithChildren, IStackUtilities {
  data: Model[];
  loop?: boolean;
  initialIndex?: number;
  renderNoMoreCards?: JSX.Element;
}

export type SwipeCardDirection = 'right' | 'left';
