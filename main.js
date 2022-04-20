import * as calc from './functions.js';

('use strict');

//GENERAL VARIABLES
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

//TEMPERATURE CONVERTER
const fromcelsius = document.querySelector('.fromcelsius');
const fromkelvin = document.querySelector('.fromkelvin');
const fromfahrenheit = document.querySelector('.fromfahrenheit');

const tocelsius = document.querySelector('.tocelsius');
const tokelvin = document.querySelector('.tokelvin');
const tofahrenheit = document.querySelector('.tofahrenheit');

//AREA CONVERTER
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

//VOLUME CONVERTER
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

//WEIGHT CONVERTER
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

//TIME CONVERTER
const frommillisecond = document.querySelector('.frommillisecond');
const fromsecond = document.querySelector('.fromsecond');
const fromminute = document.querySelector('.fromminute');
const fromhour = document.querySelector('.fromhour');
const fromday = document.querySelector('.fromday');
const fromweek = document.querySelector('.fromweek');
const frommonth = document.querySelector('.frommonth');
const fromyear = document.querySelector('.fromyear');

const tomillisecond = document.querySelector('.tomillisecond');
const tosecond = document.querySelector('.tosecond');
const tominute = document.querySelector('.tominute');
const tohour = document.querySelector('.tohour');
const today = document.querySelector('.today');
const toweek = document.querySelector('.toweek');
const tomonth = document.querySelector('.tomonth');
const toyear = document.querySelector('.toyear');

//SPEED CONVERTER
const frommeterpersecond = document.querySelector('.frommeterpersecond');
const fromkilometerperhour = document.querySelector('.fromkilometerperhour');
const frommileperhour = document.querySelector('.frommileperhour ');

const tometerpersecond = document.querySelector('.tometerpersecond');
const tokilometerperhour = document.querySelector('.tokilometerperhour');
const tomileperhour = document.querySelector('.tomileperhour ');

//-------------------------------

