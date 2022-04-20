// Decimal numbers are NOT rounded

//---------------------------------------
//LENGTH CONVERTER FUNCTIONS

export const mmToCm = (inputValue) => {
  return inputValue / 10;
};

export const mmToMeter = (inputValue) => {
  return inputValue * 0.001;
};

export const mmToKilometer = (inputValue) => {
  return inputValue * 1e-6;
};

export const mmToMile = (inputValue) => {
  return inputValue * 6.2137e-7;
};

export const mmToYard = (inputValue) => {
  return inputValue * 0.00109361;
};

export const mmToFoot = (inputValue) => {
  return inputValue * 0.00328084;
};

export const mmToInch = (inputValue) => {
  return inputValue * 0.0393701;
};
//....

export const cmToMm = (inputValue) => {
  return inputValue * 10;
};

export const cmToMeter = (inputValue) => {
  return inputValue / 100;
};

export const cmToKilometer = (inputValue) => {
  return inputValue / 100000;
};

export const cmToMile = (inputValue) => {
  return inputValue / 160934;
};

export const cmToYard = (inputValue) => {
  return inputValue / 91.44;
};
export const cmToFoot = (inputValue) => {
  return inputValue / 30.48;
};

export const cmToInch = (inputValue) => {
  return inputValue / 2.54;
};

//....
export const meterToMm = (inputValue) => {
  return inputValue * 1000;
};

export const meterToCm = (inputValue) => {
  return inputValue * 100;
};

export const meterToKilometer = (inputValue) => {
  return inputValue / 1000;
};

export const meterToMile = (inputValue) => {
  return inputValue * 0.000621371;
};

export const meterToYard = (inputValue) => {
  return inputValue * 1.09361;
};

export const meterToFoot = (inputValue) => {
  return inputValue * 3.28084;
};

export const meterToInch = (inputValue) => {
  return inputValue * 39.3701;
};

//....
export const kilometerToMm = (inputValue) => {
  return inputValue * 1e6;
};

export const kilometerToCm = (inputValue) => {
  return inputValue * 100000;
};

export const kilometerToMeter = (inputValue) => {
  return inputValue * 1000;
};

export const kilometerToMile = (inputValue) => {
  return inputValue * 0.621371;
};

export const kilometerToYard = (inputValue) => {
  return inputValue * 1093.61;
};

export const kilometerToFoot = (inputValue) => {
  return inputValue * 3280.84;
};

export const kilometerToInch = (inputValue) => {
  return inputValue * 39370.1;
};

//....

export const mileToMm = (inputValue) => {
  return inputValue * 1.609e6;
};

export const mileToCm = (inputValue) => {
  return inputValue * 160934;
};

export const mileToMeter = (inputValue) => {
  return inputValue * 1609.34;
};

export const mileToKilometer = (inputValue) => {
  return inputValue * 1.60934;
};

export const mileToYard = (inputValue) => {
  return inputValue * 1760;
};

export const mileToFoot = (inputValue) => {
  return inputValue * 5280;
};

export const mileToInch = (inputValue) => {
  return inputValue * 63360;
};

//....

export const yardToMm = (inputValue) => {
  return inputValue * 914.4;
};

export const yardToCm = (inputValue) => {
  return inputValue * 91.44;
};

export const yardToMeter = (inputValue) => {
  return inputValue * 0.9144;
};

export const yardToKilometer = (inputValue) => {
  return inputValue * 0.0009144;
};

export const yardToMile = (inputValue) => {
  return inputValue * 0.000568182;
};

export const yardToFoot = (inputValue) => {
  return inputValue * 3;
};

export const yardToInch = (inputValue) => {
  return inputValue * 36;
};

//....

export const footToMm = (inputValue) => {
  return inputValue * 304.8;
};

export const footToCm = (inputValue) => {
  return inputValue * 30.48;
};

export const footToMeter = (inputValue) => {
  return inputValue * 0.3048;
};

export const footToKilometer = (inputValue) => {
  return inputValue * 0.0003048;
};

export const footToMile = (inputValue) => {
  return inputValue / 5280;
};

