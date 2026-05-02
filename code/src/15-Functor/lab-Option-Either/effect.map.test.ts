import { pipe } from "effect/Function";
import { map, none, some } from "effect/Option";

const strLength = (x: string) => x.length;
const increment = (x: number) => x + 1;

// Lab 4: map from Effect -----------------------

describe("Map with Effect", () => {
  it("should be able to compose strLength and increment with map", () => {
    expect(pipe(some("abcd"), map(strLength), map(increment))).toEqual(some(5));

    expect(pipe(none(), map(strLength), map(increment))).toEqual(none());
  });
});
