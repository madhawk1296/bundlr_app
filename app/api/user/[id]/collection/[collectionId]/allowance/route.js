import { NextResponse } from 'next/server';
import fetchAllowance from '../../../../../../../lib/fetchAllowance';
 
export async function GET(request, { params }) {
    const { id, collectionId } = params;
    const data = await fetchAllowance(id, collectionId);

    return NextResponse.json({ data });
}