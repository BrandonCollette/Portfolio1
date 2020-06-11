$(document).ready(initializeApp);

var calculationArray = [];
var displayArray = [];
var stringDecimalToPush = "";
var stringNumberToPush = "";
var displayInputs = [];
var calculationResult = null;
var stringDecimal = "";
var arrOperatorToPush = [];
function initializeApp() {
    console.log('Initializing App... ');
    applyClickHandlers();
   console.log(calculate('2','5',"*"));



}
function applyClickHandlers() {
    $('#number-block').on('click','.number',numberButtonHandler);
    $('#operator-column').on('click','.operator',operatorButtonHandler);
    $('#equals').on('click',equalsButtonHandler);
    $('#decimal').on('click',decimalButtonHandler);
    $('#c-button').on('click',clearButtonHandler);
    $('#ac-button').on('click',clearButtonHandler);
}
function numberButtonHandler(event){
    var inputtedNumber = "";
    inputtedNumber += $(event.currentTarget).find('p').text();
    stringNumberToPush += inputtedNumber;
    if(inputtedNumber.length > 2){
        calculate(calculationArray[0],calculationArray[2],calculationArray[1]);
        calculationArray.shift();
        calculationArray.shift();
    }
    else {
        displayArray.push(inputtedNumber);
    }
    stringDecimalToPush = "";
    updateDisplay();

}
function decimalButtonHandler(event) {
    var decimalbutton = "";
    decimalbutton += $(event.currentTarget).find('p').text();
    stringDecimalToPush += decimalbutton;
    stringDecimal += decimalbutton;
    console.log('string decimal: ',stringDecimal);

    if(stringDecimalToPush.length > 1){
        stringDecimalToPush = ".";

    }
    else if (stringDecimalToPush.length < 1){
       stringDecimalToPush += decimalbutton;
    }
   // stringNumberToPush += stringDecimalToPush;


    displayArray.push(decimalbutton);
    updateDisplay();
}
function operatorButtonHandler(event){
    var inputtedOperator = "";
    inputtedOperator += $(event.currentTarget).find('p').text();
    arrOperatorToPush.push(inputtedOperator);
    displayArray.push(inputtedOperator);
    updateDisplay();
    calculationArray.push(stringNumberToPush);
    calculationArray.push(inputtedOperator);
    stringNumberToPush = "";


}
function clearButtonHandler(event){
     calculationArray = [];
     displayArray = [];
     stringDecimalToPush = "";
     stringNumberToPush = "";
     displayInputs = [];
     calculationResult = null;
     stringDecimal = "";
     arrOperatorToPush = [];
     updateDisplay();
}
function equalsButtonHandler(event){
console.log('equalsbutton bra stringNumbertoPush: ', stringNumberToPush);
    calculationArray.push(stringNumberToPush);
    stringNumberToPush = "";
    displayArray = [];
    if(arrOperatorToPush.length > 1){
        calculationArray[1] = arrOperatorToPush[arrOperatorToPush.length - 1];
        calculationArray[2] = calculationArray[calculationArray.length - 1];
    }
    if (stringDecimal.length > 1) {
        calculationArray[0] = calculationArray[0] / 10;
        calculationArray[2] = calculationArray[2] / 10;

    }
        var answer = calculate(calculationArray[0],calculationArray[2],calculationArray[1]);
    displayArray.push(answer);
    updateDisplay();
}
function updateDisplay() {
    var displayText = displayArray.join("");
    $('#display-text').text(displayText);
}

function calculate(num1,num2,operator){

    var number1 = parseFloat(num1);
    var number2 = parseFloat(num2);

    var result = null;
    switch (operator) {
        case "+": result = number1 + number2;
        console.log("number 1 and number 2: ", number1 ,'   ', number2);
            while(number1 == NaN){
                calculationArray.shift();
            }
        break;
        case "-":result = number1 - number2;
            while(number1 == NaN){
                calculationArray.shift();
            }
        break;
        case "/":result = number1 / number2;
            while(number1 == NaN){
                calculationArray.shift();
            }

        break;
        case "*":result = number1 * number2;
            while(number1 == NaN){
                calculationArray.shift();
            }
            break;

    }
    return result;

}



