import { formatCurrency } from '../helpers';
import { OrderState } from '../reducers/order-reducer';

type OrderTotalProps = {
    state: OrderState;
};
export const OrderTotal = ({ state }: OrderTotalProps) => {
    const subTotalAcount = state.items.reduce(
        (subTotal, item) => subTotal + item.price * item.quantity,
        0
    );
    const tip = subTotalAcount * state.tip;
    const totalAccount = subTotalAcount + tip;
    return (
        <div className="space-y-1">
            <h3 className="font-bold text-xl">Total:</h3>
            <p className="font-bold text-sm pl-2 text-gray-700">
                Subtotal:{' '}
                <span className="font-normal">
                    {formatCurrency(subTotalAcount)}
                </span>
            </p>
            <p className="font-bold text-sm pl-2 text-gray-700">
                Tip: <span className="font-normal">{formatCurrency(tip)}</span>
            </p>
            <p className="font-bold text-sm pl-2 text-gray-700">
                Total:{' '}
                <span className="font-normal">
                    {formatCurrency(totalAccount)}
                </span>
            </p>
        </div>
    );
};
