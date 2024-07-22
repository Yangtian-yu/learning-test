import { it, expect, describe } from "vitest";
import { readAndProcessFile, type FileReader } from "./readAndProcessFile";

describe("di function", () => {
  it("read and process file", () => {
    class StubFileReader implements FileReader {
      read(filePath: string) {
        return "yty";
      }
    }
    const result = readAndProcessFile("./text", new StubFileReader());
    expect(result).toBe("ytytest");
  });
});
