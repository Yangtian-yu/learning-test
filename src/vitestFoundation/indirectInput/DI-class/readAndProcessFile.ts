import { readFileSync } from "fs";

// export class readAndProcessFile {
//   run(filePath: string) {
//     const content = readFileSync(filePath, { encoding: "utf-8" });
//     return content + "test";
//   }
// }

export interface FileReader {
  read(filePath: string): string;
}

// export class readAndProcessFile {
//   private _fileReader: FileReader;
//   constructor(fileReader: FileReader) {
//     this._fileReader = fileReader;
//   }

//   run(filePath: string) {
//     const content = this._fileReader.read(filePath);
//     return content + "test";
//   }
// }

//属性
// export class readAndProcessFile {
//   private _fileReader: any;

//   constructor() {}

//   run(filePath: string) {
//     const content = this._fileReader.read(filePath);
//     return content + "test";
//   }

//   get fileReader() {
//     return this._fileReader;
//   }

//   set fileReader(fileReader: FileReader) {
//     this._fileReader = fileReader;
//   }
// }

//方法
export class readAndProcessFile {
  private _fileReader: any;

  constructor() {}

  run(filePath: string) {
    const content = this._fileReader.read(filePath);
    return content + "test";
  }

  setFileReader(fileReader: FileReader) {
    this._fileReader = fileReader;
  }
}
