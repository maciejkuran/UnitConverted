'use strict';

import * as calc from './calculations.js';

const frommeterpersecond = document.querySelector('.frommeterpersecond');
const fromkilometerperhour = document.querySelector('.fromkilometerperhour');
const frommileperhour = document.querySelector('.frommileperhour ');

const tometerpersecond = document.querySelector('.tometerpersecond');
const tokilometerperhour = document.querySelector('.tokilometerperhour');
const tomileperhour = document.querySelector('.tomileperhour ');

let unitsFrom = document.querySelector('.unitsFrom');
let unitsTo = document.querySelector('.unitsTo');
let output = '';

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
          if (options1[0] === frommeterpersecond && options2[0] === tometerpersecond) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === frommeterpersecond && options2[0] === tokilometerperhour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.meterPerSecondToKilometerPerHour(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 3.6`;
          } else if (options1[0] === frommeterpersecond && options2[0] === tomileperhour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.meterPerSecondToMilePerHour(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.237`;
          } else if (options1[0] === fromkilometerperhour && options2[0] === tometerpersecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilometerPerHourToMeterPerSecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 3.6`;
          } else if (options1[0] === fromkilometerperhour && options2[0] === fromkilometerperhour) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromkilometerperhour && options2[0] === tomileperhour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilometerPerHourToMeterPerSecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1.609`;
          } else if (options1[0] === frommileperhour && options2[0] === tometerpersecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milePerHourToMeterPerSecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.237`;
          } else if (options1[0] === frommileperhour && options2[0] === tokilometerperhour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milePerHourToKilometerPerHour(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1.609`;
          } else if (options1[0] === frommileperhour && options2[0] === tomileperhour) {
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
