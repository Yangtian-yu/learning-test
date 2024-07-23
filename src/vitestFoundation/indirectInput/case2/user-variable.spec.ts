import { it, expect, describe, vi } from "vitest";
import { tellName } from "./user-variable";

vi.mock("./config.ts", async (importOrginal) => {
  const config = await importOrginal();
  // console.log(config);
  return {
    ...(config as any),
    name: "c",
  };
});

describe("使用变量的形式", () => {
  it("tell name", () => {
    const r = tellName();
    expect(r).toBe("c-heiheihei");
  });
});
