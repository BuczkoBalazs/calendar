
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