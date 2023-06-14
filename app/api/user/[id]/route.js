import { NextResponse } from 'next/server';
import fetchCollectionsByUser from '../../../../lib/fetchCollectionsByUser'
import updateUserDB from '../../../../lib/updateUserDB';
import standardizeUser from '../../../../lib/standardizeUser';
import getOrUpdateUserCollections from '../../../../lib/getOrUpdateUserCollections';
 
export async function GET(request, { params }) {
    const { id } = params;
    const data = await getOrUpdateUserCollections(id);

    return NextResponse.json({ data });
}