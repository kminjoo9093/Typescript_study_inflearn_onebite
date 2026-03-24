/**
 * 타입 추론
 * 기준 : 변수의 초기값
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "minjoo",
  profile: {
    nickname: "haha",
  },
};

let { id, name, profile } = c;

let [one, two, three] = [1, "a", true];

//함수 - 반환값 기준으로 타입 추론
//매개변수 기본 값이 설정돼있다면 그걸 기준으로 매개값 타입 추론
function func(message: "hello") {
  return "hello";
}

//--------------------

let d; //암묵적 any 타입
d = 10; // 진화 : any -> number
d.toFixed();
// d.toUpperCase();

d = "hi"; // 진화 : number -> string
// d.toFixed();
d.toUpperCase();

//const로 선언하면 리터럴 타입으로 추론 (재할당 불가)
const num = 10;
const str = "hello";

//배열 타입 추론
let arr = [1, "string"];  //유니온 타입으로 추론됨


