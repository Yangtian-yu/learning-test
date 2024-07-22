import { it, expect, describe } from "vitest";
import { type FileReader, readAndProcessFile } from "./readAndProcessFile";
describe("di - class", () => {
  // it("构造函数", () => {
  //   class fileReader implements FileReader {
  //     read(filePath: string): string {
  //       return "yty";
  //     }
  //   }
  //   const res = new readAndProcessFile(new fileReader());
  //   expect(res.run("./txt")).toBe("ytytest");
  // });
  // it("属性", () => {
  //   class fileReader implements FileReader {
  //     read(filePath: string): string {
  //       return "yty";
  //     }
  //   }
  //   const res = new readAndProcessFile();
  //   res.fileReader = new fileReader();
  //   expect(res.run("./txt")).toBe("ytytest");
  // });
  it("方法", () => {
    class fileReader implements FileReader {
      read(filePath: string): string {
        return "yty";
      }
    }
    const res = new readAndProcessFile();
    res.setFileReader(new fileReader());
    expect(res.run("./txt")).toBe("ytytest");
  });
});
