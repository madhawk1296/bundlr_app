'use client';

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import SliderButton from './SliderButton';
import useHover from '../hooks/useHover';
import Slide from './Slide';

export default function Slider({ collections }) {
    const [scrollBackHidden, setScrollBackHidden] = useState(true);
    const [scrollForwardHidden, setScrollForwardHidden] = useState(false);
    const scrollContainerRef: any = useRef();
    const [hoverRef, isHovered]: any[] = useHover();

    useEffect(() => {
        const handleScroll = () => {
            const clientWidth = scrollContainerRef.current.clientWidth;
            const scrollWidth = scrollContainerRef.current.scrollWidth;
            const scrollAmount = scrollContainerRef.current.scrollLeft;

            if(scrollAmount === 0) {
                setScrollBackHidden(true);
            } else if(scrollAmount === (scrollWidth - clientWidth)) {
                setScrollForwardHidden(true);
            } else {
                setScrollBackHidden(false);
                setScrollForwardHidden(false); 
            }
        };
    
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.addEventListener('scroll', handleScroll);
    
        return () => {
          scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollBackward = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const newScrollPosition = scrollContainer.scrollLeft - scrollContainer.offsetWidth;
            scrollContainer.scrollTo({
              left: newScrollPosition,
              behavior: 'smooth'
            });        
        }
    }

    const scrollForward = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const newScrollPosition = scrollContainer.scrollLeft + scrollContainer.offsetWidth;
            scrollContainer.scrollTo({
              left: newScrollPosition,
              behavior: 'smooth'
            });        
        }
    }

    return (
        <div ref={hoverRef} className='relative w-screen'>
            <div ref={scrollContainerRef} className='relative w-screen overflow-auto'>
                <div className='relative w-fit py-[20px] flex flex-nowrap transition-all duration-[900ms] ease-in-out'>
                    {collections.map((collection, index) => <Slide key={index} index={index} collection={collection} />)}
                </div>
            </div>
            <div className={`absolute top-1/2 translate-y-[-50%] w-full flex justify-between px-[10px] pointer-events-none transition-all duration-200 ${!isHovered && 'opacity-0'}`}>
                <SliderButton onClick={scrollBackward} facingLeft={true} hidden={scrollBackHidden} />
                <SliderButton onClick={scrollForward} facingLeft={false} hidden={scrollForwardHidden} />
            </div>
        </div>
    );
};