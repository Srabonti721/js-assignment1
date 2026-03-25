function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input"
    }
    else {
        const mothIncome = income;
        const mothExpense = expenses;
        const mothTotal = mothIncome - mothExpense;
        const tex = mothTotal * 0.20;
        return tex;
    }
}
const total = calculateTax(6000, -1500);
console.log(total);
