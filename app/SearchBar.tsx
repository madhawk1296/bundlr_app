'use client';

import Search from "../components/icons/Search";
import { useRef, useState } from "react";
import filterCollectionNames from "../lib/filterCollectionNames";
import SearchResult from "./SearchResult";

export default function SearchBar({ collections }) {
    const [search, setSearch] = useState<string>('');
    const [selected, setSelected] = useState<boolean>(false);
    const inputRef = useRef<any>();
    const containerRef = useRef<any>();
    const [listening, setListening] = useState<boolean>(false);

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setSelected(false);
            setListening(false);
            document.removeEventListener('mousedown', handleClickOutside);
        }
    };

    const handleDivClick = () => {
        setSelected(true);
        inputRef.current && inputRef.current.focus();

        if (!listening) {
            setListening(true);
            document.addEventListener('mousedown', handleClickOutside);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleSelect = () => {
        setSearch('');
        setSelected(false);
        setListening(false);
        document.removeEventListener('mousedown', handleClickOutside);
    }

    const filteredCollections = filterCollectionNames(search, collections).slice(0, 5);

    return (
        <div ref={containerRef} className='relative md:w-[600px] h-[40px]'>
            <div onClick={handleDivClick} className="relative border-2 rounded-xl w-full h-full px-[7px] flex gap-2 items-center cursor-text hover:shadow-sm">
                <Search />
                <input ref={inputRef} onChange={handleSearch} value={search} className='w-full text-gray-900 outline-none' placeholder="Search collections" />
            </div>
            {(selected && search) && <div className="absolute w-full border-2 bg-gray-200 top-[50px] rounded-xl overflow-hidden flex flex-col gap-0.5">
                {filteredCollections.map((collection, index) => <SearchResult key={index} handleSelect={handleSelect} collection={collection} />)}
            </div>}
        </div>
    )
}