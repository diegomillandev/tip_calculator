import { formatCurrency } from "../helpers";
import { useOrderTotal } from "../hooks/useOrderTotal";
import { OrderItem } from "../types";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
};
export const OrderTotal = ({ order, tip }: OrderTotalProps) => {
  const { subTotalAcount, calculateTip, totalAccount } = useOrderTotal(order);
  return (
    <div className="space-y-1">
      <h3 className="font-bold text-xl">Total:</h3>
      <p className="font-bold text-sm pl-2 text-gray-700">
        Subtotal:{" "}
        <span className="font-normal">{formatCurrency(subTotalAcount())}</span>
      </p>
      <p className="font-bold text-sm pl-2 text-gray-700">
        Tip:{" "}
        <span className="font-normal">{formatCurrency(calculateTip(tip))}</span>
      </p>
      <p className="font-bold text-sm pl-2 text-gray-700">
        Total:{" "}
        <span className="font-normal">{formatCurrency(totalAccount(tip))}</span>
      </p>
    </div>
  );
};
