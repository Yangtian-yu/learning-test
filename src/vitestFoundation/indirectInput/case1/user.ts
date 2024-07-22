const user = {
  age: 1,
};

export function userAge() {
  //api
  //return user.age
  return 2;
}

export function fetchUserAge(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(10);
    }, 0);
  });
}