export const footToYard = (inputValue) => {
  return inputValue / 3;
};

export const footToInch = (inputValue) => {
  return inputValue * 12;
};

//....

export const inchToMm = (inputValue) => {
  return inputValue * 25.4;
};

export const inchToCm = (inputValue) => {
  return inputValue * 2.54;
};

export const inchToMeter = (inputValue) => {
  return inputValue / 39.37;
};

export const inchToKilometer = (inputValue) => {
  return inputValue * 2.54e-5;
};

export const inchToMile = (inputValue) => {
  return inputValue / 63360;
};

export const inchToYard = (inputValue) => {
  return inputValue / 36;
};

export const inchToFoot = (inputValue) => {
  return inputValue / 12;
};

//---------------------------------------
//TEMPERATURE CONVERTER FUNCTIONS

export const celsiusToKelvin = (inputValue) => {
  return inputValue + 273.15;
};

export const celsiusToFahrenheit = (inputValue) => {
  return (inputValue * 9) / 5 + 32;
};

//....

export const kelvinToCelsius = (inputValue) => {
  return inputValue - 273.15;
};

export const kelvinToFahrenheit = (inputValue) => {
  return ((inputValue - 273.15) * 9) / 5 + 32;
};

//....

export const fahrenheitToCelsius = (inputValue) => {
  return ((inputValue - 32) * 5) / 9;
};

export const fahrenheitToKelvin = (inputValue) => {
  return ((inputValue - 32) * 5) / 9 + 273.15;
};

//---------------------------------------
//AREA CONVERTER FUNCTIONS

export const squareMeterToSquareKilometer = (inputValue) => {
  return inputValue / 1e6;
};

export const squareMeterToHectare = (inputValue) => {
  return inputValue / 10000;
};

export const squareMeterToAcre = (inputValue) => {
  return inputValue * 0.000247105;
};

export const squareMeterToSquareMile = (inputValue) => {
  return inputValue / 2.59e6;
};

export const squareMeterToSquareYard = (inputValue) => {
  return inputValue * 1.196;
};

export const squareMeterToSquareFoot = (inputValue) => {
  return inputValue * 10.764;
};

export const squareMeterToSquareInch = (inputValue) => {
  return inputValue * 1550;
};

//....
export const squareKilometerToSquareMeter = (inputValue) => {
  return inputValue * 1e6;
};

export const squareKilometerToHectare = (inputValue) => {
  return inputValue * 100;
};

export const squareKilometerToAcre = (inputValue) => {
  return inputValue * 247.105;
};

export const squareKilometerToSquareMile = (inputValue) => {
  return inputValue / 2.59;
};

export const squareKilometerToSquareYard = (inputValue) => {
  return inputValue * 1.196e6;
};

export const squareKilometerToSquareFoot = (inputValue) => {
  return inputValue * 1.076e7;
};

export const squareKilometerToSquareInch = (inputValue) => {
  return inputValue * 1.55e9;
};

//....
export const hectareToSquareMeter = (inputValue) => {
  return inputValue * 10000;
};

export const hectareToSquareKilometer = (inputValue) => {
  return inputValue / 100;
};

export const hectareToAcre = (inputValue) => {
  return inputValue * 2.471;
};

export const hectareToSquareMile = (inputValue) => {
  return inputValue * 0.00386102;
};

export const hectareToSquareYard = (inputValue) => {
  return inputValue * 11959.9;
};

export const hectareToSquareFoot = (inputValue) => {
  return inputValue * 107639;
};

export const hectareToSquareInch = (inputValue) => {
  return inputValue * 1.55e7;
};

//....

export const acreToSquareMeter = (inputValue) => {
  return inputValue * 4046.86;
};

export const acreToSquareKilometer = (inputValue) => {
  return inputValue * 0.00404686;
};

export const acreToHectare = (inputValue) => {
  return inputValue / 2.471;
};

export const acreToSquareMile = (inputValue) => {
  return inputValue / 640;
};

export const acreToSquareYard = (inputValue) => {
  return inputValue * 4840;
};

export const acreToSquareFoot = (inputValue) => {
  return inputValue * 43560;
};

