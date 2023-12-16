document.getElementById('btn-widthdrow').addEventListener('click', function () {
    const widtdrowField = document.getElementById('widthdrow-field');
    const newWidthdrowAmountString = widtdrowField.value;
    const newWidthdrowAmount = parseFloat(newWidthdrowAmountString);
    if (isNaN(newWidthdrowAmount)) {
        alert('Please Provide a valid number');
        return;
    }

    const widthdrowTotalElement = document.getElementById('widthdrow-total');
    const widthdrowTotalString = widthdrowTotalElement.innerText;
    const previousWidthdrowAmount = parseFloat(widthdrowTotalString);

    widtdrowField.value = '';

    const balanceTotalElement = document.getElementById('total-balance')
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    if (newWidthdrowAmount > balanceTotal) {
        alert('Baap er bank a ato tk nai !');
        return;
    }

    const currentWidthdrowTotal = previousWidthdrowAmount + newWidthdrowAmount;
    widthdrowTotalElement.innerText = currentWidthdrowTotal;

    const currentBalanceTotal = balanceTotal - newWidthdrowAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})