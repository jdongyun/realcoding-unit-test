import Calculator from "../js/calculator/Calculator";

describe("사칙연산 뺄셈 테스트.", () => {
  test("5에서 3을 빼면 2이다.", () => {
    const c = new Calculator();
    expect(c.minus(5, 3)).toEqual(2);
  });
});