export const acreToSquareInch = (inputValue) => {
  return inputValue * 6.273e6;
};

//....

export const squareMileToSquareMeter = (inputValue) => {
  return inputValue * 2.59e6;
};

export const squareMileToSquareKilometer = (inputValue) => {
  return inputValue * 2.59;
};

export const squareMileToHectare = (inputValue) => {
  return inputValue * 258.999;
};

export const squareMileToAcre = (inputValue) => {
  return inputValue * 640;
};

export const squareMileToSquareYard = (inputValue) => {
  return inputValue * 3.098e6;
};

export const squareMileToSquareFoot = (inputValue) => {
  return inputValue * 2.788e7;
};

export const squareMileToSquareInch = (inputValue) => {
  return inputValue * 4.014e9;
};

//....

export const squareYardToSquareMeter = (inputValue) => {
  return inputValue / 1.196;
};

export const squareYardToSquareKilometer = (inputValue) => {
  return inputValue / 1.196e6;
};

export const squareYardToHectare = (inputValue) => {
  return inputValue * 8.3613e-5;
};

export const squareYardToAcre = (inputValue) => {
  return inputValue / 4840;
};

export const squareYardToSquareMile = (inputValue) => {
  return inputValue * 3.2283e-7;
};

export const squareYardToSquareFoot = (inputValue) => {
  return inputValue * 9;
};

export const squareYardToSquareInch = (inputValue) => {
  return inputValue * 1296;
};

//....

export const squareFootToSquareMeter = (inputValue) => {
  return inputValue / 10.764;
};

export const squareFootToSquareKilometer = (inputValue) => {
  return inputValue * 9.2903e-8;
};

export const squareFootToHectare = (inputValue) => {
  return inputValue * 9.2903e-6;
};

export const squareFootToAcre = (inputValue) => {
  return inputValue / 43560;
};

export const squareFootToSquareMile = (inputValue) => {
  return inputValue / 2.788e7;
};

export const squareFootToSquareYard = (inputValue) => {
  return inputValue / 9;
};

export const squareFootToSquareInch = (inputValue) => {
  return inputValue * 144;
};

//....

export const squareInchToSquareMeter = (inputValue) => {
  return inputValue * 0.00064516;
};

export const squareInchToSquareKilometer = (inputValue) => {
  return inputValue / 1.55e9;
};

export const squareInchToHectare = (inputValue) => {
  return inputValue / 1.55e7;
};

export const squareInchToAcre = (inputValue) => {
  return inputValue * 1.5942e-7;
};

export const squareInchToSquareMile = (inputValue) => {
  return inputValue * 0.00064516;
};

export const squareInchToSquareYard = (inputValue) => {
  return inputValue / 1296;
};

export const squareInchToSquareFoot = (inputValue) => {
  return inputValue / 144;
};

//---------------------------------------
//VOLUME CONVERTER FUNCTIONS

export const cubicMeterToCubicFoot = (inputValue) => {
  return inputValue * 35.3147;
};

export const cubicMeterToCubicInch = (inputValue) => {
  return inputValue * 61023.7;
};

export const cubicMeterToLiter = (inputValue) => {
  return inputValue * 1000;
};

export const cubicMeterToMilliliter = (inputValue) => {
  return inputValue * 1e6;
};

export const cubicMeterToImperialGallon = (inputValue) => {
  return inputValue * 219.969;
};

export const cubicMeterToUsLiquidGallon = (inputValue) => {
  return inputValue * 264.172;
};

//....

export const cubicFootToCubicMeter = (inputValue) => {
  return inputValue * 0.0283168;
};

export const cubicFootToCubicInch = (inputValue) => {
  return inputValue * 1728;
};

export const cubicFootToLiter = (inputValue) => {
  return inputValue * 28.3168;
};

export const cubicFootToMilliliter = (inputValue) => {
  return inputValue * 28316.8;
};

export const cubicFootToImperialGallon = (inputValue) => {
  return inputValue * 6.22884;
};

export const cubicFootToUsLiquidGallon = (inputValue) => {
  return inputValue * 7.48052;
};

