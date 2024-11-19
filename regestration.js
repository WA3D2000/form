let email = document.getElementById("em");
let fn = document.getElementById("FN");
function validEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    email.match(emailPattern)}

email.addEventListener("mouseenter", () => {
    const emailValue = email.value;
    if (validEmail(emailValue)) {
        console.log("Valid email address");
    }
});
let password =document.getElementById("ps");
password.addEventListener("mouseenter", () => {
    const passwordValue = password.value; 
    const passwordLength = 6;

    if (passwordValue.length < passwordLength) {
        console.log("You should enter at least 6 characters");
    }
});
let submition=document.getElementById("sub")
submition.addEventListener("click", () => {
         localStorage.setItem(email,password,fn)

});

