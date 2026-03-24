/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

//value => number : toFixed
//value => string : toUppperCase
//value => Date : getTime
function func(value: number | string | Date | null | Person) {
  value;
  // value.toFixed();
  // value.toUpperCase();

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    //value 타입이 Date 객체냐
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}

//instanceof 의 우측 항에는 타입이 오면 안되고, 클래스가 와야 한다
