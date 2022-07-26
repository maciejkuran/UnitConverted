'use strict';

import * as calc from './calculations.js';

let unitsFrom = document.querySelector('.unitsFrom');
let unitsTo = document.querySelector('.unitsTo');
let output = '';

const fromsquaremeter = document.querySelector('.fromsquaremeter');
const fromsquarekilometer = document.querySelector('.fromsquarekilometer');
const fromhectare = document.querySelector('.fromhectare');
const fromacre = document.querySelector('.fromacre');
const fromsquaremile = document.querySelector('.fromsquaremile');
const fromsquareyard = document.querySelector('.fromsquareyard');
const fromsquarefoot = document.querySelector('.fromsquarefoot');
const fromsquareinch = document.querySelector('.fromsquareinch');

const tosquaremeter = document.querySelector('.tosquaremeter');
const tosquarekilometer = document.querySelector('.tosquarekilometer');
const tohectare = document.querySelector('.tohectare');
const toacre = document.querySelector('.toacre');
const tosquaremile = document.querySelector('.tosquaremile');
const tosquareyard = document.querySelector('.tosquareyard');
const tosquarefoot = document.querySelector('.tosquarefoot');
const tosquareinch = document.querySelector('.tosquareinch');

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
          if (options1[0] === fromsquaremeter && options2[0] === tosquaremeter) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromsquaremeter && options2[0] === tosquarekilometer) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMeterToSquareKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1e+6 `;
          } else if (options1[0] === fromsquaremeter && options2[0] === tohectare) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMeterToHectare(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 10000 `;
          } else if (options1[0] === fromsquaremeter && options2[0] === toacre) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMeterToAcre(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 4047 `;
          } else if (options1[0] === fromsquaremeter && options2[0] === tosquaremile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMeterToSquareMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.59e+6 `;
          } else if (options1[0] === fromsquaremeter && options2[0] === tosquareyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMeterToSquareYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1.196 `;
          } else if (options1[0] === fromsquaremeter && options2[0] === tosquarefoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMeterToSquareFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 10.764`;
          } else if (options1[0] === fromsquaremeter && options2[0] === tosquareinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMeterToSquareInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1550`;
          } else if (options1[0] === fromsquarekilometer && options2[0] === tosquaremeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareKilometerToSquareMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+6`;
          } else if (options1[0] === fromsquarekilometer && options2[0] === tosquarekilometer) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromsquarekilometer && options2[0] === tohectare) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareKilometerToHectare(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 100`;
          } else if (options1[0] === fromsquarekilometer && options2[0] === toacre) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareKilometerToAcre(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 247`;
          } else if (options1[0] === fromsquarekilometer && options2[0] === tosquaremile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareKilometerToSquareMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.59`;
          } else if (options1[0] === fromsquarekilometer && options2[0] === tosquareyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareKilometerToSquareYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1.196e+6`;
          } else if (options1[0] === fromsquarekilometer && options2[0] === tosquarefoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareKilometerToSquareFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1.076e+7`;
          } else if (options1[0] === fromsquarekilometer && options2[0] === tosquareinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareKilometerToSquareInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1.55e+9`;
          } else if (options1[0] === fromhectare && options2[0] === tosquaremeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hectareToSquareMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 10000`;
          } else if (options1[0] === fromhectare && options2[0] === tosquarekilometer) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hectareToSquareKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 100`;
          } else if (options1[0] === fromhectare && options2[0] === tohectare) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromhectare && options2[0] === toacre) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hectareToAcre(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.471`;
          } else if (options1[0] === fromhectare && options2[0] === tosquaremile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hectareToSquareMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 259`;
          } else if (options1[0] === fromhectare && options2[0] === tosquareyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hectareToSquareYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 11960`;
          } else if (options1[0] === fromhectare && options2[0] === tosquarefoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hectareToSquareFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 107639`;
          } else if (options1[0] === fromhectare && options2[0] === tosquareinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hectareToSquareInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1.55e+7`;
          } else if (options1[0] === fromacre && options2[0] === tosquaremeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.acreToSquareMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 4047`;
          } else if (options1[0] === fromacre && options2[0] === tosquarekilometer) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.acreToSquareKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 247`;
          } else if (options1[0] === fromacre && options2[0] === tohectare) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.acreToHectare(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.471`;
          } else if (options1[0] === fromacre && options2[0] === toacre) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromacre && options2[0] === tosquaremile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.acreToSquareMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 640`;
          } else if (options1[0] === fromacre && options2[0] === tosquareyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.acreToSquareYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 4840`;
          } else if (options1[0] === fromacre && options2[0] === tosquarefoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.acreToSquareFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 43560`;
          } else if (options1[0] === fromacre && options2[0] === tosquareinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.acreToSquareInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 6.273e+6`;
          } else if (options1[0] === fromsquaremile && options2[0] === tosquaremeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMileToSquareMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.59e+6`;
          } else if (options1[0] === fromsquaremile && options2[0] === tosquarekilometer) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMileToSquareKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.59`;
          } else if (options1[0] === fromsquaremile && options2[0] === tohectare) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMileToHectare(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 259`;
          } else if (options1[0] === fromsquaremile && options2[0] === toacre) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMileToAcre(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 640`;
          } else if (options1[0] === fromsquaremile && options2[0] === tosquaremile) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromsquaremile && options2[0] === tosquareyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMileToSquareYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3.098e+6`;
          } else if (options1[0] === fromsquaremile && options2[0] === tosquarefoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMileToSquareFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 2.788e+7`;
          } else if (options1[0] === fromsquaremile && options2[0] === tosquareinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareMileToSquareInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 4.014e+9`;
          } else if (options1[0] === fromsquareyard && options2[0] === tosquaremeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareYardToSquareMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1.196`;
          } else if (options1[0] === fromsquareyard && options2[0] === tosquarekilometer) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareYardToSquareKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1.196e+6`;
          } else if (options1[0] === fromsquareyard && options2[0] === tohectare) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareYardToHectare(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 11960`;
          } else if (options1[0] === fromsquareyard && options2[0] === toacre) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareYardToAcre(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 4840`;
          } else if (options1[0] === fromsquareyard && options2[0] === tosquaremile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareYardToSquareMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3.098e+6`;
          } else if (options1[0] === fromsquareyard && options2[0] === tosquareyard) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromsquareyard && options2[0] === tosquarefoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareYardToSquareFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 9`;
          } else if (options1[0] === fromsquareyard && options2[0] === tosquareinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareYardToSquareInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1296`;
          } else if (options1[0] === fromsquarefoot && options2[0] === tosquaremeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareFootToSquareMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 10.764`;
          } else if (options1[0] === fromsquarefoot && options2[0] === tosquarekilometer) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareFootToSquareKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1.076e+7`;
          } else if (options1[0] === fromsquarefoot && options2[0] === tohectare) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareFootToHectare(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 107639`;
          } else if (options1[0] === fromsquarefoot && options2[0] === toacre) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareFootToAcre(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 43560`;
          } else if (options1[0] === fromsquarefoot && options2[0] === tosquaremile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareFootToSquareMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 2.788e+7`;
          } else if (options1[0] === fromsquarefoot && options2[0] === tosquareyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareFootToSquareYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 9`;
          } else if (options1[0] === fromsquarefoot && options2[0] === tosquarefoot) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromsquarefoot && options2[0] === tosquareinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareFootToSquareInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 144`;
          } else if (options1[0] === fromsquareinch && options2[0] === tosquaremeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareInchToSquareMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1550`;
          } else if (options1[0] === fromsquareinch && options2[0] === tosquarekilometer) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareInchToSquareKilometer(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1.55e+9`;
          } else if (options1[0] === fromsquareinch && options2[0] === tohectare) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareInchToHectare(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1.55e+7`;
          } else if (options1[0] === fromsquareinch && options2[0] === toacre) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareInchToAcre(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 6.273e+6`;
          } else if (options1[0] === fromsquareinch && options2[0] === tosquaremile) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareInchToSquareMile(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 4.014e+9`;
          } else if (options1[0] === fromsquareinch && options2[0] === tosquareyard) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareInchToSquareYard(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1296`;
          } else if (options1[0] === fromsquareinch && options2[0] === tosquarefoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.squareInchToSquareFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 144`;
          } else if (options1[0] === fromsquareinch && options2[0] === tosquareinch) {
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
