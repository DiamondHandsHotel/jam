import {config} from 'dotenv';
config();

const jamHost = process.env.JAM_HOST || 'talk.diamondhandshotel.com';
const pantryUrl = process.env.JAM_PANTRY_URL || `https://${jamHost}/_/pantry`;
const pantryWsUrl = pantryUrl.replace('http', 'ws');

const local = process.env.LOCAL;

export {jamHost, pantryWsUrl, local};
