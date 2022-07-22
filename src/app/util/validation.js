export function validateStringNotEmpty(value){

    if(value.trim().length === 0) {
        throw new Error('Invalid input - must not be empty.');
    }

}

export function validateNumber(number) {
    if(isNaN(number) || typeof number !== 'number'){
        throw new Error('Invalid number input.');
    }
}

export function validateEmail(userEmail) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return userEmail.match(validRegex) ? true : false;

}