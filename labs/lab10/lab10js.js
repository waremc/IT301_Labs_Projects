let bill;
let message = 'Please enter the total restaurant bill amount:';

do {
    bill = Number(prompt(message));
    console.log('typeof bill: ' + typeof bill);

    if (isNaN(bill)) {
        message = 'Please enter the total restaurant bill amount (a valid number):';
    } else if (bill < 0) {
        message = 'Please enter the total restaurant bill amount (negative values are not allowed):';
    } else if (bill == 0) {
        message = 'Please enter the total restaurant bill amount (an amount greater than zero):';
    }
} while (bill <= 0 || isNaN(bill));

let tip = bill * 0.10;

console.log('For a bill of $' + bill.toFixed(2) + ', a 10% tip would be $' + tip.toFixed(2) + '.');
document.write('For a bill of $' + bill.toFixed(2) + ', a 10% tip would be $' + tip.toFixed(2) + '.');
