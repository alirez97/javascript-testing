import { describe, expect, it } from 'vitest';
import {
  calculateCartTotal,
  calculateDiscount,
  CartItem,
  isStrongPassword,
} from '../src/main.js';

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

describe('calculateCartTotal', () => {
  it('should return 0 if has no item', () => {
    expect(calculateCartTotal([])).toBe(0);
  });

  it('should applies 10% discount when total is above 500', () => {
    const items: CartItem[] = [{ name: 'mouse', price: 500, quantity: 1 }];

    expect(calculateCartTotal(items)).toBe(450);
  });

  it('should return total without discount under 500', () => {
    const items: CartItem[] = [{ name: 'mouse', price: 499, quantity: 1 }];

    expect(calculateCartTotal(items)).toBe(499);
  });

  it('should calculates multiple items', () => {
    const items: CartItem[] = [
      { name: 'mouse', price: 100, quantity: 1 },
      { name: 'keyboard', price: 100, quantity: 1 },
      { name: 'headphone', price: 100, quantity: 2 },
    ];

    expect(calculateCartTotal(items)).toBe(400);
  });

  it('should throw an error if price is negetive', () => {
    const items = [{ name: 'mouse', price: -1, quantity: 1 }];

    expect(() => calculateCartTotal(items)).toThrow(/negative/i);
  });

  it('should throw an error if quantity is less than one', () => {
    const items = [
      { name: 'mouse', price: 100, quantity: 0 },
      { name: 'keyboard', price: 100, quantity: -1 },
    ];

    expect(() => calculateCartTotal(items)).toThrow(/greater than zero/i);
  });
});
