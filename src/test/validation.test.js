import { expect, it, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber, validateEmail }  from '../app/util/validation';



describe('validateStringNotEmpty Fn', () => {

    it('should not throw an error on a non-empty string input', () => {
    
        const input = "hello world";
    
        const resultFn = () => {
            validateStringNotEmpty(input);
        }
    
        expect(resultFn).to.not.throw();
    
    });
    
    it('should throw an error with message (Invalid input - must not be empty) on a empty string input', () => {
    
        const input = "";
    
        const resultFn = () => {
            validateStringNotEmpty(input);
        }
    
        expect(resultFn).to.throw(/Invalid input - must not be empty/);
    
    });

    it('should throw an error with message (trim is not a function) on a number value passed', () => {

        const input = 2;
    
        const resultFn = () => {
            validateStringNotEmpty(input);
        }
    
        expect(resultFn).to.throw(/trim is not a function/);
    
    });


    it('should throw an error when any other data-type is passed', () => {

        const input1 = {};
        const input2 = [];

        const resultFn1 = () => {
            validateStringNotEmpty(input1);
        }
        const resultFn2 = () => {
            validateStringNotEmpty(input2);
        }

        expect(resultFn1).to.throw();
        expect(resultFn2).to.throw();


    });


});

describe('validateNumber Fn', () => {

    it('should yield true when a non-numeric value is passed', () => {
    
        const input = '2';
    
        const resultFn = () => {
            validateNumber(input);
        }
    
        expect(resultFn).to.throw();
    
    });
    
    it('should yield true when a number value is passed', () => {
    
        const input = 2;
    
        const resultFn = () => {
            validateNumber(input);
        }
    
        expect(resultFn).to.not.throw();
    
    });

})



describe("validateEmail fn", ()=>{


    it('should yield a boolean value when any email is passed', () => {

        const testUserEmail = "test@gmail.com";

        const result = (email) =>  validateEmail(email);

        expect(result(testUserEmail)).toBeTypeOf("boolean");

    })

    it('should yield true when a valid email is passed', () => {

        const testUserEmail1 = "test@gmail.com";
        const testUserEmail2 = "test@icloud.com"
        const testUserEmail3 = "test@occulus.net"
        const testUserEmail4 = "test@bog.gh.com"

        const result = (email) =>  validateEmail(email);

        expect(result(testUserEmail1)).toBe(true);
        expect(result(testUserEmail2)).toBe(true);
        expect(result(testUserEmail3)).toBe(true);
        expect(result(testUserEmail4)).toBe(true);

    })

    it('should yield false when a invalid email is passed', () => {

        const testUserEmail1 = "testgmail.com";
        // const testUserEmail2 = "testgh@jhslxy";

        const result = (email) =>  validateEmail(email);

        expect(result(testUserEmail1)).toBe(false);
        // expect(result(testUserEmail2)).toBe(false);

    })
});

it('should throw an error with message (Invalid number input) when a non-number value is passed', () => {

    const input1 = NaN;

    const resultFn1 = () => {
        validateNumber(input1);
    }

    expect(resultFn1).to.throw(/Invalid number input/);

});

