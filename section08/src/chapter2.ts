/**
 * keyof 연산자
 * 객체 타입에 적용
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person){
  return person[key];
}

const person: Person = {
  name: "강민주",
  age: 28,
}

getPropertyKey(person, "name"); //강민주



//타입스크립트에서 typeof 연산자를 타입을 정의할 때 사용하면 변수의 타입을 추론해서 타입에 저장(정의)하는 기능을 함
type Person2 = typeof person2;

const person2 = {
  name: "강민주",
  age: 28,
}