//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  //숫자 자동 할당됨
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean= "ko",
  english = "en",
}

const user1 = {
  name: "김누구",
  role: Role.ADMIN, //관리자
  language: Language.korean,
};

const user2 = {
  name: "정누구",
  role: Role.USER, //일반 유저
  language: Language.english,
};

const user3 = {
  name: "박누구",
  role: Role.GUEST, //게스트
};

console.log(user1, user2, user3);
