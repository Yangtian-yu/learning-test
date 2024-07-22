import { fetchUserAge, userAge } from "./user";

//直接input
function add(a: number, b: number) {
  return a + b;
}

//间接的input
export function dobleUserAge(): number {
  return userAge() * 2;
}

export async function fetchDoubleUserAge(): Promise<number> {
  const userAge = await fetchUserAge();
  return userAge * 2;
}
