import promisleep from '../src';

test('it should return a promise', async () => {
  expect.assertions(1);

  await expect(promisleep(100)).resolves.toBeUndefined();
});

test('it should call setTimeout', () => {
  jest.useFakeTimers();

  promisleep(100);

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);
});
