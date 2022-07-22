'use strict'

import { calculateResult } from '../app/util/math';
import { generateResultText, displayResults } from '../app/util/output';

const form = document.querySelector('form');

function formSubmitHandler(event){

    event.preventDefault();

    const numberInputs = extractEnteredNumberValues(form);

    let result = calculateResult(numberInputs);

    const resultText = generateResultText(result);

    displayResults(resultText);

    output.textContent = resultText;

}

form.addEventListener('submit', formSubmitHandler);