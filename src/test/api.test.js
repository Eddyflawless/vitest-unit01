import { it, expect, describe, vi, beforeAll } from "vitest";
import { fetchData, sendDataRequest, sendDataRequestV2 } from '../app/util/http';
import axios  from 'axios';

describe('', () => {

    beforeAll(() => {
       // vi.mock('axios');
    });

    const testResponseData = { testKey: 'testData'};

    const testResponse = {
        ok: true,
        json(){
            return new Promise((resolve, reject) => {
                resolve(testResponseData)
            })
        }
    };

    const testFetch = vi.fn( (url, options) => {
        return new Promise((resolve, reject) => {

            resolve(testResponse);
        })
    });

    vi.stubGlobal('fetch', testFetch )

    it('should fetch data from api', () => {

    });


    it('should return available response data', () => {

        const testData = { key: 'test'};

        return expect(sendDataRequestV2(testData)).resolves.toEqual(testResponseData);

    });


});