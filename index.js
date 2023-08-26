const error=document.getElementById("error-message");
const error1=document.getElementById("error-message1");
const error2=document.getElementById("error-message2");
const signbtn=document.getElementById("submit");
const logoutbtn=document.getElementById("submit1");
const signup=document.getElementById("signup");
const profile=document.getElementById("profile");
function callme(){
    const fullname=document.getElementById("fullname").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const conpas=document.getElementById("confirm-password").value;
    if(password!==conpas){
        showerror("password not matching");
    }
    if(!fullname||!email||!password||!conpas){
    finderror("Error:All the fields are mandatory");
    }
    else{
        errormes("successfully signedup!");
    }
}
signbtn.addEventListener("click",callme);
function showerror(message){
    document.getElementById("error-message").innerText=message;
//     document.getElementById("error-message1").style.display="none";
//  document.getElementById("error-message2").style.display="none";
// error1.style.display="none";
// error2.style.display="none";
}
 function finderror(message){
    document.getElementById("error-message1").innerText=message;
    // document.getElementById("error-message").style.display="none";
    // document.getElementById("error-message2").style.display="none";
//     // error.style.display="none";
//     // error2.style.display="none";
 }
function errormes(message){
    document.getElementById("error-message2").innerText=message;
//    document.getElementById("error-message1").style.display="none";
//    document.getElementById("error-message").style.display="none";
//     // error1.style.display="none";
//     // error.style.display="none";
}
logoutbtn.addEventListener("click",()=>{
    fullname.innerText="";
    email.innerText="";
    password.innerText="";
})
profile.addEventListener("click",()=>{
    document.getElementById("main").style.display="none";
    document.getElementById("main1").style.display="block";
})
signup.addEventListener("click",()=>{
    document.getElementById("main1").style.display="none";
    document.getElementById("main").style.display="block";
})