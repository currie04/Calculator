let first_number = 0;
let second_number = 0;
let operator_choice = "";
let display_value = "";
let result = 0;


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
        case '/': return divide(one, two); 
        case 'x': return multiply(one, two);
    }
}

/*Making the buttons work*/

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear")

/* Screen */
const screen = document.querySelector("#display");


numbers.forEach(number => {
    number.addEventListener("click", function() {
        if(first_number == 0 && second_number == 0 && operator_choice == ""){
            display_value = ""
        }
        if(operator_choice !== ""){
            if (second_number == 0){
                display_value = "";
            }
            display_value += number.textContent;
            second_number = parseInt(display_value); 
        } else {
           display_value += number.textContent;
           first_number = parseInt(display_value); 
        } 
        screen.textContent = display_value;
        console.log(`display_value: ${display_value}`);
        console.log(`operator_choice : ${operator_choice}`);
        console.log(`first_number: ${first_number}`);
        console.log(`second_number: ${second_number}`);
    });
})

operators.forEach(operator => {
    operator.addEventListener("click", function(){
        if(first_number != 0 && second_number != 0 && operator != ""){
            onEquals();
            first_number = result;
        }
        if(first_number == 0){
            first_number = result;
        }
        operator_choice = operator.textContent;
        display_value = operator.textContent;
        screen.textContent = display_value;
        console.log(`display_value: ${display_value}`);
        console.log(`operator_choice : ${operator_choice}`);
        console.log(`first_number: ${first_number}`);
        console.log(`second_number: ${second_number}`);
    });
})

equals.addEventListener("click", function(){
    onEquals();
});

clear.addEventListener("click", function(){
    operator_choice = "";
    first_number = 0;
    second_number = 0;
    result = 0;
    display_value = 0;
    screen.textContent = display_value;
});

function onEquals(){
    result = operate(first_number, second_number, operator_choice);
    operator_choice = "";
    first_number = 0;
    second_number = 0;
    display_value = result;
    screen.textContent = display_value;

}





