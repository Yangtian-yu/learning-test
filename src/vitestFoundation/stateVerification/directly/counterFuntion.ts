let count = 0;

export function increment() {
  return count++;
}

export function getCount(): number {
  return count;
}

export function reset() {
  return (count = 0);
}
