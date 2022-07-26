'use strict';

import * as calc from './calculations.js';

let unitsFrom = document.querySelector('.unitsFrom');
let unitsTo = document.querySelector('.unitsTo');
let output = '';

const fromcelsius = document.querySelector('.fromcelsius');
const fromkelvin = document.querySelector('.fromkelvin');
const fromfahrenheit = document.querySelector('.fromfahrenheit');

const tocelsius = document.querySelector('.tocelsius');
const tokelvin = document.querySelector('.tokelvin');
const tofahrenheit = document.querySelector('.tofahrenheit');

const convert = () => {
  const convertBtn = document.querySelector('.convertBtn');

  if (convertBtn) {
    convertBtn.addEventListener('click', function () {
      const input = Number(document.querySelector('.inputUnit').value);
      const conversionResult = document.querySelector('.conversionResult');
      const formulaResult = document.querySelector('.formula');
      let options1 = unitsFrom.selectedOptions;
      let options2 = unitsTo.selectedOptions;

      for (let a = 0; a < options1.length; a++) {
        for (let b = 0; b < options2.length; b++) {
          if (options1[0] === fromcelsius && options2[0] === tokelvin) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.celsiusToKelvin(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: ${input} ${options1[0].textContent} + 273.15 `;
          } else if (options1[0] === fromcelsius && options2[0] === tofahrenheit) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.celsiusToFahrenheit(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: (${input} ${options1[0].textContent} × 9/5) + 32 `;
          } else if (options1[0] === fromcelsius && options2[0] === tocelsius) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromkelvin && options2[0] === tocelsius) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kelvinToCelsius(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: ${input} ${options1[0].textContent} - 273.15 `;
          } else if (options1[0] === fromkelvin && options2[0] === tokelvin) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromkelvin && options2[0] === tofahrenheit) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kelvinToFahrenheit(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: (${input} ${options1[0].textContent} - 273.15) × 9/5 + 32 `;
          } else if (options1[0] === fromfahrenheit && options2[0] === tocelsius) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.fahrenheitToCelsius(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: (${input} ${options1[0].textContent} - 32) × 5/9 `;
          } else if (options1[0] === fromfahrenheit && options2[0] === tokelvin) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.fahrenheitToKelvin(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: (${input} ${options1[0].textContent} - 32) × 5/9 + 273.15 `;
          } else if (options1[0] === fromfahrenheit && options2[0] === tofahrenheit) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          }
        }
      }
    });
  }
};

convert();
