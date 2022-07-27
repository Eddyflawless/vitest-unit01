export function generateResultText(calculationResult){
    
    let resultText = '';

    if(calculationResult == 'invalid'){
        resultText = 'Invalid input. You must enter valid numbers.';
    }else if(calculationResult !== 'no-calc'){
        resultText = 'Result: ' + calculationResult;
    }

    return resultText;

}

export function displayResults(resultText){
    const output = document.getElementById('result');

    output.textContent = resultText;
}

export function showError(message) {

    const [  errorContainerElement, errorMessageElement ] = getErrorContainers('errors');

    errorMessageElement.textContent = message;
    errorContainerElement.innerHTML = '';
    errorContainerElement.appendChild(errorContainerElement);
}

export function getErrorContainers(elId){

    const errorContainerElement = document.getElementById(elId);
    const errorMessageElement = document.createElement('p');

    return [ errorContainerElement, errorMessageElement];

}