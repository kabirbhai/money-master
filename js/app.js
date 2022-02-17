// take input value 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseInt(inputText);
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

    // Error handle 
    if (totalCalculation.value < 0) {
        alert('Please enter a valid number')
    }
});

// saving part 
/* function saveBtn() {
    const remaineBalance = document.getElementById('total-balance')
    const remaineBalanceTotal = parseInt(remaineBalance.value)
    const saveInput = document.getElementById('save-btn');
    const saveInputText = saveInput.value;
    const saveTotal = parseInt(saveInputText)
    const remaine = saveTotal % remaineBalanceTotal;
    return remaine

}
document.getElementById('save-btn').addEventListener('click', function () {
    const remaineTotal = saveBtn()
    console.log(remaineTotal)
}) */

