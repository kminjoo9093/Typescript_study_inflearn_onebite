/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
  }
}

// if (user.tag === "ADMIN") {
//   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
// } else if (user.tag === "MEMBER") {
//   console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
// } else {
//   console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
// }

/**
 * 복습 겸 한가지 더 사례
 */

//비동기 작업의 결과를 처리하는 객체
// 처음에 타입을 하나로 정의한 후 조건에 따른 옵셔널 체이닝? 사용하면 원래 타입이 하나기 때문에 그 안의 의도한 세부 데이터?에 접근할 수 없음 -> 타입을 세분화해서 타입 좁히기로 해결
// 선택적 프로퍼티(?)보다 서로소 유니온 타입으로 세분화해주는게 더 안전하고 직관적임

type LoadingTask = {
  state: "LOADING";
}

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
}

type SuccessTask = {
  state: "SUCCESS",
  response: {
    data: string
  }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: "오류 발생 원인은 ~";
//   };
//   response?: {
//     data: "데이터~~";
//   };
// };

function processResult(task: AsyncTask){
  switch(task.state){
    case "LOADING" :
      console.log("로딩 중");
      break;
    case "FAILED" :
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    case "SUCCESS" :
      console.log(`성공 : ${task.response.data}`);
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~~",
  },
};
