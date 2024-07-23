import { it, expect, describe } from "vitest";
import { Counter } from "./counter";

describe("Count", () => {
  it("increment", () => {
    const counter = new Counter();
    counter.increment();
    expect(counter.getCount()).toBe(1);
  });
});
