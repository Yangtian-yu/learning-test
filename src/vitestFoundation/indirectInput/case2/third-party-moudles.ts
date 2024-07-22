//调用第三方模块
// 比如调用的axios
// 那我应该如何测试呢？
import axios from "axios";
interface User {
  name: string;
  age: number;
}

export async function doubleUserAge() {
  const user: User = await axios.get("user/1");
  return user.age * 2;
}
