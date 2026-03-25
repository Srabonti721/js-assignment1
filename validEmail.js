function validEmail(email) {
     if (typeof email !== "string") {
          return "Invalid";
     }
     else if (email[0] === "@" || email[0] === "+" || email[0] === "." || email[0] === "-" || email.includes(" ")) {
          return false;
     }
     else {
          if (email.includes("@") && email.slice(-4) === ".com") {
               return true;
          }
          else {
               return false;
          }
     }
}
const mail = validEmail("he ro@alom.com");
console.log(mail);



