'use client';

import Image from "next/image";
import TokenId from "./TokenId";
import ListOption from "./ListOption";
import { use, useContext, useEffect, useState } from "react";
import ListItemsContext from "../../../../components/hooks/ListItemsContext";
import CurrencyImage from "../../../../components/CurrencyImage";
import formatNumber from "../../../../lib/formatNumber";
import convertToCurrency from "../../../../lib/convertToCurrency";

export default function Item({ currencies, floorPrice, item }) {
    const { currency, selectedItems, selectItem, deselectItem, updateItem } = useContext(ListItemsContext);
    const {imageUrl, name, tokenId, balance, tokenStandard, tokenFloorPrice} = item
    const isERC1155 = tokenStandard == 'ERC1155';
    const selected = selectedItems.find(currentItem => currentItem.tokenId == item.tokenId)
    const tokenPrice = tokenFloorPrice > 0 ? tokenFloorPrice : floorPrice;
    const tokenPriceCurrency = formatNumber(convertToCurrency(currencies, tokenPrice, "magic", currency.name));

    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(tokenPriceCurrency);

    useEffect(() => {
        if(selected) {
            updateItem({
                name,
                tokenId,
                quantity,
                price,
                tokenStandard
            })
        }
    }, [price, quantity])

    // update default price if currency changes
    useEffect(() => {
        if(!selected) {
            setPrice(tokenPriceCurrency);
        }
    }, [currency])

    const handleSelect = () => {
        if(!selected) {
            selectItem({
                name,
                tokenId,
                quantity,
                price,
                tokenStandard
            })
        }
    }

    const handleDeselect = () => {
        if(selected) {
            deselectItem(tokenId);

            // reset quantity and price
            setQuantity(1);
            setPrice(tokenPriceCurrency);
        }
    }

    return (
        <div onClick={handleSelect} className={`relative w-[250px] h-fit rounded-xl transition-all duration-200 ${selected ? "border-[3px] border-blue-500 bg-blue-500" : "cursor-pointer border-2 border-gray-100"} shadow-sm hover:shadow-md`}>
            <div className="relative overflow-hidden rounded-lg">
                <div className='relative aspect-square h-full'>
                    <Image alt={`Collection ${name}`} src={imageUrl ? imageUrl : '/no_image.jpeg'} width={250} height={250} priority={true} />     
                </div>
                <TokenId tokenId={tokenId} />          
                <div className='relative w-full h-fit px-[15px] py-[8px] flex flex-col gap-1 bg-white rounded-b-lg'>
                    <h1 className='w-full h-[28px] font-semibold text-lg text-gray-800 tracking-wide overflow-hidden truncate'>{name || `#${tokenId}`}</h1>
                    <div className="relative w-full h-[20px] py-[1px] flex flex-inline items-center gap-1">
                        <CurrencyImage currency={currency.name} />
                        <h1 className='leading-none text-xl font-bold text-gray-700'>{formatNumber(tokenPriceCurrency)}</h1>
                    </div>
                    {isERC1155 && <h1 className='w-full h-[20px] font-semibold text-sm text-gray-600 tracking-wide overflow-hidden truncate'>Balance: {balance}</h1>}
                </div> 
                {selected && (
                    <div className='w-full bg-blue-500 px-[15px] py-[8px] flex flex-col gap-2 items-center '>
                        {isERC1155 && <ListOption value={quantity} setValue={setQuantity} title="Quantity" type="quantity" minValue={1} maxValue={balance} />}
                        <ListOption currency={currency.name} value={formatNumber(price)} setValue={setPrice} title={isERC1155 ? "Price Per Item" : "Price"} type="price" />
                    </div>
                )}
            </div>
            <button 
                onClick={handleDeselect} 
                className={`absolute top-[0] right-[0] w-[35px] h-[35px] rounded-full bg-blue-500 border border-gray-200 text-white font-bold flex justify-center items-center translate-y-[-50%] translate-x-[50%] transition-all duration-200 ${selected ? "opacity-100" : "invisible opacity-0"}`}
            >X</button>   
        </div> 
    )
}