//....

export const cubicInchToCubicMeter = (inputValue) => {
  return inputValue / 61024;
};

export const cubicInchToCubicFoot = (inputValue) => {
  return inputValue / 1728;
};

export const cubicInchToLiter = (inputValue) => {
  return inputValue * 0.0163871;
};

export const cubicInchToMilliliter = (inputValue) => {
  return inputValue * 16.3871;
};

export const cubicInchToImperialGallon = (inputValue) => {
  return inputValue * 0.00360465;
};

export const cubicInchToUsLiquidGallon = (inputValue) => {
  return inputValue / 231;
};

//....

export const literToCubicMeter = (inputValue) => {
  return inputValue / 1000;
};

export const literToCubicFoot = (inputValue) => {
  return inputValue * 0.0353147;
};

export const literToCubicInch = (inputValue) => {
  return inputValue * 61.0237;
};

export const literToMilliliter = (inputValue) => {
  return inputValue * 1000;
};

export const literToImperialGallon = (inputValue) => {
  return inputValue / 4.546;
};

export const literToUsLiquidGallon = (inputValue) => {
  return inputValue * 0.264172;
};

//....

export const milliliterToCubicMeter = (inputValue) => {
  return inputValue / 1e6;
};

export const milliliterToCubicFoot = (inputValue) => {
  return inputValue * 3.5315e-5;
};

export const milliliterToCubicInch = (inputValue) => {
  return inputValue / 16.387;
};

export const milliliterToLiter = (inputValue) => {
  return inputValue / 1000;
};

export const milliliterToImperialGallon = (inputValue) => {
  return inputValue * 0.000219969;
};

export const milliliterToUsLiquidGallon = (inputValue) => {
  return inputValue / 0.000264172;
};

//....

export const imperialGallonToCubicMeter = (inputValue) => {
  return inputValue * 0.00454609;
};

export const imperialGallonToCubicFoot = (inputValue) => {
  return inputValue * 0.160544;
};

export const imperialGallonToCubicInch = (inputValue) => {
  return inputValue * 277.419;
};

export const imperialGallonToLiter = (inputValue) => {
  return inputValue * 4.54609;
};

export const imperialGallonToMilliliter = (inputValue) => {
  return inputValue * 4546.09;
};

export const imperialGallonToUsLiquidGallon = (inputValue) => {
  return inputValue * 1.20095;
};

//....

export const usLiquidGallonToCubicMeter = (inputValue) => {
  return inputValue * 0.00378541;
};

export const usLiquidGallonToCubicFoot = (inputValue) => {
  return inputValue * 0.133681;
};

export const usLiquidGallonToCubicInch = (inputValue) => {
  return inputValue * 231;
};

export const usLiquidGallonToLiter = (inputValue) => {
  return inputValue * 3.78541;
};

export const usLiquidGallonToMilliliter = (inputValue) => {
  return inputValue * 3785.41;
};

export const usLiquidGallonToImperialGallon = (inputValue) => {
  return inputValue / 1.201;
};

//---------------------------------------
//WEIGHT CONVERTER FUNCTIONS

export const milligramToGram = (inputValue) => {
  return inputValue / 1000;
};

export const milligramToKilogram = (inputValue) => {
  return inputValue / 1e6;
};

export const milligramToMetricTon = (inputValue) => {
  return inputValue / 1e9;
};

export const milligramToPound = (inputValue) => {
  return inputValue * 2.2046e-6;
};

export const milligramToOunce = (inputValue) => {
  return inputValue * 3.5274e-5;
};

export const milligramToCarat = (inputValue) => {
  return inputValue / 200;
};

//....

export const gramToMilligram = (inputValue) => {
  return inputValue * 1000;
};

export const gramToKilogram = (inputValue) => {
  return inputValue / 1000;
};

export const gramToMetricTon = (inputValue) => {
  return inputValue / 1e6;
};

export const gramToPound = (inputValue) => {
  return inputValue * 0.00220462;
};

export const gramToOunce = (inputValue) => {
  return inputValue * 0.035274;
};

export const gramToCarat = (inputValue) => {
  return inputValue * 5;
};

