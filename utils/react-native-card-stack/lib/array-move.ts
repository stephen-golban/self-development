interface ArrayRange {
  from: number;
  to: number;
}

interface MoveOpts<T> {
  isMutate?: boolean;
  isDuplicate?: boolean;
  isSwap?: boolean;
  fill?: T;
}

/**
 * Converts input to an array
 *
 * @param input
 */
function toArray<T>(input: T | T[]) {
  if (input === null || input === undefined) {
    return [];
  }

  return Array.isArray(input) ? input : [input];
}

/**
 * Moves multiple indexes in the same array
 *
 * @param arr
 * @param movingMap
 * @param opts
 */
function move<T>(
  arr: T[] = [],
  movingMap: ArrayRange | ArrayRange[],
  { isMutate = false, isDuplicate = false, isSwap = true, fill }: MoveOpts<T> = {},
) {
  const modified = isMutate ? arr : arr.slice();

  const mapping = toArray(movingMap);

  mapping.forEach(({ from, to }) => {
    const draft = modified[to];
    modified[to] = arr[from];

    if (isDuplicate) {
      modified[to] = arr[from];
    } else if (fill) {
      modified[from] = fill;
    } else if (!isSwap) {
      // @ts-expect-error
      modified[from] = null;
    } else {
      modified[from] = draft;
    }
  });

  return modified;
}

/**
 *
 * @param unFlatten
 */
function flatten<T>(unFlatten: T[] = []) {
  const flat: T[] = [];

  function flattenRec(arr: T[]) {
    arr.forEach((elm) => {
      if (!Array.isArray(elm)) {
        flat.push(elm);
      } else {
        flattenRec(elm);
      }
    });

    return flat;
  }

  return flattenRec(unFlatten);
}

function compareOneMeta<T>(arr1: T[], arr2: T[], acc: T[] = []) {
  for (let i = 0; i < arr1.length; i += 1) {
    const elm = arr1[i];

    let hasDiff = true;

    for (let j = 0; j < arr2.length; j += 1) {
      if (arr1[i] === arr2[j]) {
        hasDiff = false;
        break;
      }
    }

    if (hasDiff) {
      acc.push(elm);
    }
  }

  return acc;
}

function compare<T>(...args: T[][]) {
  let diff: T[] = args[0];

  for (let i = 1; i < args.length; i += 1) {
    diff = compareOneMeta(diff, args[i]);
  }

  return diff;
}

function compareMeta<T>(arr1: T[], arr2: T[], acc: T[] = []) {
  const firstDiff = compareOneMeta(arr1, arr2, acc);
  return compareOneMeta(arr2, arr1, firstDiff);
}

function compareBoth<T>(...args: T[][]) {
  let acc = args[0];

  for (let i = 1; i < args.length; i += 1) {
    acc = compareMeta(acc, args[i]);
  }

  return acc;
}

export const array = {
  compareBoth,
  compare,
  flatten,
  toArray,
  move,
};
