let first_number = 0;
let second_number = 0;
let operator_choice = "";
let display_value = "";
let result = 0;

/*Making the buttons work*/

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear")

/* Screen */
const screen = document.querySelector("#display");


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}


function operate(one, two, operator_choice){
    switch(operator_choice){
        case '+': return add(one, two);
        case '-': return subtract(one, two);
        case '/': 
            if(two == 0){
                return;
            }else{ 
                return divide(one, two).toFixed(2);
            }
        case 'x': return multiply(one, two);
    }
}




numbers.forEach(number => {
    number.addEventListener("click", function() {
        // If display value is currently an operator, get rid of it
        // Ensures operator is never displayed at the same time as a number
        if(display_value == "+" || display_value == "-" || display_value == "x" || display_value == "/"){
            display_value = "";
        }

        //If the operator has been selected add number to second number
        if(operator_choice !== ""){
            display_value += number.textContent;
            second_number = parseInt(display_value); 
        } else {
        //Otherwise add to first
            if(first_number == 0){
                display_value = "";
            }
           display_value += number.textContent;
           first_number = parseInt(display_value); 
        } 
        screen.textContent = display_value;
    });
})


// if an operator is clicked - + * /
operators.forEach(operator => {
    operator.addEventListener("click", function(){
        /*if an operator is selected before the equals sign 
        is pressed from the last result, operate and set the result to be the first number*/
        if(first_number != 0 && second_number != 0 && operator != ""){
            onEquals();
            first_number = result;
        }

        
        if(first_number == 0){
            first_number = result;
        }
        operator_choice = operator.textContent;
        display_value = operator.textContent;
        console.log(display_value);
        screen.textContent = display_value;
    });
})

equals.addEventListener("click", function(){
    onEquals();
});

clear.addEventListener("click", function(){
    operator_choice = "";
    first_number = 0;
    second_number = 0;
    display_value = 0;
    result = 0;
    screen.textContent = "";
});

function onEquals(){
    result = operate(first_number, second_number, operator_choice);
    operator_choice = "";
    first_number = 0;
    second_number = 0;
    if(result != undefined){
        console.log("valid");
        display_value = result;
        screen.textContent = display_value;
    } else {
        screen.textContent = "No";
    }
}





