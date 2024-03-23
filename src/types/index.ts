export type MenuItems = {
  id: number;
  name: string;
  price: number;
};
export type OrderItem = MenuItems & {
  quantity: number;
};
export type TipOptions = {
  id: string;
  value: number;
  label: string;
};
