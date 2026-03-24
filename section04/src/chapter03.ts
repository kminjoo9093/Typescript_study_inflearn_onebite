/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지 판단
 * 1. 반환값 타입 호환?
 * 2. 매개변수 타입 호환?
 */

// 1. 반환값 호환?
type A = ()=>number;
type B = ()=>10;

let a:A = ()=>10;
let b:B = ()=>10;

a = b;
// b = a;


// 2. 매개변수 호환?
// 2-1. 매개변수 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c:C = (value) => {};
let d:D = (value) => {};
// c = d;
d = c;

// 특이하게 매개변수 타입은 다운캐스팅이 가능, 업캐스팅이 불가능


// 2-2. 매개변수 개수가 다를 때
type Func1 = (a:number, b:number) => void;
type Func2 = (a:number)=> void;

let func1:Func1 = (a, b) => {};
let func2:Func2 = (a) => {};

func1 = func2;
// func2 = func1;