import { it, expect, describe } from 'vitest';

import { add } from '../app/util/math.js';

describe('add Fn', () => {

    it('should up an array of numbers', () => {
    
        //Arrange
        const numbers = [11,2,12,23.6];
        const expectedResult = numbers.reduce((prevValue, curValue)=> prevValue + curValue )
    
        //Act
        const result = add(numbers);
    
        //Assert
        expect(result).toBe(expectedResult);
    
    });
    
    it('should yield NaN if at least one invalid number is provided', () => {
    
        const inputs = ['invalid', 1, 12.5];
        
        const result = add(inputs);
    
        expect(result).toBeNaN();
    
    
    });
    
    it('should yield a correct sum if an array of numeric string is provided', () => {
    
        const numbers  = ['1', '2'];
        const expectedResult = numbers.reduce((prevValue, curValue)=> +prevValue + +curValue,0 );
        
        const result = add(numbers);
    
        expect(result).toBe(expectedResult);
    })

    
it('should yield 0 if an empty array is passed', () => {

    const numbers  = [];
    const expectedResult = 0;
    
    const result = add(numbers);

    expect(result).toBe(expectedResult);


});

it('should throw an error if no value is passed into the method', () => {

    const resultFn = () => {
        add();
    }

    expect(resultFn).toThrow();


});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
        add(num1, num2);
    }

    expect(resultFn).toThrow(/is not iterable/);

});


});
