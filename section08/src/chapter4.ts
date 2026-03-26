/**
 * 템플릿 리터럴 타입
 * 스트링 리터럴을 기반으로 특정 패턴을 만드는 
 */

type Color = "red" | "black" | "white";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;