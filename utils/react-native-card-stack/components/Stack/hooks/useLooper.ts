import React from 'react';

import useList from 'react-use/lib/useList';
import useMount from 'react-use/lib/useMount';
import useCounter from 'react-use/lib/useCounter';
import { useStackContext } from '../Stack.context';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
// import usePreviousDistinct from 'react-use/lib/usePreviousDistinct';

type UseLooper<T> = {
  data: T;
  loop?: boolean;
  initialIndex?: number;
};

const useLooper = <T extends any[]>({ data, loop, initialIndex }: UseLooper<T>) => {
  const { setState } = useStackContext();
  const mutatedData = React.useMemo(() => [...data], [data]);
  const [currentCardIndex, { inc, set }] = useCounter(0, data.length - 1);
  const [cards, { removeAt, push, insertAt }] = useList<T[0]>(mutatedData);
  console.log('csasd', cards.length);

  // const previousCardIndex = usePreviousDistinct(currentCardIndex, (prev, next) => prev === next);

  const goToNext = React.useCallback(() => {
    if (loop) {
      set((prev) => (prev + 1) % data.length);
      return push(cards.shift());
    }
    inc();
    return removeAt(0);
  }, [cards, data.length, inc, loop, push, removeAt, set]);

  const jumpToCardIndex = React.useCallback(
    ({ id, index }: { id?: string; index?: number }) => {
      // if there is not any element with the given index in the cards array, then just stop the function
      const idx = index ?? cards.findIndex((item) => item.id === id);
      if (!cards[idx]) {
        return;
      }
      if (idx === 0) {
        // if the gived index is already the first in the array, then just update the currentCardIndex
        return set(idx);
      }
      // update the currentCardIndex
      set(idx);
      // remove the element at the given index from the cards array
      removeAt(idx);
      // push the element at the given index on the first position in the array
      return insertAt(0, cards[idx]);
    },
    [cards, insertAt, removeAt, set],
  );

  const CARDS = cards.slice(0, 2);
  const cardsEnded = cards.length === 0;

  useUpdateEffect(() => {
    if (initialIndex) {
      set(initialIndex);
    }
  }, [initialIndex]);

  useUpdateEffect(() => {
    setState((prev) => ({ ...prev, cardsEnded, currentCardIndex }));
  }, [cardsEnded, currentCardIndex]);

  useMount(() => setState((prev) => ({ ...prev, jumpToCardIndex })));

  return { CARDS, currentCardIndex, cardsEnded, goToNext, jumpToCardIndex };
};

export default useLooper;
