export function calculateDiscount(price: number, discountCode: string) {
  if (price <= 0) {
    return 'Invalid price';
  }

  let discount = 0;
  if (discountCode === 'SAVE10') {
    discount = 0.1;
  } else if (discountCode === 'SAVE20') {
    discount = 0.2;
  }

  return price - price * discount;
}

export function isStrongPassword(password: string): boolean {
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  return (
    hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
  );
}

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateCartTotal(items: CartItem[]): number {
  if (items.length === 0) {
    return 0;
  }

  const total = items.reduce((sum, item) => {
    if (item.price < 0) {
      throw new Error('Price cannot be negative');
    }

    if (item.quantity <= 0) {
      throw new Error('Quantity must be greater than zero');
    }

    return sum + item.price * item.quantity;
  }, 0);

  return total >= 500 ? total * 0.9 : total;
}
