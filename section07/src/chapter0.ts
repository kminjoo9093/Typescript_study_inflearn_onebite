/**
 * 제네릭 함수
 * 여러 타입을 인수로 받아서 범용적으로 쓸 수 있는 함수
 * 타입변수에 할당되는 타입은 함수를 호출할 때 인수에 따라 결정(추론)된다
 */

function func<T>(value: T) : T {
  return value;
}

let num = func(10);

let str = func("a");

let bool = func(false);

let arr = func([1, 2, 3]);

let tuple = func<[number, number]>([1, 2]);