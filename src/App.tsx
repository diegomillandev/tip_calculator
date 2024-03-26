import { useEffect, useMemo, useReducer } from 'react';
import { MenuItem, OrderContents } from './components';
import { initialState, orderReducer } from './reducers/order-reducer';

export const App = () => {
    const [state, dispatch] = useReducer(orderReducer, initialState);
    const isEmpty = useMemo(() => state.items.length === 0, [state.items]);

    useEffect(() => {
        localStorage.setItem('tip', JSON.stringify(state.tip));
        localStorage.setItem('items', JSON.stringify(state.items));
    }, [state.items, state.tip]);

    return (
        <>
            <header className="bg-teal-400 py-5">
                <h1 className="text-center text-4xl font-black">
                    Tip and Consumption Calculator
                </h1>
            </header>

            <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
                <div className="">
                    <h2 className="text-center text-xl font-bold uppercase mb-4">
                        Menu
                    </h2>
                    <div className="space-y-1 px-4">
                        {state.menuItems.map((item) => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                dispatch={dispatch}
                            />
                        ))}
                    </div>
                </div>
                <div className="px-4">
                    <h2 className="text-center text-xl font-bold uppercase mb-4">
                        Account
                    </h2>
                    <div className="border border-dashed border-slate-300 rounded-lg space-y-8 p-4">
                        {isEmpty ? (
                            <p className="text-center">The order is Empty</p>
                        ) : (
                            <OrderContents state={state} dispatch={dispatch} />
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};
