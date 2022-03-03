// GET DATA

function Month(name, id, nth, days) {
    this.name = name;
    this.id = id;
    this.nth = nth;
    this.days = days;
}

const months = [
    new Month("january", "jan", 1, 31),
    new Month("february", "feb", 2, 28),
    new Month("march", "mar", 3, 31),
    new Month("april", "apr", 4, 30),
    new Month("may", "may", 5, 31),
    new Month("june", "jun", 6, 30),
    new Month("july", "jul", 7, 31),
    new Month("august", "aug", 8, 31),
    new Month("september", "sep", 9, 30),
    new Month("october", "oct", 10, 31),
    new Month("november", "nov", 11, 30),
    new Month("december", "dec", 12, 31),

]

// console.log(months)

// PREPARE DATA



// COMPONENTS = HTML ELEMENTS WE WOULD LIKE TO ADD TO THE DOCUMENT LATER

const monthSection = (id, h1, days) => {
    return `
    <section id="${id}">
        <h1>${h1}</h1>
        <div class="days">${days}</div>
    </section>
    `;
};

const dayCard = (year, month, day) => {
    return `
    <div class="card">
        <time>${year}</time>
        <time>${month}</time>
        <time>${day}</time>
        <button class="card-btn">Get day name!</button>
    </div>
    `;
};

const dayCards = (month, callDayCard) => {
    let toReturn = "";
    for (let i = 1; i <= month.days; i++) {
        toReturn += callDayCard(2022, month.nth, i);
    }
    return toReturn;
};
// console.log(dayCards(months[0], dayCard));

// RENDER = ADD THE COMPONENTS TO THE DOCUMENT

const loadEvent = _ => {
    let content = ""
    for (const month of months) {
        content += monthSection(month.id, month.name, dayCards(month, dayCard))
    }
    document.getElementById("root").insertAdjacentHTML("beforeend", content)

    const cardList = document.querySelectorAll(".card")

    // clickevent
/* 
    function cardButtonClickEvent(event) {
        event.target.parentElement.classList.toggle("clicked")
        // console.log(event.target.parentElement)
    }

    for (const card of cardList) {
        // console.log(card)
        card.querySelector("button").addEventListener("click", cardButtonClickEvent)
    }

 */

function clickEvent(event) {
    if (event.target.classList.contains("card-btn")) {
        console.log("hello click")
        event.target.innerHTML = "This btn was clicked!"
    }
    // console.log(event.target)
}

document.addEventListener("click", clickEvent)

}


window.addEventListener("load", loadEvent)