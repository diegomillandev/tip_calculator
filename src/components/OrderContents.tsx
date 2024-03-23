import { OrderTotal, TipForm } from ".";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  deletItem: (id: number) => void;
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

export const OrderContents = ({
  order,
  deletItem,
  tip,
  setTip,
  setOrder,
}: OrderContentsProps) => {
  return (
    <>
      <div className="space-y-3">
        <h3 className="font-bold text-xl">Items:</h3>
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-2 border-b border-gray-200"
          >
            <div>
              <p className="text-gray-800">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="text-gray-700 text-sm -mt-1 font-bold">
                Quantity:{" "}
                <span className="font-normal">
                  {item.quantity} - {formatCurrency(item.quantity * item.price)}
                </span>
              </p>
            </div>

            <button
              onClick={() => deletItem(item.id)}
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
        <TipForm setTip={setTip} />
        <OrderTotal order={order} tip={tip} />
        <button
          onClick={() => setOrder([])}
          className="bg-gray-600 text-white p-3 w-full rounded hover:bg-gray-800"
        >
          Save Order
        </button>
      </div>
    </>
  );
};
