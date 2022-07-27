import axios  from 'axios';
import { HttpError } from './errors';

const url = "http://uncle-sam.dev";

export const fetchData = async () => {

    return axios.get(url)
    .then(response => {
        return response.data
    });
}

export const sendDataRequest = async (data) => {

    let responseData ;

    try{

        responseData = axios.post(`${url}/post`, data)
        .then(response => {
            return response.data;
        });


    }catch(error){
        console.log("-->",error);

        throw new HttpError(500,`Send the request failed`, responseData)
    }

    return responseData;

}

export const sendDataRequestV2 = async (data) => {

    let response  = await fetch(`${url}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const responseData = await response.json();

    if(!response.ok){
        throw new HttpError(response.status,`Send the request failed`, responseData)
    }

    return responseData;

}

