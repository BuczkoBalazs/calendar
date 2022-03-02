
function Country(name, short, population, flag, continent){
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
};

// COMPONENTS

const header = (logo) => {
    return `
        <header>
            <a id="logo">${logo}</a>
            <button></button>
        </header>    
    `
}

const countryCard = (country) => {
    return `
        <div id="cards">
            <span>${country.name}</span>
            <span>${country.short}</span>
            <span>${country.population}</span>
            <img src="${country.flag}"></img>
            <span>${country.continent}</span>
        </div>
    `;
};

const countryCards = (contentHTML) => {
    return `
    <section class="country-cards">${contentHTML}</sectio>
    `
}


const loadEvent = async _ => {
    // GET DATA
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    // console.log(countryArr[0]);
    // PROCESS DATA
    let countries = countryArr.map(function(country){
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    });
    // console.log(countries);

    const rootElement = document.getElementById("root");
    
    rootElement.insertAdjacentHTML("beforeend", header("Countries"));
    
    let countryHTML = "";
    for (const country of countries) {
        countryHTML += countryCard(country)
    }
    rootElement.insertAdjacentHTML("beforeend", countryCards(countryHTML))

};

window.addEventListener("load", loadEvent)