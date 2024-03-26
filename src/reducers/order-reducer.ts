import { MenuItems, OrderItem, TipOptions } from '../types';
import { menuItems as menuItemsDB } from '../db/db';

export type ActionOrder =
    | { type: 'add-item'; payload: { newItem: MenuItems } }
    | { type: 'remove-item'; payload: { id: OrderItem['id'] } }
    | { type: 'add-to-tip'; payload: { tip: TipOptions['value'] } }
    | { type: 'save-order' };

export type OrderState = {
    items: OrderItem[];
    menuItems: MenuItems[];
    tip: TipOptions['value'];
};

const localStorageItems = (): OrderItem[] => {
    const itemsLS = localStorage.getItem('items');
    return itemsLS ? JSON.parse(itemsLS) : [];
};

const localStorageTip = (): number => {
    const tipLS = localStorage.getItem('tip');
    return tipLS ? JSON.parse(tipLS) : 0;
};

export const initialState: OrderState = {
    items: localStorageItems(),
    menuItems: menuItemsDB,
    tip: localStorageTip(),
};

export const orderReducer = (
    state: OrderState = initialState,
    action: ActionOrder
) => {
    if (action.type === 'add-item') {
        const findItem: number = state.items.findIndex(
            (item) => item.id === action.payload.newItem.id
        );

        if (findItem === -1) {
            return {
                ...state,
                items: [
                    ...state.items,
                    { ...action.payload.newItem, quantity: 1 },
                ],
            };
        }

        const updateItem: OrderItem[] = state.items.map((item) => {
            if (item.id === action.payload.newItem.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        return {
            ...state,
            items: updateItem,
        };
    }

    if (action.type === 'remove-item') {
        const removeItem = state.items.filter(
            (item) => item.id !== action.payload.id
        );
        return {
            ...state,
            items: removeItem,
            tip: removeItem.length === 0 ? 0 : state.tip,
        };
    }

    if (action.type === 'add-to-tip') {
        return {
            ...state,
            tip: action.payload.tip,
        };
    }

    if (action.type === 'save-order') {
        return {
            ...state,
            items: [],
            tip: 0,
        };
    }
    return state;
};
