import { it, expect, describe, vi } from "vitest";
import { doubleUserAge } from "./third-party-moudles";
import axios from "axios";

vi.mock("axios");

it("第三方模块的处理 axios", async () => {
  vi.mocked(axios.get).mockResolvedValue({ name: "cxr", age: 2 });
  const r = await doubleUserAge();
  expect(r).toBe(4);
});
