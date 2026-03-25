/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

//생성자 매개변수에 public/private/protected 를 붙이면 필드선언과 this.name = name 같은 할당을 생략해도 됨
//단 인터페이스를 implements 할때는 public만 가능함
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    public extra: string,
  ) {}

  move(): void {
    console.log(`${this.moveSpeed}로 이동`);
  }
}
