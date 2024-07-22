import { it, expect, describe, vi } from "vitest";
import { doubleUserAge } from "./user-class";
import { User } from "./User";

vi.mock("./User.ts", () => {
  return {
    User: class User {
      age: number = 2;
    },
  };
});

describe("使用class的形式", () => {
  it("属性", () => {
    const r = doubleUserAge();
    expect(r).toBe(4);
  });

  it("属性", () => {
    User.prototype.getAge = () => {
      return 2;
    };

    const r = doubleUserAge();
    expect(r).toBe(4);
  });
});
