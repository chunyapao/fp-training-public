// 1/3 - Define Either, Left, Right

export type Either<E, A> = Left<E> | Right<A>;

interface Left<E> {
  readonly _tag: "left";
  readonly left: E;
}
interface Right<A> {
  readonly _tag: "right";
  readonly value: A;
}

export const left = <E, A = never>(left: E): Either<E, A> => ({
  _tag: "left",
  left,
});
export const right = <A, E = never>(right: A): Either<E, A> => ({
  _tag: "right",
  value: right,
});

export const isLeft = <E, A>(fa: Either<E, A>): fa is Left<E> =>
  fa._tag === "left";
export const isRight = <E, A>(fa: Either<E, A>): fa is Right<A> =>
  fa._tag === "right";

let result: Either<string, number>;
result = { _tag: "right", value: 12 };
result = { _tag: "left", left: "Error" };

export const divideTwoIfEven = (num: number): Either<string, number> => {
  if (num === 0) {
    return left("Cannot divide by zero");
  }
  if (num % 2 !== 0) {
    return left("num is not even");
  }
  return right(2 / num);
};
