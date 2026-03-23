//타입 별칭과 인덱스 시그니처

//타입 별칭 : 타입을 변수처럼 정의
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "minjoo",
  nickname: "mandoo",
  birth: "1999.12.06",
  bio: "hihi",
  location: "somewhere",
}

let user2: User = {
  id: 2,
  name: "민주",
  nickname: "만두",
  birth: "1999.12.06",
  bio: "안녕안녕",
  location: "어딘가",
}

// 인덱스 시그니처
type countryCodes = {
  [key: string]: string;
}

let countryCodes:countryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}

type countryNumberCodes = {
  [key: string]: number;
  Korea: number; //korea를 반드시 가지도록
}

let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
  // UnitedState: 840,
  // UnitedKingdom: 826,
}