
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

const countryCards = (cards) => {
    return `
        <div id="cards"></div>
    `
}

const countryCards = (card) => {
    return `
        <div id="card"></div>
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
    })
    console.log(countries)

    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", header("Countries"))
};

window.addEventListener("load", loadEvent)