import axios from 'axios';

const GOOGLE_API_URL =process.env.GOOGLE_API_URL;

export const fetchGoogleImages = async (query: string,start: number, count: number): Promise<any> => {
    const apiKey = process.env.GOOGLE_API_KEY;
    const searchEngineId = process.env.SEARCH_ENGINE_ID;

    if (!apiKey || !searchEngineId) {
        throw new Error('Missing Google API Key or Search Engine ID');
    }

    try {
/*
        template: 'https://www.googleapis.com/customsearch/v1?q={searchTerms}
        &num={count?}
        &start={startIndex?}
        &lr={language?}
        &safe={safe?}
        &cx={cx?}
        &sort={sort?}
        &filter={filter?}
        &gl={gl?}&cr={cr?}
        &googlehost={googleHost?}
        &c2coff={disableCnTwTranslation?}
        &hq={hq?}&hl={hl?}
        &siteSearch={siteSearch?}
        &siteSearchFilter={siteSearchFilter?}
        &exactTerms={exactTerms?}
        &excludeTerms={excludeTerms?}
        &linkSite={linkSite?}
        &orTerms={orTerms?}
        &dateRestrict={dateRestrict?}
        &lowRange={lowRange?}
        &highRange={highRange?}
        &searchType={searchType}
        &fileType={fileType?}
        &rights={rights?}
        &imgSize={imgSize?}
        &imgType={imgType?}
        &imgColorType={imgColorType?}
        &imgDominantColor={imgDominantColor?}
        &alt=json'
*/
        const response = await axios.get(GOOGLE_API_URL, {
            params: {
                key: apiKey,
                cx: searchEngineId,
                q: query,
                searchType: 'image',
                start: start,
                num:count,
                rights: "cc_publicdomain"

            },
        });
       // let combinedJson = [json1, json2];
        return response.data;
    } catch (error) {
        console.error('Error fetching Google Images:', error);
        throw error;
    }
};