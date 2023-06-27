import { RootState } from "@/redux/store";

export const selectCartModule = (state: RootState) => state.cart;

export const selectProductAmount = (state: RootState, id: string) => {
  return selectCartModule(state)[id] || 0;
}

export const selectTotalAmount = (state: RootState) => {
  const cart = selectCartModule(state);
  const total = Object.values(cart).reduce((acc, count) => acc += count, 0);
  
  return total;
}