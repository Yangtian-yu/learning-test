import { it, expect } from "vitest";

//比较数值 toBe
it("toBe", () => {
  expect(1).toBe(1);
});

//toEqual 对象比较
it("toEqual", () => {
  const user = {
    name: "xiaohong",
  };
  expect(user).toEqual({
    name: "xiaohong",
  });
});

//输出是否为真值  不考虑输出内容
it("toBeTruethy", () => {
  expect(1).toBeTruthy();
  expect(true).toBeTruthy();
  expect("234").toBeTruthy();
});

//输出是否为假值  不考虑输出内容
it("toBeFalsy", () => {
  expect(0).toBeFalsy();
  expect(false).toBeFalsy();
  expect("").toBeFalsy();
});

//检测数组 或者 string是否包含
it("toContain", () => {
  const item1 = {
    name: "xiaohong",
  };
  const item2 = {
    name: "xiaoming",
  };
  const item3 = { name: "x" };
  const list = [item1, item2];
  expect(list).contain(item1);
  // expect(list).contain(item3);
});

//检测一个函数是否会抛出错误
it("toThrow", () => {
  function getName(name) {
    if (typeof name !== "string") {
      throw new Error("错误的name");
    }
    return "hei";
  }
  expect(() => {
    getName(111);
  }).toThrow("错误的name");
});
