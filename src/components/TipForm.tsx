import { tipOptions } from "../const";
type tipFormprops = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
};
export const TipForm = ({ setTip }: tipFormprops) => {
  return (
    <div className="space-y-1">
      <h3 className="font-bold text-xl">Tip:</h3>

      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="gap-x-1 flex ps-2">
            <input
              type="radio"
              id={tip.id}
              name="tip"
              value={tip.value}
              onChange={() => setTip(tip.value)}
            />
            <label htmlFor={tip.id} className="text-sm">
              {tip.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};
