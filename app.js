const buttons = document.querySelectorAll("button");
const inputField = document.querySelector("input");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if(buttonValue === "C"){
            inputField.value = "";
        }
        else if(buttonValue === "X"){
            inputField.value = inputField.value.toString().slice(0, -1);
        }
        else if(buttonValue === "="){
            inputField.value = eval(inputField.value);
        }else{
            inputField.value += buttonValue;
        }
    })
})
