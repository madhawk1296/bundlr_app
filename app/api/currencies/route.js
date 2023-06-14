import { NextResponse } from 'next/server';
import gatherCurrencies from '../../../lib/gatherCurrencies';
 
export async function GET(request) {
    const data = await gatherCurrencies();
    
    return NextResponse.json({ data });
}