//....

export const kilogramToMilligram = (inputValue) => {
  return inputValue * 1e6;
};

export const kilogramToGram = (inputValue) => {
  return inputValue * 1000;
};

export const kilogramToMetricTon = (inputValue) => {
  return inputValue / 1000;
};

export const kilogramToPound = (inputValue) => {
  return inputValue * 2.20462;
};

export const kilogramToOunce = (inputValue) => {
  return inputValue * 35.274;
};

export const kilogramToCarat = (inputValue) => {
  return inputValue * 5000;
};

//....

export const metricTonToMilligram = (inputValue) => {
  return inputValue * 1e9;
};

export const metricTonToGram = (inputValue) => {
  return inputValue * 1e6;
};

export const metricTonToKilogram = (inputValue) => {
  return inputValue * 1000;
};

export const metricTonToPound = (inputValue) => {
  return inputValue * 2204.62;
};

export const metricTonToOunce = (inputValue) => {
  return inputValue * 35274;
};

export const metricTonToCarat = (inputValue) => {
  return inputValue * 5e6;
};

//....

export const poundToMilligram = (inputValue) => {
  return inputValue * 453592;
};

export const poundToGram = (inputValue) => {
  return inputValue * 453.592;
};

export const poundToKilogram = (inputValue) => {
  return inputValue * 0.453592;
};

export const poundToMetricTon = (inputValue) => {
  return inputValue * 0.000453592;
};

export const poundToOunce = (inputValue) => {
  return inputValue * 16;
};

export const poundToCarat = (inputValue) => {
  return inputValue * 2267.96;
};

//....

export const ounceToMilligram = (inputValue) => {
  return inputValue * 28349.5;
};

export const ounceToGram = (inputValue) => {
  return inputValue * 28.3495;
};

export const ounceToKilogram = (inputValue) => {
  return inputValue / 35.274;
};

export const ounceToMetricTon = (inputValue) => {
  return inputValue * 2.835e-5;
};

export const ounceToPound = (inputValue) => {
  return inputValue / 16;
};

export const ounceToCarat = (inputValue) => {
  return inputValue * 141.748;
};

//....

export const caratToMilligram = (inputValue) => {
  return inputValue * 200;
};

export const caratToGram = (inputValue) => {
  return inputValue / 5;
};

export const caratToKilogram = (inputValue) => {
  return inputValue / 5000;
};

export const caratToMetricTon = (inputValue) => {
  return inputValue / 5e6;
};

export const caratToPound = (inputValue) => {
  return inputValue * 0.000440925;
};

export const caratToOunce = (inputValue) => {
  return inputValue * 0.00705479;
};

//---------------------------------------
//TIME CONVERTER FUNCTIONS

export const secondToMillisecond = (inputValue) => {
  return inputValue * 1000;
};

export const secondToMinute = (inputValue) => {
  return inputValue / 60;
};

export const secondToHour = (inputValue) => {
  return inputValue / 3600;
};

export const secondToDay = (inputValue) => {
  return inputValue / 86400;
};

export const secondToWeek = (inputValue) => {
  return inputValue / 604800;
};

export const secondToMonth = (inputValue) => {
  return inputValue / 2.628e6;
};

export const secondToYear = (inputValue) => {
  return inputValue * 3.171e-8;
};

//....

export const millisecondToSecond = (inputValue) => {
  return inputValue / 1000;
};

export const millisecondToMinute = (inputValue) => {
  return inputValue / 60000;
};

export const millisecondToHour = (inputValue) => {
  return inputValue / 3.6e6;
};

export const millisecondToDay = (inputValue) => {
  return inputValue / 8.64e7;
};

export const millisecondToWeek = (inputValue) => {
  return inputValue / 6.048e8;
};

export const millisecondToMonth = (inputValue) => {
  return inputValue / 2.628e9;
};

export const millisecondToYear = (inputValue) => {
  return inputValue * 3.171e-11;
};

//....

export const minuteToSecond = (inputValue) => {
  return inputValue * 60;
};

export const minuteToMillisecond = (inputValue) => {
  return inputValue * 60000;
};

