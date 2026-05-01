// 1/5 Increment and toString
type Increment = (x: number) => number;
export const increment: Increment = (x) => x + 1;

type ToString = (x: number) => string;
export const toString: ToString = (x) => `${x}`;

// 2/5 - increment then string
type IncrementThenToString = (x: number) => string;
export const incrementThenToString: IncrementThenToString = (x) =>
  (x + 1).toString();

// 3/5 - compose
export const compose =
  (f: Increment, g: ToString) =>
  (x: number): string =>
    g(f(x));

// 4/5 - introduce type
type Compose = (f: Increment, g: ToString) => (x: number) => string;
export const composeV2: Compose = (f, g) => (x) => g(f(x));

// 5/5 - replace compose specific type with the Generic types
type ComposeGenerics = <N, S>(f: (x: N) => N, g: (x: N) => S) => (x: N) => S;
export const composeV3: ComposeGenerics = (f, g) => (x) => g(f(x));
