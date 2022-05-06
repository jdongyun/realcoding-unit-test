beforeAll(() => {
  console.log("모든 테스트를 시작하기 전 한번만 실행된다.");
});

beforeEach(() => {
  console.log("각 테스트를 시작하기 전 실행된다.");
});

afterEach(() => {
  console.log("각 테스트가 완료된 후 실행된다.")
});

afterAll(() => {
  console.log("모든 테스트가 완료된 후 한번만 실행된다.")
});

/*
expect.toBeTruthy
expect.toBeFalsy
expect.not
expect.toBeInstanceOf
*/

describe("음수 양수 판단", () => {
  const isNegative = (num) => num < 0;
    test("isNegative에 7을 넣으면 false를 반환한다.", () => {
      expect(isNegative(7)).toBeFalsy();
    });
    test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
      expect(isNegative(-3)).toBeTruthy();
    });
    test("isNegative에 0을 넣으면 true가 아니다.", () => {
      expect(isNegative(0)).not.toEqual(true);
    });
  });
  describe("Date 클래스 판단하기", () => {
    const getDate = () => new Date();
    
    test("getDate를 하면 Date객체가 나온다.", () => {
        expect(getDate()).toBeInstanceOf(Date);
    });
});

/*
jest.fn
jest.spyOn
expect.toHaveBeenCalled
expect.toHaveBeenCalledWith
*/

describe("가상 함수 테스트해보기", () => {
    test("customCalculation는 전달 된 함수를 호출시킨다.", () => {
      const jestFn = jest.fn(() => 0);
      const customCalculation = f => f();
      customCalculation(jestFn);
      expect(jestFn).toHaveBeenCalled();
    });
    test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
      const jestFn = jest.fn((a, b, c) => a + b + c);
      const customCalculation = (f, a, b, c) => f(a, b, c);
      customCalculation(jestFn, 1, 2, 3);
      expect(jestFn).toBeCalledWith(1, 2, 3);
    });
    test("abs함수는 Math.abs를 호출한다.", () => {
      const jestSpyOn = jest.spyOn(Math, 'abs');
      const abs = (num) => {
        Math.abs(num);
      }
      abs(-1);
      expect(jestSpyOn).toBeCalledTimes(1);
    });
  });