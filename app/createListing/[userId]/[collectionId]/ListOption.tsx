import { useState } from "react"
import CurrencyImage from "../../../../components/CurrencyImage";
import replaceDecimal from "../../../../lib/replaceDecimal";
import replaceInteger from "../../../../lib/replaceInteger";

export default function ListOption({ value, setValue, title, type, minValue=null, maxValue=null, currency=null }) {
    const isPrice = type == "price";

    const handleChange = (event) => {
        const value = event.target.value;

        let replacedValue;
        if (isPrice) {
            replacedValue = replaceDecimal(value);
        } else {
            replacedValue = replaceInteger(value);
        }

        console.log(replacedValue);0

        if(maxValue && replacedValue > maxValue) {
            setValue(maxValue);
        } else if (minValue && replacedValue < minValue) { 
            setValue(minValue);
        } else {
            setValue(replacedValue);
        }
    };

    return (
        <div className="relative w-full flex justify-between items-center">
            <h1 className='font-semibold text-sm text-white tracking-wide overflow-hidden truncate'>{title}</h1>
            <div className="relative w-[90px] h-[25px] px-[5px] rounded-md relative flex flex-inline gap-1 items-center bg-white overflow-hidden">
                <input 
                    className="[appearance:textfield] w-full text-sm font-semibold text-gray-800 text-right outline-none select-none appearance-none" 
                    type="number" 
                    min={isPrice ? '0' : '1'}
                    value={value} 
                    onChange={handleChange} />
                <div className="relative h-[16px] aspect-square flex items-center justify-center">
                    {currency && <CurrencyImage currency={currency} />}
                </div>
            </div>
        </div>
    )
}