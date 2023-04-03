# CodeceptJS 사용

```bash
npx create-codeceptjs .
```

실행 후 `package.json` 파일의 탭이 공백 2개에서 4개로 바뀌므로
다시 되돌려줘야 함. (아래 코드를 터미널에 실행)

```bash
node -e "
  const fs = require('fs');
  const filename = 'package.json';
  const source = fs.readFileSync(filename).toString();
  const data = JSON.parse(source);
  const json = JSON.stringify(data, null, '  ');
  fs.writeFileSync(filename, json);
"
```

데모 감상:

```bash
# CLI로 확인
npm run codeceptjs:demo

# GUI로 확인
npm run codeceptjs:demo:ui
```

데모를 다 봤으니 데모에 쓰인 패키지 삭제.

```bash
npm uninstall @codeceptjs/examples
```

`pacakge.json` 파일의 `scripts` 항목에서
`codeceptjs:demo` 관련 내용 모두 삭제.

```json
  "scripts": {
    // 아래 3줄 삭제
    "codeceptjs:demo": "codeceptjs run --steps -c node_modules/@codeceptjs/examples",
    "codeceptjs:demo:headless": "HEADLESS=true codeceptjs run --steps -c node_modules/@codeceptjs/examples",
    "codeceptjs:demo:ui": "codecept-ui --app  -c node_modules/@codeceptjs/examples"
    // ----
  },
```

CodeceptJS 초기화:

```bash
npx codeceptjs init
```

```txt
? Do you plan to write tests in TypeScript? (y/N)
y

? Where are your tests located? (./*_test.js)
./tests/**/*_test.ts

? What helpers do you want to use? (Use arrow keys)
❯ Playwright

? Where should logs, screenshots, and reports to be stored? (./output)
./output

? Would you prefer to use promise-based typings for all I.* commands? http://bit.ly/3XIMq6n (y/N)
N

? Do you want localization for tests? (See https://codecept.io/translation/) (Us
e arrow keys)
❯ English (no localization)

? [Playwright] Base url of site to be tested (http://localhost)
http://localhost:8080

? [Playwright] Show browser window (Y/n)
Y

? [Playwright] Browser in which testing will be performed. Possible options: chr
omium, firefox, webkit or electron (chromium)
chromium
```

CodeceptJS의 문제로 에러가 발생하지만
공명의 함정이니 당황하지 말 것.

```txt
TSError: ⨯ Unable to compile TypeScript:
codecept.conf.ts:9:22 - error TS2503: Cannot find namespace 'CodeceptJS'.
```

`codecept.conf.ts`에서 문제가 되는 부분 수정:

```typescript
// CodeceptJS.MainConfig 타입 지정을 제거!
export const config = {
```

`steps.d.ts` 파일 생성:

```bash
npx codeceptjs def
```

테스트 폴더 생성:

```bash
mkdir tests
```

`steps.d.ts`, `steps_file.ts` 파일 옮기기:

```bash
mv steps.d.ts tests/
mv steps_file.ts tests/
```

`codecept.conf.js` 파일에서 `include` 부분 수정:

```javascript
  include: {
    I: './tests/steps_file.js',
  },
```

CodeceptJS가 내부적으로 `ts-node`를 쓰기 때문에
`tsconfig.json` 파일에 다음 설정을 추가:

```json
  "ts-node": {
    "files": true
  }
```

`.gitignore` 파일에 실패 기록 위치 추가:

```txt
/output/
```

[`eslint-plugin-codeceptjs`](https://github.com/poenneby/eslint-plugin-codeceptjs)
설치:

```bash
npm install --save-dev eslint-plugin-codeceptjs
```

`tests/.eslintrc.js` 파일 작성:

```bash
touch tests/.eslintrc.js
```

```javascript
module.exports = {
  extends: ['plugin:codeceptjs/recommended'],
};
```

테스트 코드 생성:

```bash
npx codeceptjs generate:test
```

```txt
? Feature which is being tested (ex: account, login, etc)
welcome

? Filename of a test (welcome_test.ts)
welcome_test.ts
```

`tests/welcome_test.ts` 파일에 테스트 추가:

```javascript
Feature('Welcome');

Scenario('Visit the home page', ({ I }) => {
  I.amOnPage('/');

  I.see('Hello, world!');
});

Scenario('Add a new post', ({ I }) => {
  I.amOnPage('/');

  I.dontSee('What time is it?');

  I.click('Add post!');

  I.waitForText('What time is it?');
});
```

E2E 테스트 실행:

```bash
npm run codeceptjs
```
