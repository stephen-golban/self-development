import React, { PropsWithChildren } from 'react';
import { SwipeCardDirection } from './Stack.types';

interface IStackContext extends IStackState {
  setState: React.Dispatch<React.SetStateAction<IStackState>>;
}

interface IStackState {
  cardsEnded: boolean;
  currentCardIndex: number;
  swipeCard: (arg: SwipeCardDirection) => void;
  jumpToCardIndex: (args: { id?: string; index?: number }) => void;
}
const DEFAULT_STATE: IStackState = {
  jumpToCardIndex: () => null,
  cardsEnded: false,
  currentCardIndex: 0,
  swipeCard: () => null,
};
const StackContext = React.createContext<IStackContext | null>(null);

const StackProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = React.useState(DEFAULT_STATE);

  const memoizedValue = React.useMemo<IStackContext>(() => {
    return { ...state, setState };
  }, [state]);

  return <StackContext.Provider value={memoizedValue}>{children}</StackContext.Provider>;
};

const useStackContext = () => {
  const ctx = React.useContext(StackContext);
  if (!ctx) {
    throw "Can't use useStackContext outside of the StackProvider";
  }
  return ctx;
};

export { StackProvider, useStackContext };
