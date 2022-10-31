// @ts-check

// JSDoc: 코멘트로 이루어진 문법, 함수 위에 코멘트를 적어주면된다.

/**
* Initializes the project
* @param {object} config
* @param {boolean} config.debug
* @param {string} config.url
* @returns boolean
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
