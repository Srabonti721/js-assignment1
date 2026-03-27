function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input"
    }
    else {
        for (let i = 0; i < name.length; i++) {
            if (name[i] >= "0" && name[i] <= "9") {
                return true;
            }
        }
        return false;
    }
}
const yourName = checkDigitsInName("name");
console.log(yourName);