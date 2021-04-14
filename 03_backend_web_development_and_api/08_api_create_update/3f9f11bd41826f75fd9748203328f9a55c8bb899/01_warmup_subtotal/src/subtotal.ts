type CartLine = {
  product: string;
  price: number;
  quantity: number;
};

type CartLineWithSubtotal = {
  product: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export function calculateSubtotal(cart: CartLine[]): CartLineWithSubtotal[] {
  const result = cart.map((value) => {
    return {
      product: value.product,
      price: value.price,
      quantity: value.quantity,
      subtotal: value.price * value.quantity,
    };
  });
  return result;
}
