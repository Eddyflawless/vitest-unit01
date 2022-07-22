import { validateNumber, validateStringNotEmpty } from "./validation";

export function transformToNumber(value){

    return +value;
}

export function cleanNumbers(numberValues){

    //inputs passed are of string type

    const numbers = [];

    for(const numberInput of numberValues){

        validateStringNotEmpty(numberInput); // check if its not empty

        const number = transformToNumber(numberInput);

        validateNumber(number);

        numbers.push(number);
    }
    return numbers;

}