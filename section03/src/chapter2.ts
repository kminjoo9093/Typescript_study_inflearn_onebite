// Unknown 타입
function unknownExam(){
  //up casting
  let a: unknown = 1;
  let b: unknown = "1";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar : unknown;
  //down casting -> 불가
  // let num:number = unknownVar;
  // let str:String = unknownVar;
  // let bool:boolean = unknownVar;
}

/* 
  Never 타입
*/

function neverExam(){
  function neverFunc(): never{
    while(true){}
  }

  //up casting
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //down casting
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/* 
  Void 타입
*/
function voidExam(){
  function voidFunc(): void {
    console.log("hi");
    // return undefined; -> 가능
  }

  let voidVar: void = undefined;
}

/* 
  Any 타입
  모든 타입의 슈퍼타입(부모)이자 서브타입(자식)
  */
function anyExam(){
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;
  
  anyVar = unknownVar; //down casting 가능
  undefinedVar = anyVar; //up casting 가능

  //neverVar = anyVar; // 공집합을 의미하는 never타입에는 any를 포함한 어떠한 타입도 다운캐스팅 불가능
}