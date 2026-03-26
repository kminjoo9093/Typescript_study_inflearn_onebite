/**
 * 맵드 타입
 * 객체 타입 조작
 * 인터페이스에서 사용불가, 타입 별칭에서만 사용
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

// type BooleanUser = {
//   [key in "id" | "name" | "age"]: boolean;
// };

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: "누구",
    age: 25,
  };
}

const user = fetchUser();
// user.id = 1;

function updateUSer(user: PartialUser) {
  // ... 수정하는 기능
}

updateUSer({
  // id: 1,
  // name: "누구",
  age: 20,
});
