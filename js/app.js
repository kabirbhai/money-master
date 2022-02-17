// assign the varible 
/* const myIncome = document.getElementById('my-income');
const food = document.getElementById('food-input');
const rent = document.getElementById('rent-input');
const other = document.getElementById('other-input');
const expenses = document.getElementById('total-expenses');
const myBalance = document.getElementById('total-balance'); */



function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseInt(inputText);
    inputField.value = '';
    return inputAmount;
}

// function 2
// function updateTotal(updateTotal) {
//     const balanceTotal = document.getElementById('my-income');
//     const balanceText = balanceTotal.value;
//     const balanceAmount = parseInt(balanceText);
// }

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
    const setBalance = document.getElementById('total-balance').innerText = balance - totalCalculation;
    // setBalance.innerText = totalCalculation - setBalance;


});
// event handaler
/* document.getElementById('calculater').addEventListener('click', function () {
    // facth the value and parse this to a number 
    const newFood = parseInt(food.value);
    const newRent = parseInt(rent.value);
    const newOther = parseInt(other.value);
    const newIncome = parseInt(myIncome.value);
    // set and Append
    const totalIncome = newIncome;
    const totalExpenses = newFood + newRent + newOther;
    expenses.innerText = totalExpenses;

    // error massages 

    // minus balance
    const balance = totalIncome - totalExpenses;
    myBalance.innerText = balance;

    // clear input fild 
    food.value = '';
    rent.value = '';
    other.value = '';
}); */