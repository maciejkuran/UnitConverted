'use strict';

import * as calc from './calculations.js';

let unitsFrom = document.querySelector('.unitsFrom');
let unitsTo = document.querySelector('.unitsTo');
let output = '';

//LENGTH CONVERTER
const frommm = document.querySelector('.frommm');
const fromcm = document.querySelector('.fromcm');
const fromm = document.querySelector('.fromm');
const fromkm = document.querySelector('.fromkm');
const frommile = document.querySelector('.frommile');
const fromyard = document.querySelector('.fromyard');
const fromfoot = document.querySelector('.fromfoot');
const frominch = document.querySelector('.frominch');

const tomm = document.querySelector('.tomm');
const tocm = document.querySelector('.tocm');
const tom = document.querySelector('.tom');
const tokm = document.querySelector('.tokm');
const tomile = document.querySelector('.tomile');
const toyard = document.querySelector('.toyard');
const tofoot = document.querySelector('.tofoot');
const toinch = document.querySelector('.toinch');

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
          if (options1[0] === frommm && options2[0] === tocm) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToCm(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: ${input} ${options1[0].textContent} divided by 10 `;
          } else if (options1[0] === frommm && options2[0] === tomm) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === frommm && options2[0] === tom) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.mmToMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: ${input} ${options1[0].textContent} divided by 1000`;
          } else if (options1[0] === frommm && options2[0] === tokm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.mmToKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: ${input} ${options1[0].textContent} divided by 1e+6`;
          } else if (options1[0] === frommm && options2[0] === tomile) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToMile(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1.609e+6`;
          } else if (options1[0] === frommm && options2[0] === toyard) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToYard(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 914`;
          } else if (options1[0] === frommm && options2[0] === tofoot) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToFoot(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 305`;
          } else if (options1[0] === frommm && options2[0] === toinch) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToInch(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 25.4`;
          } else if (options1[0] === fromcm && options2[0] === tomm) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToMm(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 10`;
          } else if (options1[0] === fromcm && options2[0] === tocm) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromcm && options2[0] === tom) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cmToMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 100`;
          } else if (options1[0] === fromcm && options2[0] === tokm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cmToKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 100000`;
          } else if (options1[0] === fromcm && options2[0] === tomile) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToMile(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 160934`;
          } else if (options1[0] === fromcm && options2[0] === toyard) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToYard(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 91.44`;
          } else if (options1[0] === fromcm && options2[0] === tofoot) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToFoot(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 30.48`;
          } else if (options1[0] === fromcm && options2[0] === toinch) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToInch(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.54`;
          } else if (options1[0] === fromm && options2[0] === tomm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.meterToMm(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromm && options2[0] === tocm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.meterToCm(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 100`;
          } else if (options1[0] === fromm && options2[0] === tom) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromm && options2[0] === tokm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.meterToKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromm && options2[0] === tomile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.meterToMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1609`;
          } else if (options1[0] === fromm && options2[0] === toyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.meterToYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1.094`;
          } else if (options1[0] === fromm && options2[0] === tofoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.meterToFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3.281`;
          } else if (options1[0] === fromm && options2[0] === toinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.meterToInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 39.37`;
          } else if (options1[0] === fromkm && options2[0] === tomm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilometerToMm(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+6`;
          } else if (options1[0] === fromkm && options2[0] === tocm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilometerToCm(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 100000`;
          } else if (options1[0] === fromkm && options2[0] === tom) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilometerToMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromkm && options2[0] === tokm) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromkm && options2[0] === tomile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilometerToMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1.609`;
          } else if (options1[0] === fromkm && options2[0] === toyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilometerToYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1094`;
          } else if (options1[0] === fromkm && options2[0] === tofoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilometerToFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3281`;
          } else if (options1[0] === fromkm && options2[0] === toinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilometerToInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 39370`;
          } else if (options1[0] === frommile && options2[0] === tomm) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mileToMm(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1.609e+6`;
          } else if (options1[0] === frommile && options2[0] === tocm) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mileToCm(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 160934`;
          } else if (options1[0] === frommile && options2[0] === tom) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.mileToMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1609`;
          } else if (options1[0] === frommile && options2[0] === tokm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.mileToKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1.609`;
          } else if (options1[0] === frommile && options2[0] === tomile) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === frommile && options2[0] === toyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.mileToYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1760`;
          } else if (options1[0] === frommile && options2[0] === tofoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.mileToFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 5280`;
          } else if (options1[0] === frommile && options2[0] === toinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.mileToInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 63360`;
          } else if (options1[0] === fromyard && options2[0] === tomm) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yardToMm(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 914`;
          } else if (options1[0] === fromyard && options2[0] === tocm) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yardToCm(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 91.44`;
          } else if (options1[0] === fromyard && options2[0] === tom) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yardToMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1.094`;
          } else if (options1[0] === fromyard && options2[0] === tokm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yardToKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1094`;
          } else if (options1[0] === fromyard && options2[0] === tomile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yardToMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1760`;
          } else if (options1[0] === fromyard && options2[0] === toyard) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromyard && options2[0] === tofoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yardToFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 3`;
          } else if (options1[0] === fromyard && options2[0] === toinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yardToInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 36`;
          } else if (options1[0] === fromfoot && options2[0] === tomm) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.footToMm(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 305`;
          } else if (options1[0] === fromfoot && options2[0] === tocm) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.footToCm(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 30.48`;
          } else if (options1[0] === fromfoot && options2[0] === tom) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.footToMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3.281`;
          } else if (options1[0] === fromfoot && options2[0] === tokm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.footToKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3281`;
          } else if (options1[0] === fromfoot && options2[0] === tomile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.footToMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 5280`;
          } else if (options1[0] === fromfoot && options2[0] === toyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.footToYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 3`;
          } else if (options1[0] === fromfoot && options2[0] === tofoot) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromfoot && options2[0] === toinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.footToInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 12`;
          } else if (options1[0] === frominch && options2[0] === tomm) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.inchToMm(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 25.4`;
          } else if (options1[0] === frominch && options2[0] === tocm) {
            output =
              `${input} ` + `${options1[0].textContent}` + ' = ' + calc.inchToCm(input) + ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.54`;
          } else if (options1[0] === frominch && options2[0] === tom) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.inchToMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 39.37`;
          } else if (options1[0] === frominch && options2[0] === tokm) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.inchToKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result,  divide ${input} ${options1[0].textContent} by 39370.37`;
          } else if (options1[0] === frominch && options2[0] === tomile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.inchToMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 63360`;
          } else if (options1[0] === frominch && options2[0] === toyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.inchToYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 36`;
          } else if (options1[0] === frominch && options2[0] === tofoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.inchToFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 12`;
          } else if (options1[0] === frominch && options2[0] === toinch) {
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
