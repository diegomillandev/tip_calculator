import { Dispatch } from 'react';
import { tipOptions } from '../const';
import { ActionOrder, OrderState } from '../reducers/order-reducer';
import { TipOptions } from '../types';

type tipFormprops = {
    dispatch: Dispatch<ActionOrder>;
    tipSelected: TipOptions['value'];
};
export const TipForm = ({ dispatch, tipSelected }: tipFormprops) => {
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
                            checked={tipSelected === tip.value ? true : false}
                            onChange={() =>
                                dispatch({
                                    type: 'add-to-tip',
                                    payload: { tip: tip.value },
                                })
                            }
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
