import { Dispatch } from 'react';
import { MenuItems } from '../types';
import { ActionOrder } from '../reducers/order-reducer';

type MenuItemProps = {
    item: MenuItems;
    dispatch: Dispatch<ActionOrder>;
};
export const MenuItem = ({ item, dispatch }: MenuItemProps) => {
    return (
        <button
            onClick={() =>
                dispatch({ type: 'add-item', payload: { newItem: item } })
            }
            className=" w-full flex justify-between border border-teal-400 p-2 rounded-lg hover:bg-teal-200"
        >
            <span>{item.name}</span>
            <span className="font-semibold">${item.price}</span>
        </button>
    );
};