export const minuteToHour = (inputValue) => {
  return inputValue / 60;
};

export const minuteToDay = (inputValue) => {
  return inputValue / 1440;
};

export const minuteToWeek = (inputValue) => {
  return inputValue / 10080;
};

export const minuteToMonth = (inputValue) => {
  return inputValue * 2.2831e-5;
};

export const minuteToYear = (inputValue) => {
  return inputValue / 525600;
};

//....

export const hourToSecond = (inputValue) => {
  return inputValue * 3600;
};

export const hourToMillisecond = (inputValue) => {
  return inputValue * 3.6e6;
};

export const hourToMinute = (inputValue) => {
  return inputValue * 60;
};

export const hourToDay = (inputValue) => {
  return inputValue / 24;
};

export const hourToWeek = (inputValue) => {
  return inputValue / 168;
};

export const hourToMonth = (inputValue) => {
  return inputValue * 0.00136986;
};

export const hourToYear = (inputValue) => {
  return inputValue / 8760;
};

//....

export const dayToMillisecond = (inputValue) => {
  return inputValue * 8.64e7;
};

export const dayToSecond = (inputValue) => {
  return inputValue * 86400;
};

export const dayToMinute = (inputValue) => {
  return inputValue * 1440;
};

export const dayToHour = (inputValue) => {
  return inputValue * 24;
};

export const dayToWeek = (inputValue) => {
  return inputValue / 7;
};

export const dayToMonth = (inputValue) => {
  return inputValue * 0.0328767;
};

export const dayToYear = (inputValue) => {
  return inputValue / 365;
};

//....

export const weekToMillisecond = (inputValue) => {
  return inputValue * 6.048e8;
};

export const weekToSecond = (inputValue) => {
  return inputValue * 604800;
};

export const weekToMinute = (inputValue) => {
  return inputValue * 10080;
};

export const weekToHour = (inputValue) => {
  return inputValue * 168;
};

export const weekToDay = (inputValue) => {
  return inputValue * 7;
};

export const weekToMonth = (inputValue) => {
  return inputValue * 0.230137;
};

export const weekToYear = (inputValue) => {
  return inputValue * 0.0191781;
};

//....

export const monthToMillisecond = (inputValue) => {
  return inputValue * 2.628e9;
};

export const monthToSecond = (inputValue) => {
  return inputValue * 2.628e6;
};

export const monthToMinute = (inputValue) => {
  return inputValue * 43800;
};

export const monthToHour = (inputValue) => {
  return inputValue * 730.001;
};

export const monthToDay = (inputValue) => {
  return inputValue * 30.4167;
};

export const monthToWeek = (inputValue) => {
  return inputValue * 4.34524;
};

export const monthToYear = (inputValue) => {
  return inputValue / 12;
};

//....

export const yearToMillisecond = (inputValue) => {
  return inputValue * 3.154e10;
};

export const yearToSecond = (inputValue) => {
  return inputValue * 3.154e7;
};

export const yearToMinute = (inputValue) => {
  return inputValue * 525600;
};

export const yearToHour = (inputValue) => {
  return inputValue * 8760;
};

export const yearToDay = (inputValue) => {
  return inputValue * 365;
};

export const yearToWeek = (inputValue) => {
  return inputValue * 52.1429;
};

export const yearToMonth = (inputValue) => {
  return inputValue * 12;
};

//---------------------------------------
//SPEED CONVERTER FUNCTIONS

export const meterPerSecondToKilometerPerHour = (inputValue) => {
  return inputValue * 3.6;
};

export const meterPerSecondToMilePerHour = (inputValue) => {
  return inputValue * 2.237;
};

//....

export const kilometerPerHourToMeterPerSecond = (inputValue) => {
  return inputValue / 3.6;
};

export const kilometerPerHourToMilePerHour = (inputValue) => {
  return inputValue * 0.621371;
};

//....

export const milePerHourToMeterPerSecond = (inputValue) => {
  return inputValue / 2.237;
};

export const milePerHourToKilometerPerHour = (inputValue) => {
  return inputValue * 1.60934;
};
