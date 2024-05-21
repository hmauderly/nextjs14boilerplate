import { NextRequest, NextResponse } from 'next/server';
import { fetchGoogleImages } from '../../utils/googleSearch';

export async function GET(req: NextRequest, res: NextResponse)  {

    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');
    const start = searchParams.get('start');
    const count = searchParams.get('count');

 //   const { query } = req.query;

    if (!query) {
        return NextResponse.json({ error: 'Query parameter is missing' }, { status: 404 });
    }

    try {
        const data = await fetchGoogleImages(query as string, start as string, count as string);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};