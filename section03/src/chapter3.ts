/* 
  객체 타입간의 호환성
  -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
*/

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

//animal타입은 dog타입의 슈퍼타입
// dog = animal;

type Book = {
  title: string;
  price: number;
};

type ProgrammingBook = {
  title: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  title: "한 입 리액트",
  price: 33000,
  skill: "Reactjs",
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 * 서브타입에 직접 프로퍼티를 추가적으로 적어주면 안되고,
 * 변수에 선언하는 방식으로 우회해야 가능하다
 */
let book2: Book = {
  title: "한 입 리액트",
  price: 33000,
  // skill: "Reactjs",
};

let book3: Book = programmingBook;

function func(book: Book) {}

func({
  title: "한 입 리액트",
  price: 33000,
  // skill: "Reactjs",
});
func(programmingBook);