document.querySelector('.convertBtn').addEventListener('click', function () {
  const input = Number(document.querySelector('.inputUnit').value);
  let options1 = unitsFrom.selectedOptions;
  let options2 = unitsTo.selectedOptions;

  for (let a = 0; a < options1.length; a++) {
    console.log(options1[0]);
    for (let b = 0; b < options2.length; b++) {
      console.log(options2[0]);
      if (options1[0] === frommm && options2[0] === tocm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToCm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: ${input} ${options1[0].textContent} divided by 10 `;
      } else if (options1[0] === frommm && options2[0] === tomm) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === frommm && options2[0] === tom) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToMeter(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: ${input} ${options1[0].textContent} divided by 1000`;
      } else if (options1[0] === frommm && options2[0] === tokm) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.mmToKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: ${input} ${options1[0].textContent} divided by 1e+6`;
      } else if (options1[0] === frommm && options2[0] === tomile) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToMile(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1.609e+6`;
      } else if (options1[0] === frommm && options2[0] === toyard) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToYard(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 914`;
      } else if (options1[0] === frommm && options2[0] === tofoot) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToFoot(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 305`;
      } else if (options1[0] === frommm && options2[0] === toinch) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mmToInch(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 25.4`;
      } else if (options1[0] === fromcm && options2[0] === tomm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToMm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 10`;
      } else if (options1[0] === fromcm && options2[0] === tocm) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromcm && options2[0] === tom) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToMeter(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 100`;
      } else if (options1[0] === fromcm && options2[0] === tokm) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cmToKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 100000`;
      } else if (options1[0] === fromcm && options2[0] === tomile) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToMile(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 160934`;
      } else if (options1[0] === fromcm && options2[0] === toyard) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToYard(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 91.44`;
      } else if (options1[0] === fromcm && options2[0] === tofoot) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToFoot(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 30.48`;
      } else if (options1[0] === fromcm && options2[0] === toinch) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.cmToInch(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.54`;
      } else if (options1[0] === fromm && options2[0] === tomm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.meterToMm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromm && options2[0] === tocm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.meterToCm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 100`;
      } else if (options1[0] === fromm && options2[0] === tom) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromm && options2[0] === tokm) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.meterToKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromm && options2[0] === tomile) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.meterToMile(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1609`;
      } else if (options1[0] === fromm && options2[0] === toyard) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.meterToYard(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1.094`;
      } else if (options1[0] === fromm && options2[0] === tofoot) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.meterToFoot(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3.281`;
      } else if (options1[0] === fromm && options2[0] === toinch) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.meterToInch(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 39.37`;
      } else if (options1[0] === fromkm && options2[0] === tomm) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilometerToMm(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+6`;
      } else if (options1[0] === fromkm && options2[0] === tocm) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilometerToCm(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 100000`;
      } else if (options1[0] === fromkm && options2[0] === tom) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilometerToMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromkm && options2[0] === tokm) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromkm && options2[0] === tomile) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilometerToMile(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1.609`;
      } else if (options1[0] === fromkm && options2[0] === toyard) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilometerToYard(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1094`;
      } else if (options1[0] === fromkm && options2[0] === tofoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilometerToFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3281`;
      } else if (options1[0] === fromkm && options2[0] === toinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilometerToInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 39370`;
      } else if (options1[0] === frommile && options2[0] === tomm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mileToMm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1.609e+6`;
      } else if (options1[0] === frommile && options2[0] === tocm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mileToCm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 160934`;
      } else if (options1[0] === frommile && options2[0] === tom) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mileToMeter(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1609`;
      } else if (options1[0] === frommile && options2[0] === tokm) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.mileToKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1.609`;
      } else if (options1[0] === frommile && options2[0] === tomile) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === frommile && options2[0] === toyard) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mileToYard(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1760`;
      } else if (options1[0] === frommile && options2[0] === tofoot) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mileToFoot(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 5280`;
      } else if (options1[0] === frommile && options2[0] === toinch) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.mileToInch(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 63360`;
      } else if (options1[0] === fromyard && options2[0] === tomm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yardToMm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 914`;
      } else if (options1[0] === fromyard && options2[0] === tocm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yardToCm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 91.44`;
      } else if (options1[0] === fromyard && options2[0] === tom) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yardToMeter(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1.094`;
      } else if (options1[0] === fromyard && options2[0] === tokm) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.yardToKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1094`;
      } else if (options1[0] === fromyard && options2[0] === tomile) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yardToMile(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1760`;
      } else if (options1[0] === fromyard && options2[0] === toyard) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromyard && options2[0] === tofoot) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yardToFoot(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 3`;
      } else if (options1[0] === fromyard && options2[0] === toinch) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yardToInch(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 36`;
      } else if (options1[0] === fromfoot && options2[0] === tomm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.footToMm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 305`;
      } else if (options1[0] === fromfoot && options2[0] === tocm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.footToCm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 30.48`;
      } else if (options1[0] === fromfoot && options2[0] === tom) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.footToMeter(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3.281`;
      } else if (options1[0] === fromfoot && options2[0] === tokm) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.footToKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3281`;
      } else if (options1[0] === fromfoot && options2[0] === tomile) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.footToMile(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 5280`;
      } else if (options1[0] === fromfoot && options2[0] === toyard) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.footToYard(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 3`;
      } else if (options1[0] === fromfoot && options2[0] === tofoot) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromfoot && options2[0] === toinch) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.footToInch(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 12`;
      } else if (options1[0] === frominch && options2[0] === tomm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.inchToMm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 25.4`;
      } else if (options1[0] === frominch && options2[0] === tocm) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.inchToCm(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.54`;
      } else if (options1[0] === frominch && options2[0] === tom) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.inchToMeter(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 39.37`;
      } else if (options1[0] === frominch && options2[0] === tokm) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.inchToKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result,  divide ${input} ${options1[0].textContent} by 39370.37`;
      } else if (options1[0] === frominch && options2[0] === tomile) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.inchToMile(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 63360`;
      } else if (options1[0] === frominch && options2[0] === toyard) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.inchToYard(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 36`;
      } else if (options1[0] === frominch && options2[0] === tofoot) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.inchToFoot(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 12`;
      } else if (options1[0] === frominch && options2[0] === toinch) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';

        //......................................
        //TEMPERATURE CONVERTER
      } else if (options1[0] === fromcelsius && options2[0] === tokelvin) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.celsiusToKelvin(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: ${input} ${options1[0].textContent} + 273.15 `;
      } else if (options1[0] === fromcelsius && options2[0] === tofahrenheit) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.celsiusToFahrenheit(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: (${input} ${options1[0].textContent} × 9/5) + 32 `;
      } else if (options1[0] === fromcelsius && options2[0] === tocelsius) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromkelvin && options2[0] === tocelsius) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kelvinToCelsius(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: ${input} ${options1[0].textContent} - 273.15 `;
      } else if (options1[0] === fromkelvin && options2[0] === tokelvin) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromkelvin && options2[0] === tofahrenheit) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kelvinToFahrenheit(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: (${input} ${options1[0].textContent} - 273.15) × 9/5 + 32 `;
      } else if (options1[0] === fromfahrenheit && options2[0] === tocelsius) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.fahrenheitToCelsius(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: (${input} ${options1[0].textContent} - 32) × 5/9 `;
      } else if (options1[0] === fromfahrenheit && options2[0] === tokelvin) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.fahrenheitToKelvin(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: (${input} ${options1[0].textContent} - 32) × 5/9 + 273.15 `;
      } else if (options1[0] === fromfahrenheit && options2[0] === tofahrenheit) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';

        //AREA CONVERTER
        //..............................................
      } else if (options1[0] === fromsquaremeter && options2[0] === tosquaremeter) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromsquaremeter && options2[0] === tosquarekilometer) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMeterToSquareKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1e+6 `;
      } else if (options1[0] === fromsquaremeter && options2[0] === tohectare) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMeterToHectare(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 10000 `;
      } else if (options1[0] === fromsquaremeter && options2[0] === toacre) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMeterToAcre(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 4047 `;
      } else if (options1[0] === fromsquaremeter && options2[0] === tosquaremile) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMeterToSquareMile(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.59e+6 `;
      } else if (options1[0] === fromsquaremeter && options2[0] === tosquareyard) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMeterToSquareYard(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1.196 `;
      } else if (options1[0] === fromsquaremeter && options2[0] === tosquarefoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMeterToSquareFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 10.764`;
      } else if (options1[0] === fromsquaremeter && options2[0] === tosquareinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMeterToSquareInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1550`;
      } else if (options1[0] === fromsquarekilometer && options2[0] === tosquaremeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareKilometerToSquareMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+6`;
      } else if (options1[0] === fromsquarekilometer && options2[0] === tosquarekilometer) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromsquarekilometer && options2[0] === tohectare) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareKilometerToHectare(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 100`;
      } else if (options1[0] === fromsquarekilometer && options2[0] === toacre) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareKilometerToAcre(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 247`;
      } else if (options1[0] === fromsquarekilometer && options2[0] === tosquaremile) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareKilometerToSquareMile(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.59`;
      } else if (options1[0] === fromsquarekilometer && options2[0] === tosquareyard) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareKilometerToSquareYard(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1.196e+6`;
      } else if (options1[0] === fromsquarekilometer && options2[0] === tosquarefoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareKilometerToSquareFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1.076e+7`;
      } else if (options1[0] === fromsquarekilometer && options2[0] === tosquareinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareKilometerToSquareInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1.55e+9`;
      } else if (options1[0] === fromhectare && options2[0] === tosquaremeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.hectareToSquareMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 10000`;
      } else if (options1[0] === fromhectare && options2[0] === tosquarekilometer) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.hectareToSquareKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 100`;
      } else if (options1[0] === fromhectare && options2[0] === tohectare) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromhectare && options2[0] === toacre) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.hectareToAcre(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.471`;
      } else if (options1[0] === fromhectare && options2[0] === tosquaremile) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.hectareToSquareMile(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 259`;
      } else if (options1[0] === fromhectare && options2[0] === tosquareyard) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.hectareToSquareYard(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 11960`;
      } else if (options1[0] === fromhectare && options2[0] === tosquarefoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.hectareToSquareFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 107639`;
      } else if (options1[0] === fromhectare && options2[0] === tosquareinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.hectareToSquareInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1.55e+7`;
      } else if (options1[0] === fromacre && options2[0] === tosquaremeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.acreToSquareMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 4047`;
      } else if (options1[0] === fromacre && options2[0] === tosquarekilometer) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.acreToSquareKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 247`;
      } else if (options1[0] === fromacre && options2[0] === tohectare) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.acreToHectare(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.471`;
      } else if (options1[0] === fromacre && options2[0] === toacre) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromacre && options2[0] === tosquaremile) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.acreToSquareMile(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 640`;
      } else if (options1[0] === fromacre && options2[0] === tosquareyard) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.acreToSquareYard(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 4840`;
      } else if (options1[0] === fromacre && options2[0] === tosquarefoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.acreToSquareFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 43560`;
      } else if (options1[0] === fromacre && options2[0] === tosquareinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.acreToSquareInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 6.273e+6`;
      } else if (options1[0] === fromsquaremile && options2[0] === tosquaremeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMileToSquareMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.59e+6`;
      } else if (options1[0] === fromsquaremile && options2[0] === tosquarekilometer) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMileToSquareKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.59`;
      } else if (options1[0] === fromsquaremile && options2[0] === tohectare) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMileToHectare(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 259`;
      } else if (options1[0] === fromsquaremile && options2[0] === toacre) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMileToAcre(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 640`;
      } else if (options1[0] === fromsquaremile && options2[0] === tosquaremile) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromsquaremile && options2[0] === tosquareyard) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMileToSquareYard(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3.098e+6`;
      } else if (options1[0] === fromsquaremile && options2[0] === tosquarefoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMileToSquareFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 2.788e+7`;
      } else if (options1[0] === fromsquaremile && options2[0] === tosquareinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareMileToSquareInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 4.014e+9`;
      } else if (options1[0] === fromsquareyard && options2[0] === tosquaremeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareYardToSquareMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1.196`;
      } else if (options1[0] === fromsquareyard && options2[0] === tosquarekilometer) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareYardToSquareKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 1.196e+6`;
      } else if (options1[0] === fromsquareyard && options2[0] === tohectare) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareYardToHectare(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 11960`;
      } else if (options1[0] === fromsquareyard && options2[0] === toacre) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareYardToAcre(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 4840`;
      } else if (options1[0] === fromsquareyard && options2[0] === tosquaremile) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareYardToSquareMile(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3.098e+6`;
      } else if (options1[0] === fromsquareyard && options2[0] === tosquareyard) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromsquareyard && options2[0] === tosquarefoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareYardToSquareFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 9`;
      } else if (options1[0] === fromsquareyard && options2[0] === tosquareinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareYardToSquareInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1296`;
      } else if (options1[0] === fromsquarefoot && options2[0] === tosquaremeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareFootToSquareMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 10.764`;
      } else if (options1[0] === fromsquarefoot && options2[0] === tosquarekilometer) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareFootToSquareKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1.076e+7`;
      } else if (options1[0] === fromsquarefoot && options2[0] === tohectare) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareFootToHectare(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 107639`;
      } else if (options1[0] === fromsquarefoot && options2[0] === toacre) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareFootToAcre(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 43560`;
      } else if (options1[0] === fromsquarefoot && options2[0] === tosquaremile) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareFootToSquareMile(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 2.788e+7`;
      } else if (options1[0] === fromsquarefoot && options2[0] === tosquareyard) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareFootToSquareYard(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 9`;
      } else if (options1[0] === fromsquarefoot && options2[0] === tosquarefoot) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromsquarefoot && options2[0] === tosquareinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareFootToSquareInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 144`;
      } else if (options1[0] === fromsquareinch && options2[0] === tosquaremeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareInchToSquareMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1550`;
      } else if (options1[0] === fromsquareinch && options2[0] === tosquarekilometer) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareInchToSquareKilometer(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 1.55e+9`;
      } else if (options1[0] === fromsquareinch && options2[0] === tohectare) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareInchToHectare(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 1.55e+7`;
      } else if (options1[0] === fromsquareinch && options2[0] === toacre) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareInchToAcre(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 6.273e+6`;
      } else if (options1[0] === fromsquareinch && options2[0] === tosquaremile) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareInchToSquareMile(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 4.014e+9`;
      } else if (options1[0] === fromsquareinch && options2[0] === tosquareyard) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareInchToSquareYard(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1296`;
      } else if (options1[0] === fromsquareinch && options2[0] === tosquarefoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.squareInchToSquareFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 144`;
      } else if (options1[0] === fromsquareinch && options2[0] === tosquareinch) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';

        //VOLUME CONVERTER
        //..............................................
      } else if (options1[0] === fromcubicmeter && options2[0] === tocubicmeter) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromcubicmeter && options2[0] === tocubicfoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicMeterToCubicFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 35.315`;
      } else if (options1[0] === fromcubicmeter && options2[0] === tocubicinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicMeterToCubicInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 61024`;
      } else if (options1[0] === fromcubicmeter && options2[0] === toliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicMeterToLiter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromcubicmeter && options2[0] === tomilliliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicMeterToMilliliter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+6`;
      } else if (options1[0] === fromcubicmeter && options2[0] === toimperialgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicMeterToImperialGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 220`;
      } else if (options1[0] === fromcubicmeter && options2[0] === tousliquidgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicMeterToUsLiquidGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 264`;
      } else if (options1[0] === fromcubicfoot && options2[0] === tocubicmeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicFootToCubicMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 35.315`;
      } else if (options1[0] === fromcubicfoot && options2[0] === tocubicfoot) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromcubicfoot && options2[0] === tocubicinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicFootToCubicInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1728`;
      } else if (options1[0] === fromcubicfoot && options2[0] === toliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicFootToLiter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 28.317`;
      } else if (options1[0] === fromcubicfoot && options2[0] === tomilliliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicFootToMilliliter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 28317`;
      } else if (options1[0] === fromcubicfoot && options2[0] === toimperialgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicFootToImperialGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 6.229`;
      } else if (options1[0] === fromcubicfoot && options2[0] === tousliquidgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicFootToUsLiquidGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 7.481`;
      } else if (options1[0] === fromcubicinch && options2[0] === tocubicmeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicInchToCubicMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 61024`;
      } else if (options1[0] === fromcubicinch && options2[0] === tocubicfoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicInchToCubicFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1728`;
      } else if (options1[0] === fromcubicinch && options2[0] === tocubicinch) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromcubicinch && options2[0] === toliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicInchToLiter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 61.024`;
      } else if (options1[0] === fromcubicinch && options2[0] === tomilliliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicInchToMilliliter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 16.387`;
      } else if (options1[0] === fromcubicinch && options2[0] === toimperialgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicInchToImperialGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 277`;
      } else if (options1[0] === fromcubicinch && options2[0] === tousliquidgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.cubicInchToUsLiquidGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 231`;
      } else if (options1[0] === fromliter && options2[0] === tocubicmeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.literToCubicMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromliter && options2[0] === tocubicfoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.literToCubicFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 28.317`;
      } else if (options1[0] === fromliter && options2[0] === tocubicinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.literToCubicInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 61.024`;
      } else if (options1[0] === fromliter && options2[0] === toliter) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromliter && options2[0] === tomilliliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.literToMilliliter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromliter && options2[0] === toimperialgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.literToImperialGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 4.546`;
      } else if (options1[0] === fromliter && options2[0] === tousliquidgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.literToUsLiquidGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3.785`;
      } else if (options1[0] === frommilliliter && options2[0] === tocubicmeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milliliterToCubicMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1e+6`;
      } else if (options1[0] === frommilliliter && options2[0] === tocubicfoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milliliterToCubicFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 28317`;
      } else if (options1[0] === frommilliliter && options2[0] === tocubicinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milliliterToCubicInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 16.387`;
      } else if (options1[0] === frommilliliter && options2[0] === toliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milliliterToLiter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === frommilliliter && options2[0] === tomilliliter) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === frommilliliter && options2[0] === toimperialgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milliliterToImperialGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 4546`;
      } else if (options1[0] === frommilliliter && options2[0] === tousliquidgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milliliterToUsLiquidGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3785`;
      } else if (options1[0] === fromimperialgallon && options2[0] === tocubicmeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.imperialGallonToCubicMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 220`;
      } else if (options1[0] === fromimperialgallon && options2[0] === tocubicfoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.imperialGallonToCubicFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 6.229`;
      } else if (options1[0] === fromimperialgallon && options2[0] === tocubicinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.imperialGallonToCubicInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 277`;
      } else if (options1[0] === fromimperialgallon && options2[0] === toliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.imperialGallonToLiter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 4.546`;
      } else if (options1[0] === fromimperialgallon && options2[0] === tomilliliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.imperialGallonToMilliliter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 4546`;
      } else if (options1[0] === fromimperialgallon && options2[0] === toimperialgallon) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromimperialgallon && options2[0] === tousliquidgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.imperialGallonToUsLiquidGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1.201`;
      } else if (options1[0] === fromusliquidgallon && options2[0] === tocubicmeter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.usLiquidGallonToCubicMeter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 264`;
      } else if (options1[0] === fromusliquidgallon && options2[0] === tocubicfoot) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.usLiquidGallonToCubicFoot(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 7.481`;
      } else if (options1[0] === fromusliquidgallon && options2[0] === tocubicinch) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.usLiquidGallonToCubicInch(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 231`;
      } else if (options1[0] === fromusliquidgallon && options2[0] === toliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.usLiquidGallonToLiter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3.785`;
      } else if (options1[0] === fromusliquidgallon && options2[0] === tomilliliter) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.usLiquidGallonToMilliliter(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3785`;
      } else if (options1[0] === fromusliquidgallon && options2[0] === toimperialgallon) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.usLiquidGallonToImperialGallon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1.201`;
      } else if (options1[0] === fromusliquidgallon && options2[0] === tousliquidgallon) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';

        //WEIGHT CONVERTER
        //..............................................
      } else if (options1[0] === frommilligram && options2[0] === togram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milligramToGram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === frommilligram && options2[0] === tokilogram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milligramToKilogram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1e+6`;
      } else if (options1[0] === frommilligram && options2[0] === tometricton) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milligramToMetricTon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1e+9`;
      } else if (options1[0] === frommilligram && options2[0] === topound) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milligramToPound(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 453592`;
      } else if (options1[0] === frommilligram && options2[0] === toounce) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milligramToOunce(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 28350`;
      } else if (options1[0] === frommilligram && options2[0] === tocarat) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milligramToCarat(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 200`;
      } else if (options1[0] === frommilligram && options2[0] === tomilligram) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromgram && options2[0] === tomilligram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.gramToMilligram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromgram && options2[0] === togram) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromgram && options2[0] === tokilogram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.gramToKilogram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromgram && options2[0] === tometricton) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.gramToMetricTon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1e+6`;
      } else if (options1[0] === fromgram && options2[0] === topound) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.gramToPound(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 454`;
      } else if (options1[0] === fromgram && options2[0] === toounce) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.gramToOunce(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 28.35`;
      } else if (options1[0] === fromgram && options2[0] === tocarat) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.gramToCarat(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 5`;
      } else if (options1[0] === fromkilogram && options2[0] === tomilligram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilogramToMilligram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+6`;
      } else if (options1[0] === fromkilogram && options2[0] === togram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilogramToGram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromkilogram && options2[0] === tokilogram) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromkilogram && options2[0] === tometricton) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilogramToMetricTon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromkilogram && options2[0] === topound) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilogramToPound(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 2.205`;
      } else if (options1[0] === fromkilogram && options2[0] === toounce) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilogramToOunce(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 35.274`;
      } else if (options1[0] === fromkilogram && options2[0] === tocarat) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilogramToCarat(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 5000`;
      } else if (options1[0] === frommetricton && options2[0] === tomilligram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.metricTonToMilligram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+9`;
      } else if (options1[0] === frommetricton && options2[0] === togram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.metricTonToGram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1e+6`;
      } else if (options1[0] === frommetricton && options2[0] === tokilogram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.metricTonToKilogram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === frommetricton && options2[0] === tometricton) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === frommetricton && options2[0] === topound) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.metricTonToPound(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 2205`;
      } else if (options1[0] === frommetricton && options2[0] === toounce) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.metricTonToOunce(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 35274`;
      } else if (options1[0] === frommetricton && options2[0] === tocarat) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.metricTonToCarat(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 5e+6`;
      } else if (options1[0] === frompound && options2[0] === tomilligram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.poundToMilligram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 453592`;
      } else if (options1[0] === frompound && options2[0] === togram) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.poundToGram(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 454`;
      } else if (options1[0] === frompound && options2[0] === tokilogram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.poundToKilogram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 2.205`;
      } else if (options1[0] === frompound && options2[0] === tometricton) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.poundToMetricTon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 2205`;
      } else if (options1[0] === frompound && options2[0] === topound) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === frompound && options2[0] === toounce) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.poundToOunce(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 16`;
      } else if (options1[0] === frompound && options2[0] === tocarat) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.poundToCarat(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 2268`;
      } else if (options1[0] === fromounce && options2[0] === tomilligram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.ounceToMilligram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 28350`;
      } else if (options1[0] === fromounce && options2[0] === togram) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.ounceToGram(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 28.35`;
      } else if (options1[0] === fromounce && options2[0] === tokilogram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.ounceToKilogram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 35.274`;
      } else if (options1[0] === fromounce && options2[0] === tometricton) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.ounceToMetricTon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 35274`;
      } else if (options1[0] === fromounce && options2[0] === topound) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.ounceToPound(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 16`;
      } else if (options1[0] === fromounce && options2[0] === tocarat) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.ounceToCarat(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 142`;
      } else if (options1[0] === fromounce && options2[0] === toounce) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromcarat && options2[0] === tomilligram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.caratToMilligram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 200`;
      } else if (options1[0] === fromcarat && options2[0] === togram) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.caratToGram(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 5`;
      } else if (options1[0] === fromcarat && options2[0] === tokilogram) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.caratToKilogram(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 5000`;
      } else if (options1[0] === fromcarat && options2[0] === tometricton) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.caratToMetricTon(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 5e+6`;
      } else if (options1[0] === fromcarat && options2[0] === topound) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.caratToPound(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 2268`;
      } else if (options1[0] === fromcarat && options2[0] === toounce) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.caratToOunce(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 142`;
      } else if (options1[0] === fromcarat && options2[0] === tocarat) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';

        //TIME CONVERTER
        //..............................................
      } else if (options1[0] === frommillisecond && options2[0] === tomillisecond) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === frommillisecond && options2[0] === tosecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.millisecondToSecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === frommillisecond && options2[0] === tominute) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.millisecondToMinute(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 60000`;
      } else if (options1[0] === frommillisecond && options2[0] === tohour) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.millisecondToHour(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 3.6e+6`;
      } else if (options1[0] === frommillisecond && options2[0] === today) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.millisecondToDay(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 8.64e+7`;
      } else if (options1[0] === frommillisecond && options2[0] === toweek) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.millisecondToDay(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 6.048e+8`;
      } else if (options1[0] === frommillisecond && options2[0] === tomonth) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.millisecondToMonth(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.628e+9`;
      } else if (options1[0] === frommillisecond && options2[0] === toyear) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.millisecondToYear(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3.154e+10`;
      } else if (options1[0] === fromsecond && options2[0] === tomillisecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.secondToMillisecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
      } else if (options1[0] === fromsecond && options2[0] === tosecond) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromsecond && options2[0] === tominute) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.secondToMinute(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 60`;
      } else if (options1[0] === fromsecond && options2[0] === tohour) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.secondToHour(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 3600`;
      } else if (options1[0] === fromsecond && options2[0] === today) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.secondToDay(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 86400`;
      } else if (options1[0] === fromsecond && options2[0] === toweek) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.secondToWeek(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 604800`;
      } else if (options1[0] === fromsecond && options2[0] === tomonth) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.secondToMonth(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.628e+6`;
      } else if (options1[0] === fromsecond && options2[0] === toyear) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.secondToYear(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3.154e+7`;
      } else if (options1[0] === fromminute && options2[0] === tomillisecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.minuteToMillisecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 60000`;
      } else if (options1[0] === fromminute && options2[0] === tosecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.minuteToSecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 60`;
      } else if (options1[0] === fromminute && options2[0] === tominute) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromminute && options2[0] === tohour) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.minuteToHour(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 60`;
      } else if (options1[0] === fromminute && options2[0] === today) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.minuteToDay(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 1440`;
      } else if (options1[0] === fromminute && options2[0] === toweek) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.minuteToWeek(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 10080`;
      } else if (options1[0] === fromminute && options2[0] === tomonth) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.minuteToMonth(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 43800`;
      } else if (options1[0] === fromminute && options2[0] === toyear) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.minuteToYear(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: divide ${input} ${options1[0].textContent} by 525600`;
      } else if (options1[0] === fromhour && options2[0] === tomillisecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.hourToMillisecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 3.6e+6`;
      } else if (options1[0] === fromhour && options2[0] === tosecond) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.hourToSecond(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 3600`;
      } else if (options1[0] === fromhour && options2[0] === tominute) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.hourToMinute(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 60`;
      } else if (options1[0] === fromhour && options2[0] === tohour) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromhour && options2[0] === today) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.hourToDay(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 24`;
      } else if (options1[0] === fromhour && options2[0] === toweek) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.hourToWeek(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 168`;
      } else if (options1[0] === fromhour && options2[0] === tomonth) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.hourToMonth(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 730`;
      } else if (options1[0] === fromhour && options2[0] === toyear) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.hourToYear(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 8760`;
      } else if (options1[0] === fromday && options2[0] === tomillisecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.dayToMillisecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 8.64e+7`;
      } else if (options1[0] === fromday && options2[0] === tosecond) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.dayToSecond(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 86400`;
      } else if (options1[0] === fromday && options2[0] === tominute) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.dayToMinute(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1440`;
      } else if (options1[0] === fromday && options2[0] === tohour) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.dayToHour(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 24`;
      } else if (options1[0] === fromday && options2[0] === today) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromday && options2[0] === toweek) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.dayToWeek(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 7`;
      } else if (options1[0] === fromday && options2[0] === tomonth) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.dayToMonth(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 30.417`;
      } else if (options1[0] === fromday && options2[0] === toyear) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.dayToYear(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 365`;
      } else if (options1[0] === fromweek && options2[0] === tomillisecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.weekToMillisecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 6.048e+8`;
      } else if (options1[0] === fromweek && options2[0] === tosecond) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.weekToSecond(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 604800`;
      } else if (options1[0] === fromweek && options2[0] === tominute) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.weekToMinute(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 10080`;
      } else if (options1[0] === fromweek && options2[0] === tohour) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.weekToHour(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 168`;
      } else if (options1[0] === fromweek && options2[0] === today) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.weekToDay(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 7`;
      } else if (options1[0] === fromweek && options2[0] === toweek) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromweek && options2[0] === tomonth) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.weekToMonth(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 4.345`;
      } else if (options1[0] === fromweek && options2[0] === toyear) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.weekToYear(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 52.143`;
      } else if (options1[0] === frommonth && options2[0] === tomillisecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.monthToMillisecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.628e+9`;
      } else if (options1[0] === frommonth && options2[0] === tosecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.monthToSecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.628e+6`;
      } else if (options1[0] === frommonth && options2[0] === tominute) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.monthToMinute(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 43800`;
      } else if (options1[0] === frommonth && options2[0] === tohour) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.monthToHour(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 730`;
      } else if (options1[0] === frommonth && options2[0] === today) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.monthToDay(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 30.417`;
      } else if (options1[0] === frommonth && options2[0] === toweek) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.monthToWeek(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 4.345`;
      } else if (options1[0] === frommonth && options2[0] === tomonth) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === frommonth && options2[0] === toyear) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.monthToYear(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 12`;
      } else if (options1[0] === fromyear && options2[0] === tomillisecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.yearToMillisecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3.154e+10`;
      } else if (options1[0] === fromyear && options2[0] === tosecond) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yearToSecond(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3.154e+7`;
      } else if (options1[0] === fromyear && options2[0] === tominute) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yearToMinute(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 525600`;
      } else if (options1[0] === fromyear && options2[0] === tohour) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yearToHour(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 8760`;
      } else if (options1[0] === fromyear && options2[0] === today) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yearToDay(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 365`;
      } else if (options1[0] === fromyear && options2[0] === tomonth) {
        output =
          `${input} ` + `${options1[0].textContent}` + ' = ' + calc.yearToMonth(input) + ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 12`;
      } else if (options1[0] === fromyear && options2[0] === toyear) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';

        //SPEED CONVERTER
        //..............................................
      } else if (options1[0] === frommeterpersecond && options2[0] === tometerpersecond) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === frommeterpersecond && options2[0] === tokilometerperhour) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.meterPerSecondToKilometerPerHour(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: multiply ${input} ${options1[0].textContent} by 3.6`;
      } else if (options1[0] === frommeterpersecond && options2[0] === tomileperhour) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.meterPerSecondToMilePerHour(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.237`;
      } else if (options1[0] === fromkilometerperhour && options2[0] === tometerpersecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilometerPerHourToMeterPerSecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 3.6`;
      } else if (options1[0] === fromkilometerperhour && options2[0] === fromkilometerperhour) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      } else if (options1[0] === fromkilometerperhour && options2[0] === tomileperhour) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.kilometerPerHourToMeterPerSecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 1.609`;
      } else if (options1[0] === frommileperhour && options2[0] === tometerpersecond) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milePerHourToMeterPerSecond(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.237`;
      } else if (options1[0] === frommileperhour && options2[0] === tokilometerperhour) {
        output =
          `${input} ` +
          `${options1[0].textContent}` +
          ' = ' +
          calc.milePerHourToKilometerPerHour(input) +
          ` ${options2[0].textContent}`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector(
          '.formula'
        ).textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 1.609`;
      } else if (options1[0] === frommileperhour && options2[0] === tomileperhour) {
        output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
        document.querySelector('.conversionResult').textContent = output;
        document.querySelector('.formula').textContent = '';
      }
    }
  }
});
