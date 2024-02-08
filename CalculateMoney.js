function calculateMoney(totalTicketsSold) {

    if (totalTicketsSold < 0) {
        return "Invalid number!! Input positive number";
    }

    let income = totalTicketsSold * 120;

    const guardCost = 500;
    let StuffCost = 8 * 50;
    const totalCost = guardCost + StuffCost;

    const remainingMoney = income - totalCost;

    return remainingMoney;
}

console.log(calculateMoney(10),'tk'); 
