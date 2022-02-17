// assign the varible 
const myIncome = document.getElementById('my-income');
const food = document.getElementById('food-input');
const rent = document.getElementById('rent-input');
const other = document.getElementById('other-input');
const expenses = document.getElementById('total-expenses');
const myBalance = document.getElementById('total-balance');


// event handaler 
document.getElementById('calculater').addEventListener('click', function () {
    // facth the value and parse this to a number 
    const newFood = parseInt(food.value);
    const newRent = parseInt(rent.value);
    const newOther = parseInt(other.value);
    const newIncome = parseInt(myIncome.value);
    // set and Append
    const totalIncome = newIncome;
    myBalance.innerText = totalIncome;
    const totalExpenses = newFood + newRent + newOther;
    expenses.innerText = totalExpenses;
    // clear input fild 
    totalExpenses.value = '';
});