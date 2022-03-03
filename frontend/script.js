
function init(mathFunction){
    var a = 5;
    var b = 6;

    // console.log(c);

    if (a < b){
        // (function(){
        //     var c = b - a;
        // })();
        let c = mathFunction(b,a);
        console.log(c)
    } else {
        // (function(){
        //     var c = a - b;
        // })();
        let c = mathFunction(a,b);
        console.log(c)
    };

    // console.log(c);
};

const initC = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber
};

const initD = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber
};

init(initD);

const formHTML = () => {
    return `
    <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname">
        <label for="mname">Middle name:</label>
        <input type="text" id="mname" name="mname">
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname">
        <select name="animals" id="animals">
            <option value="both">both</option>
            <option value="cats">cats</option>
            <option value="dogs">dogs</option>
        </select>
        <button>Lick me!</button>
    </form>
    `;
};


const loadEvent = _ => {

    const rootElement = document.getElementById("root");
    
    rootElement.insertAdjacentHTML("beforeend", formHTML());

    const form = rootElement.querySelector("form")

    const inputClass = document.querySelectorAll("input")
/*     
    for (const input of inputClass) {
        input.addEventListener("input", (event) => {
            console.log(event.target.value);
        });
    };
*/ 

    console.log(typeof inputClass);
    console.log(Array.isArray(inputClass));

    Array.from(inputClass).map( (input) => {
        input.addEventListener("input", (event) => {
            console.log(event.target.value);
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e.target)
    });

    form.querySelector("select").addEventListener("input", (e) => {
        console.log(e.target.value)
    });



};

window.addEventListener("load", loadEvent)
