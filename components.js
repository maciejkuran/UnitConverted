//SEARCH CATEGORY 2 COMPONENTS - HOME, GLOBAL & CATEGORY PAGE

class searchCategoryHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h2>Choose Category to Convert</h2>
    <div>
      <select name="categories" class="categories">
        <option value="/length-converter">Length</option>
        <option value="/temperature-converter">Temperature</option>
        <option value="/area-converter">Area</option>
        <option value="/volume-converter">Volume</option>
        <option value="/weight-converter">Weight</option>
        <option value="/time-converter">Time</option>
        <option value="/speed-converter">Speed</option>
      </select>
      <button class="find">FIND</button>
    </div>`;
  }
}
customElements.define('search-wrapper', searchCategoryHome);

class searchCategoryOnCategoryPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="searchWrapper">
    <h2>Choose a different category</h2>
    <div>
      <select name="categories" class="categories">
        <option value="/length-converter">Length</option>
        <option value="/temperature-converter">Temperature</option>
        <option value="/area-converter">Area</option>
        <option value="/volume-converter">Volume</option>
        <option value="/weight-converter">Weight</option>
        <option value="/time-converter">Time</option>
        <option value="/speed-converter">Speed</option>
      </select>
      <button class="find">FIND</button>
    </div>
  </div>`;
  }
}

customElements.define('search-category-on-category-page', searchCategoryOnCategoryPage);

class searchCategoryGlobal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="searchWrapper">
    <h2>Convert now</h2>
    <div>
      <select name="categories" class="categories">
        <option value="/length-converter">Length</option>
        <option value="/temperature-converter">Temperature</option>
        <option value="/area-converter">Area</option>
        <option value="/volume-converter">Volume</option>
        <option value="/weight-converter">Weight</option>
        <option value="/time-converter">Time</option>
        <option value="/speed-converter">Speed</option>
      </select>
      <button class="find">FIND</button>
    </div>
  </div>`;
  }
}
customElements.define('search-wrapper-global', searchCategoryGlobal);

//FILTER CATEGORIES FUNCTION
export const categories = document.querySelector('.categories');

export let categoriesBox = document.querySelector('.find').addEventListener('click', function () {
  let options = categories.selectedOptions;
  for (let i = 0; i < options.length; i++) {
    window.open(options[i].value, '_self');
  }
});

//FOOTER COMPONENT
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
    <div class="footerDiv">
      <img src="/img/unitconverted logo.svg" width="200rem" alt="unitconverted logo, online unit converter" />
      <div class="categoriesList">
        <h4>Categories</h4>
        <a href="/length-converter">Length converter</a>
        <a href="/temperature-converter">Temperature converter</a>
        <a href="/area-converter">Area converter</a>
        <a href="/volume-converter">Volume converter</a>
        <a href="/weight-converter">Weight converter</a>
        <a href="/time-converter">Time converter</a>
        <a href="/speed-converter">Speed converter</a>
      </div>

      <div class="otherPages">
        <a href="/study-units">Study Units</a>
        <a href="/about-this-project">About This Project</a>
        <a href="/terms-of-use">Terms Of Use</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>
    <p>
      All Rights Reserved ©, unitconverted.com, developed by
      <a href="https://maciejkuran.com">maciejkuran.com</a>
    </p>
  </footer>`;
  }
}

customElements.define('my-footer', myFooter);

//UNIT LIST COMPONENT
class unitList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div>
            <h4>Length Units</h4>
            <a href="./millimeter">Millimeter</a>
            <a href="./centimeter">Centimeter</a>
            <a href="./meter">Meter</a>
            <a href="./kilometer">Kilometer</a>
            <a href="./mile">Mile</a>
            <a href="./yard">Yard</a>
            <a href="./foot">Foot</a>
            <a href="./inch">Inch</a>
          </div>
          <div>
            <h4>Temperature Units</h4>
            <a href="./celsius">Celsius</a>
            <a href="./kelvin">Kelvin</a>
            <a href="./fahrenheit">Fahrenheit</a>
          </div>
          <div>
            <h4>Area Units</h4>
            <a href="./acre">Acre</a>
            <a href="./square-meter">Square meter</a>
            <a href="./square-kilometer">Square kilometer</a>
            <a href="./hectare">Hectare</a>
            <a href="./square-mile">Square mile</a>
            <a href="./square-yard">Square yard</a>
            <a href="./square-foot">Square foot</a>
            <a href="./square-inch">Square inch</a>
          </div>
          <div>
            <h4>Volume Units</h4>
            <a href="./cubic-meter">Cubic meter</a>
            <a href="./cubic-foot">Cubic foot</a>
            <a href="./cubic-inch">Cubic inch</a>
            <a href="./liter">Liter</a>
            <a href="./milliliter">Milliliter</a>
            <a href="./imperial-gallon">Imperial gallon</a>
            <a href="./us-liquid-gallon">US liquid gallon</a>
            
          </div>`;
  }
}

customElements.define('unit-list', unitList);

class unitList2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>
    <h4>Weight Units</h4>
    <a href="./milligram">Milligram</a>
    <a href="./gram">Gram</a>
    <a href="./kilogram">Kilogram</a>
    <a href="./metric-ton">Metric Ton</a>
    <a href="./pound">Pound</a>
    <a href="./ounce">Ounce</a>
    <a href="./carat">Carat</a>
  </div>
  <div>
    <h4>Time Units</h4>
    <a href="./second">Second</a>
    <a href="./millisecond">Millisecond</a>
    <a href="./minute">Minute</a>
    <a href="./hour">Hour</a>
    <a href="./day">Day</a>
    <a href="./week">Week</a>
    <a href="./month">Month</a>
    <a href="./year">Year</a>
  </div>
  <div>
    <h4>Speed Units</h4>
    <a href="./meter-per-second">meter / second</a>
    <a href="./kilometer-per-hour">kilometer / hour</a>
    <a href="./mile-per-hour">mile / hour</a>
  </div>`;
  }
}

customElements.define('unit-list2', unitList2);
