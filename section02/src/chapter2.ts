//배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "minjoo"];

let boolArr: Array<boolean> = [true, false, true];

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플 
//길이와 타입이 고정된 배열
//인덱스 위치에 따라 넣을 값이 정해져있는 경우 사용하면 유용
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["가가가", 1],
  ["나나나", 2],
  ["다다다", 3],
]