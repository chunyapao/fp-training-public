// 1/3 - Option

type Option<A> = None | Some<A>;

type None = Readonly<{ _tag: "none" }>;
type Some<A> = Readonly<{
  _tag: "some";
  value: A;
}>;

const some = <A>(x: A): Option<A> => ({
  _tag: "some",
  value: x,
});

const none: Option<never> = {
  _tag: "none",
};

const isNone = <A>(x: Option<A>): x is None => x._tag === "none";

// 2/3 - Option Type Pattern Matching

type Match = <A, B>(
  onNone: () => B,
  onSome: (value: A) => B,
) => (x: Option<A>) => B;

const match: Match = (onNone, onSome) => (x) =>
  isNone(x) ? onNone() : onSome(x.value);

// 3/3 - MatchW (Widen)

type MatchW = <A, B, C>(
  onNone: () => B,
  onSome: (value: A) => C,
) => (x: Option<A>) => B | C;

const matchW: MatchW = (onNone, onSome) => (x) =>
  isNone(x) ? onNone() : onSome(x.value);
