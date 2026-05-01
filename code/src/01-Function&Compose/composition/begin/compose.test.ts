import {
  compose,
  composeV2,
  composeV3,
  increment,
  incrementThenToString,
  toString,
} from "./compose";

describe("Composition", () => {
  // 1/5 - manually compose
  it("should compose two functions", () => {
    expect(toString(increment(1))).toBe("2");
  });

  // 2/5 - use the function that I composed manually
  it("should compose two functions with incrementThenToString", () => {
    expect(incrementThenToString(1)).toBe("2");
  });

  // 3/5 - compose
  it("should compose two functions with my own compose", () => {
    expect(compose(increment, toString)(1)).toBe("2");
  });

  // 4/5 - introduce type
  it("should compose two functions with my own composeV2", () => {
    expect(composeV2(increment, toString)(1)).toBe("2");
  });

  // 5/5 - replace compose specific type with the Generic types
  it("should compose two functions with my own composeV3", () => {
    expect(composeV3(increment, toString)(1)).toBe("2");
  });
});
