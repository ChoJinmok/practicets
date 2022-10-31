// myPackage에서 정의 파일을 찾을 수 없다고 에러가 발생(node_modules에 설치했다고 가정)
// import { init, exit } from 'myPackage';

// 정의 파일: 자바스크립트 코드의 모양을 타입스크립트에게 설명해주는 파일
// -> d.ts파일에 작성 (call signature, type의 모음) -> 타입스크립트가 사용할 타입을 찾아낸다.
// => myPackage.d.ts 파일 작성

// init({
//     url: 'true',
//   });

//   exit(1);

// node_modules 파일이 아닌 자바스크립트 파일을 직접 import할 경우(JS와 TS가 공존할 때 사용)
// import { init, exit } from './myPackage';
// tsconfig에서 allowJs를 설정해준다.
// JS의 코드가 많을 때 그대로 두는게 좋을 수 있다. -> JS는 그대로 두면서 TS보호를 받고 싶은 것!
// TS는 JS파일도 보호해준다! -> JS 코드에 '@ts-check'추가해주고 JSDoc사용하면된다.

// init({
//   debug: true,
//   url: 'true',
// });

// exit(1);

// 타입스크립트를 컴파일한 후  실행하는 스크립트 추가해야한다(package script)
// npm i -D ts-node로 더 편리하게 실행 할 수도 있다.(빌드 없이 타입스크립트를 실행할 수 있게 된다.)
// npm i nodemon -> 실시간으로 코드를 반영시켜준다.

// import * as crypto from 'crypto';
// -> 이런식으로 고치지 않고 tsconfig에 esModuleInterop 추가해도 된다.
// import crypto from 'cypto'; -> 정적 타입 파일을 일일이 만드는 것은 많이 비효율적

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

interface CalculateHashPrams {
  prevHash: string,
  height: number,
  data: string
}

class Block implements BlockShape {
  public hash: string;

  constructor(
    public prevHash: string,
    public height: number,
    public data: string,
  ) {
    // static 함수 객체지향 프로그래밍에서 많이 사용됨
    // 클래스 안에서 사용하는 함수로 클래스 인스턴스가 없어도 부를 수 있는 함수
    // 마치 유틸리티 함수처럼 동작
    // Block클래스가 만들어낸 인스턴스가 호출하는 함수가 아닌 Block이 직접 호출할 수 있는 함수
    this.hash = Block.calculateHash({ prevHash, height, data });
  }

  static calculateHash(
    { prevHash, height, data }: CalculateHashPrams,
  ) {
    const toHash = `${prevHash}${height}${data}`;
  }
}
