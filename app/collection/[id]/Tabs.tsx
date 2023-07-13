'use client';

import { useState } from "react";
import Tab from "./Tab";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('bundles');

    return (
        <div className="relative w-full h-[50px] flex gap-10 items-center border-b-2 border-gray-200">
            <Tab setActiveTab={setActiveTab} value="bundles" title="Bundles" active={activeTab == 'bundles'} />
        </div>
    )
}