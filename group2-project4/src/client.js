import * as contentful from 'contentful';

export const client = contentful.createClient({
    space: process.env.REACT_APP_CTFL_SPACE_ID,
    accessToken: process.env.REACT_APP_CTFL_ACCESS_TOKEN
});