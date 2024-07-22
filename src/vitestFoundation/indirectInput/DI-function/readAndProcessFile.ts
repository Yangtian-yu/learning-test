export interface FileReader {
  read(filePath: string): string;
}

export function readAndProcessFile(
  filePth: string,
  fileReader: FileReader
): string {
  const content: string = fileReader.read(filePth);
  //在实际场景下可能process的过程会更复杂一点
  return content + "test";
}
