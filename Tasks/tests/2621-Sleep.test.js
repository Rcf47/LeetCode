import { sleep } from './2621-Sleep';

test('sleep resolves after 100 milliseconds', () => {
  const start = Date.now();
  return sleep(100)
    .then(() => {
      const elapsedTime = Date.now() - start;
      expect(elapsedTime).toBeGreaterThanOrEqual(100);
    });
});

test('sleep resolves after 200 milliseconds', () => {
  const start = Date.now();
  return sleep(200)
    .then(() => {
      const elapsedTime = Date.now() - start;
      expect(elapsedTime).toBeGreaterThanOrEqual(200);
    });
});
