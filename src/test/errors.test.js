import { it, expect, describe } from "vitest";

import { HttpError,ValidationError } from "../app/util/errors";

const testStatusCode = 1;
const testMessage = "Test";
const testData = { key: 'test'}


describe('Class HttpError', () => {


    it('should contain the provided status code, message and data', () => {

        const testError = new HttpError(testStatusCode, testMessage, testData);

        expect(testError.statusCode).toBe(testStatusCode);
        expect(testError.message).toBe(testMessage);
        expect(testError.data).toBe(testData);

    });

    it('should contain undefined data when data is not provided', () => {

        const testError = new HttpError(testStatusCode, testMessage);

        expect(testError.statusCode).toBe(testStatusCode);
        expect(testError.message).toBe(testMessage);
        expect(testError.data).toBeUndefined();

    });
    
});

describe('class ValidationError', () => {

    it('should contain the provide message', () => {
        
        const testError = new ValidationError(testMessage);

        expect(testError.message).toBe(testMessage);
    })

})