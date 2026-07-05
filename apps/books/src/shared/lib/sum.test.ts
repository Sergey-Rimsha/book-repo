import { describe, expect, it, test } from 'vitest';

import { sum } from './sum.js';

test('adds 1 + 2 to equal 3', () => {
  // eslint-disable-next-line no-magic-numbers
  expect(sum(1, 2)).toBe(3);
});

describe('test sum', () => {
  it('adds 1 to equal 3', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 2 to equal 3', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(sum(2, 3)).toBe(5);
  });
});
