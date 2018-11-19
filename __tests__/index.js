/* global expect:false, jest:false, test:false */
import promisleep from "../src";

jest.useFakeTimers();

test("it returns a promise", () => {
  expect(promisleep(100)).toBeInstanceOf(Promise);
});

test("it calls setTimeout", () => {
  promisleep(300);

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
});
