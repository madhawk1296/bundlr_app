import { NextResponse } from 'next/server';
import getOrUpdateUserItems from '../../../../../../lib/getOrUpdateUserItems';
 
export async function GET(request, { params }) {
    const { id, collectionId } = params;
    const data = await getOrUpdateUserItems(id, collectionId);
    
    
    return NextResponse.json({ data });
}