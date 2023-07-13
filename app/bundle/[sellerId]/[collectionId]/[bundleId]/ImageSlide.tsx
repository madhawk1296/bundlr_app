import Image from "next/image";
import getImage from "../../../../../lib/getImage";

export default function ImageSlide({ image,index, selectSlide, selected }) {
    const handleSelect = () => {
        selectSlide({
            image,
            index
        });
    }

    return (
        <Image onClick={handleSelect} className={`rounded-md cursor-pointer border-2 smooth ${selected ? "border-blue-400" : "border-transparent" }`} alt={`Bundle Image Slide`} src={getImage(image)} height={75} width={75} />
    )
}