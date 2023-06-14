import { NextResponse } from 'next/server';
import getOrUpdateCollection from '../../../../lib/getOrUpdateCollection';
 
export async function GET(request, { params }) {
    const { id } = params;
    const data = await getOrUpdateCollection(id);

    return NextResponse.json({ data });
}