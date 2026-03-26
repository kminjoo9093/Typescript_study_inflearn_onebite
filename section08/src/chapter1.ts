/**
 * 인덱스드 엑세스 타입
 * 객체로부터 특정 프로퍼티를 뽑아서 변수로 정의할수 있도록 도와줌
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

//주의 : 아래에서 ["author"] 대괄호 안에 오는 걸 인덱스라 하는데 이 인덱스로는 타입만 가능하다
//      => 변수를 넣으면 안되고, 스트링 리터럴 타입 같은 타입을 적어야 함
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 중첩 가능
function printAuthorId(id: Post["author"]["id"]) {
  console.log(id);
}

const post: Post = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "강누구",
    age: 20,
  },
};

//=================

//배열과 함께 사용
//number / 숫자 리터럴 타입을 인덱스로 적어서 요소타입을 뽑아옴

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];


const post2: PostList[number] = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "강누구",
    age: 20,
  },
};

function printAuthorInfoWithArr(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}


//=================
// 튜플과 사묭

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number]; // 최적의 공통타입 (유니온 타입)으로 추출