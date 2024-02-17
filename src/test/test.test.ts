import { testFunc } from "../logics/test";

test("テストのサンプル: 1+1は2になる", () => {
    expect(testFunc(1, 1)).toBe(2);
});
