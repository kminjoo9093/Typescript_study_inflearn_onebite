/**
 * infer
 * 조건부 타입 내에서 특정 타입만 추론해냄
 */

type FuncA = () => string;
type FuncB = () => number;

// 조건식이 참이 되도록 R을 추론함
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // () => string 가 () => infer R 의 서브타입이 되는게 참이려면 R은 string 타입
type B = ReturnType<FuncB>; // () => number 가 () => infer R 의 서브타입이 되는게 참이려면 R은 number 타입

type C = ReturnType<number>; // => never 타입이 됨



/**
 * 예제
 * Promise의 결과값 타입만 빼오기
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
//number

type PromiseB = PromiseUnpack<Promise<string>>;
//string
