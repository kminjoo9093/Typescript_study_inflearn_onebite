//object
//객체 리터럴 타입
//구조적 타입 시스템 -> property based type system
let user: {
  // ? 는 이 프로퍼티가 있어도 되고, 없어도 된다는 뜻
  //선택적 프로퍼티(optional property)
  id?: number;
  name: string;
} = {
  id: 1,
  name: "민주",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

let config: {
  readonly apiKey: string; 
} = {
  apiKey: "key",
};

// config.apiKey = "hahaha";
