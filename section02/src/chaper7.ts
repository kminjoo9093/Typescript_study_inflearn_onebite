//void
//void -> 공허 -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

//return값 없을 때 void 사용
function func2(): void { 
  console.log("hello"); 
}

//void로 정의한 변수는 어떤 값도 담을수가 없음 (undefined만 가능)
// tsconfig에서 strictNullChecks false로 설정하면 null 할당 가능
let a: void;
// a = 1;
// a = true;
// a = null;
a = undefined;



// never : 불가능한 타입
// never타입에는 그 어떤 값도 저장할 수 없음
function func3(): never {
  while (true){} //무한루프로 리턴값이 절대 나올 수 없는 경우
}

function func4(): never {
  throw new Error(); //함수 실행 후 바로 중지될 것이기 때문에 never
}