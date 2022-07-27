export function validateStringNotEmpty(value, errorMessage='Invalid input - must not be empty.'){

    if(value.trim().length === 0 || !value) {
        throw new Error(errorMessage);
    }

}

export function validateNumber(number, errorMessage='Invalid number input.') {
    if(isNaN(number) || typeof number !== 'number'){
        throw new Error(errorMessage);
    }
}

export function validateEmail(userEmail) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return userEmail.match(validRegex) ? true : false;

}