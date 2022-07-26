'use strict';

import * as calc from './calculations.js';

const fromkilogram = document.querySelector('.fromkg');
const fromgram = document.querySelector('.fromgram');
const frommilligram = document.querySelector('.frommilligram');
const frommetricton = document.querySelector('.frommetricton');
const frompound = document.querySelector('.frompound');
const fromounce = document.querySelector('.fromounce');
const fromcarat = document.querySelector('.fromcarat');

const tokilogram = document.querySelector('.tokg');
const togram = document.querySelector('.togram');
const tomilligram = document.querySelector('.tomilligram');
const tometricton = document.querySelector('.tometricton');
const topound = document.querySelector('.topound');
const toounce = document.querySelector('.toounce');
const tocarat = document.querySelector('.tocarat');

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
          if (options1[0] === frommilligram && options2[0] === togram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milligramToGram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === frommilligram && options2[0] === tokilogram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milligramToKilogram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1e+6`;
          } else if (options1[0] === frommilligram && options2[0] === tometricton) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milligramToMetricTon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1e+9`;
          } else if (options1[0] === frommilligram && options2[0] === topound) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milligramToPound(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 453592`;
          } else if (options1[0] === frommilligram && options2[0] === toounce) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milligramToOunce(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 28350`;
          } else if (options1[0] === frommilligram && options2[0] === tocarat) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.milligramToCarat(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 200`;
          } else if (options1[0] === frommilligram && options2[0] === tomilligram) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromgram && options2[0] === tomilligram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.gramToMilligram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromgram && options2[0] === togram) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromgram && options2[0] === tokilogram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.gramToKilogram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromgram && options2[0] === tometricton) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.gramToMetricTon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1e+6`;
          } else if (options1[0] === fromgram && options2[0] === topound) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.gramToPound(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 454`;
          } else if (options1[0] === fromgram && options2[0] === toounce) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.gramToOunce(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 28.35`;
          } else if (options1[0] === fromgram && options2[0] === tocarat) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.gramToCarat(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 5`;
          } else if (options1[0] === fromkilogram && options2[0] === tomilligram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilogramToMilligram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+6`;
          } else if (options1[0] === fromkilogram && options2[0] === togram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilogramToGram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromkilogram && options2[0] === tokilogram) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromkilogram && options2[0] === tometricton) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilogramToMetricTon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromkilogram && options2[0] === topound) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilogramToPound(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 2.205`;
          } else if (options1[0] === fromkilogram && options2[0] === toounce) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilogramToOunce(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 35.274`;
          } else if (options1[0] === fromkilogram && options2[0] === tocarat) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.kilogramToCarat(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 5000`;
          } else if (options1[0] === frommetricton && options2[0] === tomilligram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.metricTonToMilligram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+9`;
          } else if (options1[0] === frommetricton && options2[0] === togram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.metricTonToGram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+6`;
          } else if (options1[0] === frommetricton && options2[0] === tokilogram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.metricTonToKilogram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === frommetricton && options2[0] === tometricton) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === frommetricton && options2[0] === topound) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.metricTonToPound(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 2205`;
          } else if (options1[0] === frommetricton && options2[0] === toounce) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.metricTonToOunce(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 35274`;
          } else if (options1[0] === frommetricton && options2[0] === tocarat) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.metricTonToCarat(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 5e+6`;
          } else if (options1[0] === frompound && options2[0] === tomilligram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.poundToMilligram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 453592`;
          } else if (options1[0] === frompound && options2[0] === togram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.poundToGram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 454`;
          } else if (options1[0] === frompound && options2[0] === tokilogram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.poundToKilogram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 2.205`;
          } else if (options1[0] === frompound && options2[0] === tometricton) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.poundToMetricTon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 2205`;
          } else if (options1[0] === frompound && options2[0] === topound) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === frompound && options2[0] === toounce) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.poundToOunce(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 16`;
          } else if (options1[0] === frompound && options2[0] === tocarat) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.poundToCarat(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 2268`;
          } else if (options1[0] === fromounce && options2[0] === tomilligram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.ounceToMilligram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 28350`;
          } else if (options1[0] === fromounce && options2[0] === togram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.ounceToGram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 28.35`;
          } else if (options1[0] === fromounce && options2[0] === tokilogram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.ounceToKilogram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 35.274`;
          } else if (options1[0] === fromounce && options2[0] === tometricton) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.ounceToMetricTon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 35274`;
          } else if (options1[0] === fromounce && options2[0] === topound) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.ounceToPound(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 16`;
          } else if (options1[0] === fromounce && options2[0] === tocarat) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.ounceToCarat(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 142`;
          } else if (options1[0] === fromounce && options2[0] === toounce) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromcarat && options2[0] === tomilligram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.caratToMilligram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 200`;
          } else if (options1[0] === fromcarat && options2[0] === togram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.caratToGram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 5`;
          } else if (options1[0] === fromcarat && options2[0] === tokilogram) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.caratToKilogram(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 5000`;
          } else if (options1[0] === fromcarat && options2[0] === tometricton) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.caratToMetricTon(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 5e+6`;
          } else if (options1[0] === fromcarat && options2[0] === topound) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.caratToPound(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 2268`;
          } else if (options1[0] === fromcarat && options2[0] === toounce) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.caratToOunce(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 142`;
          } else if (options1[0] === fromcarat && options2[0] === tocarat) {
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
