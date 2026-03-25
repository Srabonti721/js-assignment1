function validEmail (email){
    console.log(email.length);
    console.log(email.length-8);
    if(email.slice(-4) === ".com"){
        return true;
    }
    else{
        return false;
    }
}
const mail = validEmail("Mewo@cat.com");
console.log(mail);