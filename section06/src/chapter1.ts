/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("열일중");
  },
};

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("열일중");
  }
}

const employeeB = new Employee("강민주", 28, "개발자");
console.log(employeeB);


class ExecutiveOfficer extends Employee {
  officeNumber : number;

  constructor(name:string, age:number, position:string, officeNumber:number){
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

//클래스는 타입으로도 활용 가능
const employeeC: Employee = {
  name: "",
  age: 1,
  position: "",
  work() {},
};
