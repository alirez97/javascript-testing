import { describe, expect, it } from 'vitest';
import { calculateDiscount, isStrongPassword } from '../src/main.js';

describe('calculateDiscount', () => {
  it('should return discounted price if given valid code', () => {
    expect(calculateDiscount(10, 'SAVE10')).toBe(9);
    expect(calculateDiscount(10, 'SAVE20')).toBe(8);
  });

  it('should handle negetive price', () => {
    expect(calculateDiscount(-1, 'SAVE10')).toMatch(/invalid/i);
  });

  it('should handle invalid discount code', () => {
    expect(calculateDiscount(10, 'INVALID')).toBe(10);
  });
});

describe('isStrongPassword', () => {
  it('should return true for a valid password', () => {
    expect(isStrongPassword('Abcd123!')).toBe(true);
    expect(isStrongPassword('MyPass2026@')).toBe(true);
  });

  it('should return false if password is shorter than 8 characters', () => {
    expect(isStrongPassword('Abc123!')).toBe(false);
  });

  it('should return false if password has no upper letter', () => {
    expect(isStrongPassword('abcd123!')).toBe(false);
  });

  it('should return false if password has no lower letter', () => {
    expect(isStrongPassword('ABCD123!')).toBe(false);
  });

  it('should return false if password has no number', () => {
    expect(isStrongPassword('Abcdefg!')).toBe(false);
  });

  it('should return false if password has no special character', () => {
    expect(isStrongPassword('Abcd1234')).toBe(false);
  });
});
