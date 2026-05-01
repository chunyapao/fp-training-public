// 1/3 - Define Option, Some, None

type Option<A> = Some<A> | None;

type Some<A> = Readonly<{
  _tag: "Some";
  value: A;
}>;

type None = Readonly<{
  _tag: "None";
}>;

export const some = <A>(value: A): Some<A> => ({
  _tag: "Some",
  value,
});

export const none: None = {
  _tag: "None",
};

export const isSome = <A>(fa: Option<A>): fa is Some<A> => fa._tag === "Some";

export const isNone = <A>(fa: Option<A>): fa is None => fa._tag === "None";

// 2/3 - Use Option Type
const divideTwo = (n: number): number => 2 / n;
const liftUp = (n: number): Option<number> => (n === 0 ? none : some(n));
const shouldDivideTwo = (option: Option<number>): Option<number> => {
  if (isSome(option)) {
    return liftUp(divideTwo(option.value));
  }
  return none;
};
