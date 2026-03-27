function sendNotification(email) {
    if (email.includes("@")) {
        const splitEmail = email.split("@");
        const newEmail = splitEmail[0] + "  sent you an email from " + splitEmail[1];
        return newEmail;
    }
    else {
        return "Invalid Email";
    }
}
const mail = sendNotification("farhan@34yahoo123.com");
console.log(mail);
