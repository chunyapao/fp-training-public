export type Monoid<A> = Readonly<{
  empty: A;
  concat: (first: A, second: A) => A;
}>;

export type Sum<A> = (ns: A[]) => A;

export const sum =
  <A>(M: Monoid<A>) =>
  (ns: A[]): A =>
    ns.length === 0 ? M.empty : M.concat(ns[0], sum(M)(ns.slice(1)));

describe("sum monoid", () => {
  it("should sum an array of numbers", () => {
    const sumNumbers = sum({
      empty: 0,
      concat: (a: number, b: number) => a + b,
    });
    expect(sumNumbers([1, 1, 1, 1, 1])).toBe(5);
  });

  it("should sum an array of strings", () => {
    const sumStrings = sum({
      empty: "",
      concat: (a: string, b: string) => a + b,
    });
    expect(sumStrings(["Hello", "World"])).toBe("HelloWorld");
  });

  it("should sum an array of booleans", () => {
    const sumBooleans = sum({
      empty: false,
      concat: (a: boolean, b: boolean) => a || b,
    });
    expect(sumBooleans([true, false, true])).toBe(true);
  });

  it("should sum an array of array of string", () => {
    const sumArrayOfArray = sum({
      empty: [],
      concat: (a: string[], b: string[]) => a.concat(b),
    });
    expect(sumArrayOfArray([["Hello"], ["Functional", "Programming"]])).toEqual(
      ["Hello", "Functional", "Programming"],
    );
  });
});
