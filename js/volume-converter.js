'use strict';

import * as calc from './calculations.js';

const fromcubicmeter = document.querySelector('.fromcubicmeter');
const fromcubicfoot = document.querySelector('.fromcubicfoot');
const fromcubicinch = document.querySelector('.fromcubicinch');
const fromliter = document.querySelector('.fromliter');
const frommilliliter = document.querySelector('.frommilliliter');
const fromimperialgallon = document.querySelector('.fromimperialgallon');
const fromusliquidgallon = document.querySelector('.fromusliquidgallon');

const tocubicmeter = document.querySelector('.tocubicmeter');
const tocubicfoot = document.querySelector('.tocubicfoot');
const tocubicinch = document.querySelector('.tocubicinch');
const toliter = document.querySelector('.toliter');
const tomilliliter = document.querySelector('.tomilliliter');
const toimperialgallon = document.querySelector('.toimperialgallon');
const tousliquidgallon = document.querySelector('.tousliquidgallon');

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
          if (options1[0] === fromcubicmeter && options2[0] === tocubicmeter) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromcubicmeter && options2[0] === tocubicfoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicMeterToCubicFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 35.315`;
          } else if (options1[0] === fromcubicmeter && options2[0] === tocubicinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicMeterToCubicInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 61024`;
          } else if (options1[0] === fromcubicmeter && options2[0] === toliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicMeterToLiter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromcubicmeter && options2[0] === tomilliliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicMeterToMilliliter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+6`;
          } else if (options1[0] === fromcubicmeter && options2[0] === toimperialgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicMeterToImperialGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 220`;
          } else if (options1[0] === fromcubicmeter && options2[0] === tousliquidgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicMeterToUsLiquidGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 264`;
          } else if (options1[0] === fromcubicfoot && options2[0] === tocubicmeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicFootToCubicMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 35.315`;
          } else if (options1[0] === fromcubicfoot && options2[0] === tocubicfoot) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromcubicfoot && options2[0] === tocubicinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicFootToCubicInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1728`;
          } else if (options1[0] === fromcubicfoot && options2[0] === toliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicFootToLiter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 28.317`;
          } else if (options1[0] === fromcubicfoot && options2[0] === tomilliliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicFootToMilliliter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 28317`;
          } else if (options1[0] === fromcubicfoot && options2[0] === toimperialgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicFootToImperialGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 6.229`;
          } else if (options1[0] === fromcubicfoot && options2[0] === tousliquidgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicFootToUsLiquidGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 7.481`;
          } else if (options1[0] === fromcubicinch && options2[0] === tocubicmeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicInchToCubicMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 61024`;
          } else if (options1[0] === fromcubicinch && options2[0] === tocubicfoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicInchToCubicFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1728`;
          } else if (options1[0] === fromcubicinch && options2[0] === tocubicinch) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromcubicinch && options2[0] === toliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicInchToLiter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 61.024`;
          } else if (options1[0] === fromcubicinch && options2[0] === tomilliliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicInchToMilliliter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 16.387`;
          } else if (options1[0] === fromcubicinch && options2[0] === toimperialgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicInchToImperialGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 277`;
          } else if (options1[0] === fromcubicinch && options2[0] === tousliquidgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.cubicInchToUsLiquidGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 231`;
          } else if (options1[0] === fromliter && options2[0] === tocubicmeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.literToCubicMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromliter && options2[0] === tocubicfoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.literToCubicFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 28.317`;
          } else if (options1[0] === fromliter && options2[0] === tocubicinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.literToCubicInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 61.024`;
          } else if (options1[0] === fromliter && options2[0] === toliter) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromliter && options2[0] === tomilliliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.literToMilliliter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromliter && options2[0] === toimperialgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.literToImperialGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 4.546`;
          } else if (options1[0] === fromliter && options2[0] === tousliquidgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.literToUsLiquidGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3.785`;
          } else if (options1[0] === frommilliliter && options2[0] === tocubicmeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milliliterToCubicMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1e+6`;
          } else if (options1[0] === frommilliliter && options2[0] === tocubicfoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milliliterToCubicFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 28317`;
          } else if (options1[0] === frommilliliter && options2[0] === tocubicinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milliliterToCubicInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 16.387`;
          } else if (options1[0] === frommilliliter && options2[0] === toliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milliliterToLiter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === frommilliliter && options2[0] === tomilliliter) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === frommilliliter && options2[0] === toimperialgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milliliterToImperialGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 4546`;
          } else if (options1[0] === frommilliliter && options2[0] === tousliquidgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milliliterToUsLiquidGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3785`;
          } else if (options1[0] === fromimperialgallon && options2[0] === tocubicmeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.imperialGallonToCubicMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 220`;
          } else if (options1[0] === fromimperialgallon && options2[0] === tocubicfoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.imperialGallonToCubicFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 6.229`;
          } else if (options1[0] === fromimperialgallon && options2[0] === tocubicinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.imperialGallonToCubicInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 277`;
          } else if (options1[0] === fromimperialgallon && options2[0] === toliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.imperialGallonToLiter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 4.546`;
          } else if (options1[0] === fromimperialgallon && options2[0] === tomilliliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.imperialGallonToMilliliter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 4546`;
          } else if (options1[0] === fromimperialgallon && options2[0] === toimperialgallon) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromimperialgallon && options2[0] === tousliquidgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.imperialGallonToUsLiquidGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1.201`;
          } else if (options1[0] === fromusliquidgallon && options2[0] === tocubicmeter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.usLiquidGallonToCubicMeter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 264`;
          } else if (options1[0] === fromusliquidgallon && options2[0] === tocubicfoot) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.usLiquidGallonToCubicFoot(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 7.481`;
          } else if (options1[0] === fromusliquidgallon && options2[0] === tocubicinch) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.usLiquidGallonToCubicInch(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 231`;
          } else if (options1[0] === fromusliquidgallon && options2[0] === toliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.usLiquidGallonToLiter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3.785`;
          } else if (options1[0] === fromusliquidgallon && options2[0] === tomilliliter) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.usLiquidGallonToMilliliter(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3785`;
          } else if (options1[0] === fromusliquidgallon && options2[0] === toimperialgallon) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.usLiquidGallonToImperialGallon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1.201`;
          } else if (options1[0] === fromusliquidgallon && options2[0] === tousliquidgallon) {
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
