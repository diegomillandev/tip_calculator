import { Dispatch } from 'react';
import { formatCurrency } from '../helpers';
import { ActionOrder, OrderState } from '../reducers/order-reducer';
import { OrderTotal, TipForm } from '.';

type OrderContentsProps = {
    state: OrderState;
    dispatch: Dispatch<ActionOrder>;
};

export const OrderContents = ({ state, dispatch }: OrderContentsProps) => {
    return (
        <>
            <div className="space-y-3">
                <h3 className="font-bold text-xl">Items:</h3>
                {state.items.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center p-2 border-b border-gray-200"
                    >
                        <div>
                            <p className="text-gray-800">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="text-gray-700 text-sm -mt-1 font-bold">
                                Quantity:{' '}
                                <span className="font-normal">
                                    {item.quantity} -{' '}
                                    {formatCurrency(item.quantity * item.price)}
                                </span>
                            </p>
                        </div>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: 'remove-item',
                                    payload: { id: item.id },
                                })
                            }
                            className="bg-red-200 hover:bg-red-600 p-1.5 rounded-full transition-colors duration-150"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                className="text-white"
                            >
                                <path
                                    fill="currentColor"
                                    d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                ))}
                <TipForm dispatch={dispatch} tipSelected={state.tip} />
                <OrderTotal state={state} />
                <button
                    onClick={() => dispatch({ type: 'save-order' })}
                    className="bg-gray-600 text-white p-3 w-full rounded hover:bg-gray-800"
                >
                    Save Order
                </button>
            </div>
        </>
    );
};
