/**
 * 맵드 타입 기반의 유틸리티 타입들
 */

/**
 *  Pick<T, K>
 *  -> 뽑다, 고르다
 *  -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K] : T[key];
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
}



/**
 *  Omit<T, K>
 *  -> 생략하다, 빼다
 *  -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


const noTitlePost: Omit<Post, 'title'> = {
  tags: [],
  content: "",
  thumbnailURL: "",
}


/**
 * Record<K, V>
 * -> 동일한 패턴을 갖는 객체 타입을 쉽게 정의할 수 있다  
 * -> 실무에서 자주 쓰임
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  },
  medium: {
    url: string;
  },
  small: {
    url: string;
  },
  watch: {
    url: string;
  }
}

type Record<K extends keyof any, V> = { //any 라는 뭔지 모를 어떤 객체의 키값 유니온이 올거다
  [key in K]: V
}

type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', {url: string, size: number}>