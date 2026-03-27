function sendNotification(email) {
    if(email.includes("@")){

    }
    else{
        return "Invalid Email";
    }
}
const mail = sendNotification ("zihadgmail.com");
console.log(mail);

const str = "Brave new world";
console.log(str.indexOf("w"));     // Output: 8
console.log(str.indexOf("new"));   // Output: 6
console.log(str.indexOf("World")); // Output: -1 (due to case sensitivity)

