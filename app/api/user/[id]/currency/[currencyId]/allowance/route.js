import { NextResponse } from 'next/server';
import fetchCurrencyAllowance from "../../../../../../../lib/fetchCurrencyAllowance"

export async function GET(request, { params }) {
    const { id, currencyId } = params;
    const data = await fetchCurrencyAllowance(id, currencyId);
    
    return NextResponse.json({ data });
}