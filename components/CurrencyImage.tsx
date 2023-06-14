import Image from "next/image";
import Magic from "./icons/Magic";

export default function CurrencyImage({ currency }) {
    return (
        <div className="relative h-full aspect-square">
            {currency == "eth" ? <Image className="object-contain px-[4px]" alt='Eth Icon' src="/eth.png" fill={true} />
            : currency == "magic" ? <Magic />
            : currency == "usdc" ? <Image className="object-contain" alt='USDC Icon' src="/usdc.png" fill={true} />
            : currency == "usdt" ? <Image className="object-contain" alt='USDT Icon' src="/usdt.png" fill={true} />
            : currency == "dai" ? <Image className="object-contain" alt='DAI Icon' src="/dai.png" fill={true} />
            : null}
        </div>
        )
}