/**
 * 접근제어자 access modifier
 * => public private protected
 */

class Employee {
  // private name: string;
  // protected age: number;
  // public position: string;

  constructor(private name: string, protected age: number, public position: string) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  work() {
    console.log(`${this.name} 열일중`);
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber : number;

  constructor(name:string, age:number, position:string, officeNumber:number){
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func(){
    this.age;
  }
}

const employee = new Employee("누구", 33, "개발자");
employee.name = "홍길동";
employee.age = 30;
employee.position = "디자이너";
