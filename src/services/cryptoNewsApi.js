import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-PapidApis-SDK': 'true',
    'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com',
    'X-RapidAPI-Key': 'f676e52500msh0e73a1ed6d38801p1165e1jsna485cecb7d05'
  }



  const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data' }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;