/**
 * 제네릭 사례 1
 */

//인수의 타입이 다를 경우 제네릭 타입을 따로 선언
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 제네릭 사례 2
 */

// T, ...unknown[]] => 인수로 들어오는 배열의 첫번쨰 요소 타입은 T 인데 나머지는 뭐가 올지 모르겠다
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
//0

let str = returnFirstValue([1, "hello", "hi"]);
//"hello"



/**
 * 제네릭 사례 3
 */
// T의 타입을 제한하기 (조건을 줌으로서)
// number타입의 length 프로퍼티가 있는 타입으로만 확장할 수 있도록
function getLength<T extends { length: number }>(data: T){
  return data.length;
}

let var1 = getLength([1, 2, 3]);  //3

let var2 = getLength("12345");  //5

let var3 = getLength({length: 10}); //10

// let var4 = getLength(10); -> 에러