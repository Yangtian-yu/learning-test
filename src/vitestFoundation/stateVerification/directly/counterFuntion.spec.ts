import { it, expect, describe, afterEach } from "vitest";
import { getCount, increment, reset } from "./counterFuntion";

describe("counter function ", () => {
  afterEach(() => {
    reset();
  });

  it("increnment", () => {
    // 0=>1
    increment();
    expect(getCount()).toBe(1);
  });
  it("increnment second", () => {
    // 0=>1
    increment();
    expect(getCount()).toBe(1);
  });
});
