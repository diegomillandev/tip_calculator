import { useMemo } from "react";
import { OrderItem } from "../types";

export const useOrderTotal = (_order: OrderItem[]) => {
  const subTotalAcount = useMemo(() => {
    const total: number = _order.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total;
  }, [_order]);

  const calculateTip = (_tip: number): number => {
    const tip = subTotalAcount * _tip;
    return tip;
  };

  const totalAccount = (_tip: number): number => {
    return subTotalAcount + calculateTip(_tip);
  };

  return {
    subTotalAcount,
    calculateTip,
    totalAccount,
  };
};
