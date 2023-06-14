'use client';

import { useContext } from "react";
import sortList from "../../../lib/sortList";
import Collection from "./Collection";
import SortContext from "../../../components/hooks/SortContext";

export default function Collections({ userId, currencies, collections }) {
    const { sort, isAscending } = useContext(SortContext);
    const sorted = sortList(collections, {sort, isAscending})

    return (
        <div className="w-full flex flex-wrap gap-6">
            {sorted && sorted.map((collection, index) => <Collection key={index} userId={userId} currencies={currencies} collection={collection} />)}
        </div>
    )
}