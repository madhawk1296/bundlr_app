'use client';

import Step from "./Step";
import { usePathname } from 'next/navigation';

export default function Steps() {
    const pathname = usePathname();
    const sections = pathname.split("/");
    const collectionId = sections[2];
    const currentStep = sections.length - 2; 
    
    return (
        <div className="w-full h-[50px] border-b-2 border-gray-200 flex gap-6">
            <Step value={1} title="Choose Collection" active={currentStep == 1} link={collectionId} />
            <Step value={2} title="Choose Items" active={currentStep == 2} />
        </div>
    )
}