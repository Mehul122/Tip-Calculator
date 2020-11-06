const form = document.getElementById('calculator');
form.onsubmit = function(event)
{
    event.preventDefault();
    let howMuch = document.getElementById('bill');
    let tipAmount = document.getElementById('percentage');
    let customerNum = document.getElementById('customer-num');

    let totalBill = document.getElementById('total-bill');
    let totalPercentage = document.getElementById('total-percentage');
    let totalPerCustomer = document.getElementById('total-per-customer');


    let cost = parseFloat(howMuch.value);
    let customers = parseInt(customerNum.value);

    let percentage = 0;
    if(tipAmount.value != '')
    {
        percentage = parseInt(tipAmount.value);
    }


    let percentageAmount = calculatePercentageAmount(cost, percentage);
    totalPercentage.value = percentageAmount;


    let totalValue = calculateTotal(cost, percentageAmount);
    totalBill.value = totalValue;


    totalPerCustomer.value = calculatePerCustomer(totalValue, customers);


    return false;
}

function calculatePercentageAmount(cost, percentage)
{
    return Math.round((cost/100) * percentage);
}


function calculateTotal(cost, percentageAmount)
{
    return Math.round((cost + percentageAmount));
}

function calculatePerCustomer(totalValue, customers)
{
    return (totalValue / customers);
}