import { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
  addItem: (item: MenuItems) => void;
};
export const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      onClick={() => addItem(item)}
      className=" w-full flex justify-between border border-teal-400 p-2 rounded-lg hover:bg-teal-200"
    >
      <span>{item.name}</span>
      <span className="font-semibold">${item.price}</span>
    </button>
  );
};
