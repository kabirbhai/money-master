// take input value 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseInt(inputText);
    // Error handle 
    if (inputField.value < 0) {
        alert('please enter a valid number')
    }
    inputField.value = '';
    return inputAmount;
}
// event handler 
document.getElementById('calculater').addEventListener('click', function () {
    const food = getInputValue('food-input')
    const rent = getInputValue('rent-input')
    const other = getInputValue('other-input')
    const totalCalculation = food + rent + other;

    // withOut function 
    const myIncome = document.getElementById('my-income');
    const myIncomeText = myIncome.value;
    const myIncomeTotal = parseInt(myIncomeText);
    const balance = document.getElementById('total-expenses').innerText = myIncomeTotal;
    const setBalance = document.getElementById('total-balance')
    setBalance.innerText = balance - totalCalculation;
});

// saving part 
document.getElementById('save-btn').addEventListener('click', function () {
    console.log('clicked')
})

