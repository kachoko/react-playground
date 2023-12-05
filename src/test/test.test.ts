import { testFunc } from "../logics/test";

test("テストのサンプル", () => {
    expect(testFunc(1, 1)).toBe(2);
});
