import { NextResponse } from 'next/server';
import gatherRoyalties from '../../../lib/gatherRoyalties';
 
export async function POST(request) {
    const { collectionId, selectedItems } = await request.json();
    const parsedItems = JSON.parse(selectedItems);

    const data = await gatherRoyalties(collectionId, parsedItems);
    
    return NextResponse.json({ data });
}