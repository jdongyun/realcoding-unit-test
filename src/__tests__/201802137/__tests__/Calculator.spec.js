import Calculator from "../../../js/calculator/Calculator";

beforeAll(() => {
  console.log("모든 테스트를 시작하기 전 한 번만 실행된다.");
});

beforeEach(() => {
  console.log("각 테스트를 시작하기 전 실행된다.");
});

afterAll(() => {
  console.log("모든 테스트를 끝낸 후 한 번만 실행된다.");
});

afterEach(() => {
  console.log("각 테스트를 끝낸 후 실행된다.");
});

const calculator = new Calculator();

describe("음수 양수 판단", () => {
  test("isNegative에 7을 넣으면 false를 반환한다.", () => {
    expect(calculator.isNegative(7)).toBeFalsy();
  });
  test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
    expect(calculator.isNegative(-3)).toBeTruthy();
  });
  test("isNegative에 0을 넣으면 true가 아니다.", () => {
    expect(calculator.isNegative(0)).not.toEqual(true);
  });
});

describe("Date 클래스 판단하기", () => {
  test("getDate를 하면 Date 객체가 나온다.", () => {
    expect(calculator.getDate()).toBeInstanceOf(Date);
  });
});

describe("가상 함수 테스트 해보기", () => {
  test("customCalculation은 전달된 함수를 호출시킨다.", () => {
    const func = jest.fn(() => 0);
    calculator.customCalculation(func);
    expect(func).toBeCalled();
  });
  test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달된 함수가 1, 2, 3인자를 받아 호출한다.", () => {
    const func = jest.fn((x, y, z) => x + y + z);
    calculator.customCalculation(func, 1, 2, 3);
    expect(func).toBeCalledWith(1, 2, 3);
  });
  test("abs함수는 Math.abs를 호출한다.", () => {
    const spy = jest.spyOn(Math, 'abs');
    calculator.abs(0);
    expect(spy).toBeCalledTimes(1);
  });
});