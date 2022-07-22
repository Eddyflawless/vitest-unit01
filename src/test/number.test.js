import { it, expect,describe } from 'vitest';

import { cleanNumbers, transformToNumber } from '../app/util/numbers';

describe('transformToNumber Fn', () => {

    
    it('should transform a string number to a value of type number', () => {
    
        const input = '1';
    
        const result = transformToNumber(input);
    
        expect(result).toBeTypeOf("number")
    
        expect(result).toBe(+input);
    
    });
    
    it('should yield expected number value', () => {
    
        const input = '1';
    
        const result = transformToNumber(input);
    
        expect(result).toBe(+input);
    
    });
    

    it('should yield NaN on invalid datatype passed', () => {
    
        const input = 'invalid';
    
        const result = transformToNumber(input);
    
        expect(result).toBeNaN();
    
    
    });

});

describe('Clean numbers Fn', () => {

    it('should return an array of number values  if an array of string integers is passed ',() => {
        
        const numberInputs = ['1','2','3'];
    
        const cleanedNumbers = cleanNumbers(numberInputs);
    
        expect(cleanedNumbers).toEqual([1, 2, 3]);

    });

    it('should throw an error with message (Invalid input - must not be empty) when one of the values is an empty string ',() => {
        
        const numberInputs = ['','2','3'];
    
        const resultFn = () => cleanNumbers(numberInputs);

        expect(resultFn).toThrow(/Invalid input - must not be empty/);

    });


    it('should return an empty array when an empty array of inputs is passed  ',() => {
        
        const numberInputs = [];
    
        const result = cleanNumbers(numberInputs);

        expect(result).toEqual([]);

    });




})