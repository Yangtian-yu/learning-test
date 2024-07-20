import { it, expect, describe } from "vitest";
//test uint
describe("add", () => {
  const user = {
    name: "yty",
  };
  it("should add a item to todos", () => {
    expect(user.name).toBe("yty");
  });
  it("should add a item to todos with reverse command", () => {
    expect(user.name).toBe("yty");
  });
});

describe("remove", () => {
  it("should remove a item ", () => {});
  it("should remove a items", () => {});
});
