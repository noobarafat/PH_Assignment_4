function monthlySavings(payments, livingCost) {

    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input"
    }

    let totalIncome = 0;
    for (let payment of payments) {
        if (payment >= 3000) {
            totalIncome += payment * 0.8;
        } else {
            totalIncome += payment;
        }
    }

    let savings = totalIncome - livingCost;

    if (savings < 0) {
        return "earn more";
    }

    return savings;
}

const Payments = [900, 2700, 3400];
const livingCost = 10000;
console.log(monthlySavings(Payments, livingCost)); 
