'use strict';

import * as calc from './calculations.js';

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
          if (options1[0] === frommillisecond && options2[0] === tomillisecond) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === frommillisecond && options2[0] === tosecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.millisecondToSecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === frommillisecond && options2[0] === tominute) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.millisecondToMinute(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 60000`;
          } else if (options1[0] === frommillisecond && options2[0] === tohour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.millisecondToHour(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 3.6e+6`;
          } else if (options1[0] === frommillisecond && options2[0] === today) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.millisecondToDay(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 8.64e+7`;
          } else if (options1[0] === frommillisecond && options2[0] === toweek) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.millisecondToDay(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 6.048e+8`;
          } else if (options1[0] === frommillisecond && options2[0] === tomonth) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.millisecondToMonth(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.628e+9`;
          } else if (options1[0] === frommillisecond && options2[0] === toyear) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.millisecondToYear(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3.154e+10`;
          } else if (options1[0] === fromsecond && options2[0] === tomillisecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.secondToMillisecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1000`;
          } else if (options1[0] === fromsecond && options2[0] === tosecond) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromsecond && options2[0] === tominute) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.secondToMinute(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 60`;
          } else if (options1[0] === fromsecond && options2[0] === tohour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.secondToHour(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 3600`;
          } else if (options1[0] === fromsecond && options2[0] === today) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.secondToDay(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 86400`;
          } else if (options1[0] === fromsecond && options2[0] === toweek) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.secondToWeek(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 604800`;
          } else if (options1[0] === fromsecond && options2[0] === tomonth) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.secondToMonth(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 2.628e+6`;
          } else if (options1[0] === fromsecond && options2[0] === toyear) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.secondToYear(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 3.154e+7`;
          } else if (options1[0] === fromminute && options2[0] === tomillisecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.minuteToMillisecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 60000`;
          } else if (options1[0] === fromminute && options2[0] === tosecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.minuteToSecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 60`;
          } else if (options1[0] === fromminute && options2[0] === tominute) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromminute && options2[0] === tohour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.minuteToHour(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 60`;
          } else if (options1[0] === fromminute && options2[0] === today) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.minuteToDay(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 1440`;
          } else if (options1[0] === fromminute && options2[0] === toweek) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.minuteToWeek(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 10080`;
          } else if (options1[0] === fromminute && options2[0] === tomonth) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.minuteToMonth(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 43800`;
          } else if (options1[0] === fromminute && options2[0] === toyear) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.minuteToYear(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 525600`;
          } else if (options1[0] === fromhour && options2[0] === tomillisecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hourToMillisecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 3.6e+6`;
          } else if (options1[0] === fromhour && options2[0] === tosecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hourToSecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 3600`;
          } else if (options1[0] === fromhour && options2[0] === tominute) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hourToMinute(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 60`;
          } else if (options1[0] === fromhour && options2[0] === tohour) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromhour && options2[0] === today) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hourToDay(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 24`;
          } else if (options1[0] === fromhour && options2[0] === toweek) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hourToWeek(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 168`;
          } else if (options1[0] === fromhour && options2[0] === tomonth) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hourToMonth(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 730`;
          } else if (options1[0] === fromhour && options2[0] === toyear) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.hourToYear(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 8760`;
          } else if (options1[0] === fromday && options2[0] === tomillisecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.dayToMillisecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 8.64e+7`;
          } else if (options1[0] === fromday && options2[0] === tosecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.dayToSecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 86400`;
          } else if (options1[0] === fromday && options2[0] === tominute) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.dayToMinute(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 1440`;
          } else if (options1[0] === fromday && options2[0] === tohour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.dayToHour(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 24`;
          } else if (options1[0] === fromday && options2[0] === today) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromday && options2[0] === toweek) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.dayToWeek(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 7`;
          } else if (options1[0] === fromday && options2[0] === tomonth) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.dayToMonth(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 30.417`;
          } else if (options1[0] === fromday && options2[0] === toyear) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.dayToYear(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 365`;
          } else if (options1[0] === fromweek && options2[0] === tomillisecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.weekToMillisecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 6.048e+8`;
          } else if (options1[0] === fromweek && options2[0] === tosecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.weekToSecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 604800`;
          } else if (options1[0] === fromweek && options2[0] === tominute) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.weekToMinute(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 10080`;
          } else if (options1[0] === fromweek && options2[0] === tohour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.weekToHour(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 168`;
          } else if (options1[0] === fromweek && options2[0] === today) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.weekToDay(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 7`;
          } else if (options1[0] === fromweek && options2[0] === toweek) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === fromweek && options2[0] === tomonth) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.weekToMonth(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 4.345`;
          } else if (options1[0] === fromweek && options2[0] === toyear) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.weekToYear(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, divide ${input} ${options1[0].textContent} by 52.143`;
          } else if (options1[0] === frommonth && options2[0] === tomillisecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.monthToMillisecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.628e+9`;
          } else if (options1[0] === frommonth && options2[0] === tosecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.monthToSecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 2.628e+6`;
          } else if (options1[0] === frommonth && options2[0] === tominute) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.monthToMinute(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 43800`;
          } else if (options1[0] === frommonth && options2[0] === tohour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.monthToHour(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 730`;
          } else if (options1[0] === frommonth && options2[0] === today) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.monthToDay(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 30.417`;
          } else if (options1[0] === frommonth && options2[0] === toweek) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.monthToWeek(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 4.345`;
          } else if (options1[0] === frommonth && options2[0] === tomonth) {
            output = `You are converting ${options1[0].textContent} to ${options2[0].textContent}. Please change one of the units to get the result.`;
            conversionResult.textContent = output;
            formulaResult.textContent = '';
          } else if (options1[0] === frommonth && options2[0] === toyear) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.monthToYear(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: divide ${input} ${options1[0].textContent} by 12`;
          } else if (options1[0] === fromyear && options2[0] === tomillisecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yearToMillisecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3.154e+10`;
          } else if (options1[0] === fromyear && options2[0] === tosecond) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yearToSecond(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: for an approximate result, multiply ${input} ${options1[0].textContent} by 3.154e+7`;
          } else if (options1[0] === fromyear && options2[0] === tominute) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yearToMinute(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 525600`;
          } else if (options1[0] === fromyear && options2[0] === tohour) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yearToHour(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 8760`;
          } else if (options1[0] === fromyear && options2[0] === today) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yearToDay(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 365`;
          } else if (options1[0] === fromyear && options2[0] === tomonth) {
            output =
              `${input} ` +
              `${options1[0].textContent}` +
              ' = ' +
              calc.yearToMonth(input) +
              ` ${options2[0].textContent}`;
            conversionResult.textContent = output;
            formulaResult.textContent = `Formula: multiply ${input} ${options1[0].textContent} by 12`;
          } else if (options1[0] === fromyear && options2[0] === toyear) {
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
