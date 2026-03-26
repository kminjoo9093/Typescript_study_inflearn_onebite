/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

//제네릭 인터페이스 사용할떄는 타입으로 정의할 때 타입 변수에 할당할 타입을 반드시 <>로 할당해야한다
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -123,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 *  제네렉 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

/**
 * 제네릭 인터페이스의 활용 예시
 *  -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 / 개발자
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

// interface User {
//   name: string;
//   profile: Student | developer;
// }

// function goToSchool(user: User) {
//   if (user.profile.type !== "student") {
//     console.log("잘 못 오셨습니다.");
//     return;
//   }

//   const school = user.profile.school;
//   console.log(`${school}로 등교 완료`);
// }

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "강민주",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "ghdrlfehd",
  profile: {
    type: "student",
    school: "abs",
  },
};
