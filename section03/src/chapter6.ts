/**
 * 타입 단언 assertion
 */

type Person = {
  name: string;
  age: number;
};

// let person : Person = {};

let person = {} as Person; // -> 타입을 Person으로 간주
person.name = "minjoo";
person.age = 28;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * -> A가 B의 슈퍼타입이거나 서브타입이어야 함
 */

let num1 = 10 as never; //number는 never의 슈퍼타입
let num2 = 10 as unknown; //number는 unknown의 서브타입

// let num3 = 10 as string; // number와 string은 겹치는 부분이 없는 타입임
let num4 = 10 as unknown as string; //다중 단언 -> 좋은 방법은 아님

/**
 * const 단언
 */

let num5 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
//-> 모든 프로퍼티가 readonly가 됨

// cat.name = ''; 초기화 불가

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 1",
  author: "이정환"
}

const len : number = post.author!.length;
