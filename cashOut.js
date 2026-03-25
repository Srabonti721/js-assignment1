function cashOut(money) {
    if (typeof money !== "number" || money < 0) {
        return "invalid";
    }
    const total = money * 1.75 / 100;
    return total;
}
const total = cashOut(-300);
console.log(total);
