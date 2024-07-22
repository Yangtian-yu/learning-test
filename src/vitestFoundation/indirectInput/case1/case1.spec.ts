import { vi, it, expect, describe } from "vitest";
import { dobleUserAge, fetchDoubleUserAge } from "./index";
import { userAge, fetchUserAge } from "./user";

// console.log(userAge()); //-》 2

//stub 存根
//替换掉真实的逻辑实现
//
vi.mock("./user.ts", () => {
  return {
    fetchUserAge: () => Promise.resolve(2),
  };
});

// vi.mock("./user.ts");

//我们是否可以控制 间接input 的值（user userAge）

describe("间接input", () => {
  // vi.mocked(userAge).mockReturnValue(2);
  it("first", async () => {
    //given
    const r = await fetchDoubleUserAge();
    //then
    expect(r).toBe(4);
  });
  it("second", () => {
    // vi.mocked(userAge).mockReturnValue(4);
    // console.log(userAge());
  });
});
