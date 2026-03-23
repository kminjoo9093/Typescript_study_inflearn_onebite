//any
//특정 변수의 타입을 확실히 모를때 사용
let anyVar: any = 10;
anyVar = 'hello';
anyVar = true;

let num:number = 10;
num = anyVar;

//unknown
//다양한 타입의 값을 저장할 수는 있지만
//변수에 집어넣을 수 없고, 메서드도 다양하게 쓸 수 없다 (any와의 차이점)
// -> 타입을 확실히 밝혔을 때만 가능함
let unknownVar:unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;
// unknownVar.toUppercase();

if(typeof unknownVar === "number"){ //타입을 확실히 하면 가능
  num = unknownVar;
}