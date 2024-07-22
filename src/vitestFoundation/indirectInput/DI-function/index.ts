import { readFileSync } from "fs";
import { readAndProcessFile, type FileReader } from "./readAndProcessFile";

class TxtFileReader implements FileReader {
  read(filePth: string) {
    return readFileSync(filePth, { encoding: "utf-8" });
  }
}

const result = readAndProcessFile("example.text", new TxtFileReader());
