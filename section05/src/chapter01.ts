/**
 * 인터페이스
 * 타입에 이름을 지어주는 것
 * 객체 구조를 정의하는데 특화됨
 * 상속, 합침 등의 특수 기능을 제공함
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void;
  
  // 오버로딩 메소드 구현하고 싶으면 호출 시그니처 사용해야 함
  // sayHi(): void;
  // sayHi(a:number, b:number):number;
}

const person: Person = {
  name: "강민주",
  // age: 28,
  sayHi: function () {
    console.log("hi");
  },
};

// person.name = "";

// person.sayHi();
// person.sayHi(1, 2);



/**
 * 인터페이스의 확장
 */

interface Animal{
  name: string;
  age: number;
}

// 타입 별칭일때도 확장가능!!
// type Animal = {
//   name: string;
//   age: number;
// }

interface Dog extends Animal{
  // name: "hello"; // 원본 타입의 서브타입일 경우에만 타입 재정의 가능
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  age: 1,
  isBark: true,
}

interface Cat extends Animal{
  isScratch: boolean;
}

interface chicken extends Animal{
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {

}

const dogCat: DogCat = {
  name: "",
  age: 2,
  isBark: false,
  isScratch: true,
}



/**
 * 인터페이스 선언 합치기
 * 동일한 이름으로 따로 선언하면 합쳐짐
 */

interface Book {
  title: string;
}

interface Book {
  price: number;
}

const book: Book = {
  title: "abc",
  price: 12000,
}


/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib{
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
}