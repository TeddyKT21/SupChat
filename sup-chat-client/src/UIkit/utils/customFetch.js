import axios from "axios";
const baseUrl = require('../../URL.json').url;
let error = null;
let resp = null;
export async function customFetch(url, method, data){
    const  resp = await axios({
            method,
            url: `${baseUrl}/${url}`,
            data
        });
    console.log(resp);
    return resp.data;
}


