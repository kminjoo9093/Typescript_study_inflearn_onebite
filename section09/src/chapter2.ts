/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let c : StringNumberSwitch<number | string>;

let d : StringNumberSwitch<boolean | number | string>;
//1.
//StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>
//2. number | string | number => number | string



/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<boolean | number | string, string>;

//1단계
//Exclude<boolean, string> |
//Exclude<number, string> |
//Exclude<string, string>

//2단계
// boolean |
// number |
// never
// => never는 공집합이기때문에 유니온에 사용될경우 없어지는거나 마찬가지다

//결과
// boolean | number

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;


// 분산을 막고 싶으면 대괄호 사용
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;