import { MenuItem, OrderContents } from "./components";
import { menuItems } from "./db/db";
import { useOrder } from "./hooks/useOrder";

export const App = () => {
  const { order, setOrder, tip, setTip, addItem, isEmpty, deletItem } =
    useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Tip and Consumption Calculator
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div className="">
          <h2 className="text-center text-xl font-bold uppercase mb-4">Menu</h2>
          <div className="space-y-1 px-4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
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
              <OrderContents
                order={order}
                deletItem={deletItem}
                tip={tip}
                setTip={setTip}
                setOrder={setOrder}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
};
