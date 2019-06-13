import { Shippo } from '../src/index';
test('Shippo Service', () => {
  expect(Shippo('Carl')).toBe('Hello Carl');
});
