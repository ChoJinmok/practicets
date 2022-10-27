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
import { init, exit } from './myPackage';
// tsconfig에서 allowJs를 설정해준다.
// JS의 코드가 많을 때 그대로 두는게 좋을 수 있다. -> JS는 그대로 두면서 TS보호를 받고 싶은 것!
// TS는 JS파일도 보호해준다! -> JS 코드에 '@ts-check'추가해주고 JSDoc사용하면된다.

init({
  debug: true,
  url: 'true',
});

exit(1);
