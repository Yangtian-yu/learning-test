import {
  beforeEach,
  afterEach,
  afterAll,
  beforeAll,
  it,
  describe,
} from "vitest";

//1.他的执行循序
// beforeAll beforeEach test afterEech afterAll

//只执行一次  在最开始的时候
// 数据库的连接
// 创建临时文件
beforeAll(() => {
  // console.log("before all");
  return () => {
    //afterAll
  };
});

beforeEach(() => {
  // console.log("before Each");
  return () => {
    //afterEach
  };
});

it("first", () => {
  // console.log("first");
});
it("second", () => {
  // console.log("second");
});

afterEach(() => {
  // console.log("after each");
});

describe("sub", () => {
  beforeEach(() => {
    // console.log("before Each");
  });
  it("first sub", () => {
    // console.log("first sub");
  });
  afterEach(() => {
    // console.log("after each");
  });
});

// 只执行一次 在最后
// 数据库断开连接
// 临时文件需要删除
afterAll(() => {
  // console.log("after all");
});
//2.在什么时候用
