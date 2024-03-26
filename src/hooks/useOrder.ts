import { useEffect, useMemo, useState } from 'react';
import { MenuItems, OrderItem } from '../types';

export const useOrder = (items: OrderItem) => {
    console.log(items);
    const initialOrder = () => {
        const localStorageOrder = localStorage.getItem('order');
        return localStorageOrder ? JSON.parse(localStorageOrder) : [];
    };
    const [order, setOrder] = useState<OrderItem[]>(initialOrder());
    const [tip, setTip] = useState(0);

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order));
    }, [order]);

    const addItem = (_item: MenuItems) => {
        const findItemIndex: number = order.findIndex(
            (item) => item.id === _item.id
        );
        if (findItemIndex < 0) {
            const newItem: OrderItem = { ..._item, quantity: 1 };
            setOrder([...order, newItem]);
            return;
        }
        const newOrder = order.map((item) => {
            if (item.id === _item.id) {
                item.quantity += 1;
            }
            return item;
        });
        setOrder(newOrder);
    };

    const deletItem = (_id: OrderItem['id']) => {
        const newOrder: OrderItem[] = order.filter((item) => item.id !== _id);
        setOrder(newOrder);
    };

    const isEmpty: boolean = useMemo(() => order.length === 0, [order]);
    return { order, setOrder, tip, setTip, addItem, deletItem, isEmpty };
};
