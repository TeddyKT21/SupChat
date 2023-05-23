import axios from "axios";
const baseUrl = require('../../URL.json').url;

export async function customFetch(url, method, data){
    const  resp = await axios({
            method,
            url: `${baseUrl}/${url}`,
            data
        });
    //console.log("customFetch",resp);
    return resp.data;
}


