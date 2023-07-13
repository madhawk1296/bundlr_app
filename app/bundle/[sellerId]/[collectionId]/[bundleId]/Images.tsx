'use client';

import Image from "next/image";
import getImage from "../../../../../lib/getImage"
import { useContext, useState } from "react";
import ImageSlide from "./ImageSlide";
import MobileContext from "../../../../../components/hooks/MobileContext";

export default function Images({ tokens }) {
    const { isMobile } = useContext(MobileContext);

    const images = tokens.map(token => token?.image_url);

    const [mainImage, setMainImage] = useState({image: images[0], index: 0});

    const selectSlide = (newImage) => {
        setMainImage(newImage);
    }

    return (
        <div className="w-full md:w-[700px] h-full flex flex-col items-center gap-4 py-[20px] px-[10px]">
            <Image className="rounded-md"  alt={`Bundle Main Image`} src={getImage(mainImage.image)} height={400} width={400} />
            <div className="w-full md:w-[400px] flex flex-wrap gap-2">
                {images.map((image, index) => <ImageSlide key={index} index={index} image={image} selectSlide={selectSlide} selected={mainImage.index == index} />)}
            </div>
        </div>
    )
}