
import { cleanNumbers } from './numbers';

export function add(numbers){
    let sum = 0;

    for (let number of numbers) {
        sum += +number;
    }
    return sum;
}

export function calculateResult(numberInputs){

    let result = '';
    
    try{

        const numbers = cleanNumbers(numberInputs);

        result = add(numbers).toString();

    }catch(err){
        console.log(err);
        result = err.message;
    }

    return result;
}