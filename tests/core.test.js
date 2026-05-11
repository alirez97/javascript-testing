import { describe, expect, it } from "vitest";
import { getCoupons } from "../src/core";

describe("getCoupons", () => {
  it("should return an array of coupons", () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBe(true);
    expect(coupons.length).toBeGreaterThan(0);
  });

  it("should return an array with valid coupon codes", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(typeof coupon.code).toBe("string");
      expect(coupon.code).toBeTruthy();
    });
  });

  it("should return an array with valid coupon discounts", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(typeof coupon.discount).toBe("number");
      expect(coupon.discount).toBeGreaterThanOrEqual(0);
      expect(coupon.discount).toBeLessThanOrEqual(1);
    });
  });

  // coupons.map((coupon) => {
  //   it("should have code property", () => {
  //     expect(coupon).toHaveProperty("code");
  //   });
  //   it("should have discount property", () => {
  //     expect(coupon).toHaveProperty("discount");
  //   });
  //   it("code should be string", () => {
  //     expect(typeof coupon.code).toBe("string");
  //   });
  //   it("discount should be number", () => {
  //     expect(typeof coupon.discount).toBe("number");
  //   });
  //   it("discount should be between 0 and 1", () => {
  //     expect(coupon.discount).toBeGreaterThanOrEqual(0);
  //     expect(coupon.discount).toBeLessThanOrEqual(1);
  //   });
  // });
});
