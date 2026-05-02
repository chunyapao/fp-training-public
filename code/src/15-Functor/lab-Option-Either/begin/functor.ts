import { Either, left, match as matchEither, right } from "../libs/either";
import { match, none, Option, some } from "../libs/option";

// Lab2.1: Option - StrLength -----------------------

type StrLength = (x: string) => number;
const strLength: StrLength = (x) => x.length;

type OptStrLength = (x: Option<string>) => Option<number>;
const optStrLength: OptStrLength = (x) =>
  match(
    () => none,
    (value: string) => some(strLength(value)),
  )(x);

export { optStrLength, strLength };

// Lab2.2: Option - Increment -----------------------

type Increment = (x: number) => number;
const increment: Increment = (x) => x + 1;

type OptIncrement = (x: Option<number>) => Option<number>;
const optIncrement: OptIncrement = (x) =>
  match(
    () => none,
    (value: number) => some(increment(value)),
  )(x);

export { increment, optIncrement };

// Lab2.3: Map Option -----------------------

type MapOption = <A, B>(f: (a: A) => B) => (x: Option<A>) => Option<B>;
const mapOption: MapOption = (f) =>
  match(
    () => none,
    (value) => some(f(value)),
  );

export { mapOption };

// Lab 3: Map Either

type MapEither = <A, B, E>(f: (a: A) => B) => (x: Either<E, A>) => Either<E, B>;
const mapEither: MapEither = (f) =>
  matchEither(
    (e) => left(e),
    (a) => right(f(a)),
  );

export { mapEither };
