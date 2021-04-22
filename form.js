
const myFrom = document.forms[0];
let flag = false;

myFrom.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nameVal =document.getElementById("name").value;
    const emailVal =document.getElementById("email").value;
    const passVal=document.getElementById("password").value;
    validationFormData(nameVal,emailVal,passVal);
});

function validationFormData(name,email,password){
    userValidation(name);
    emailValidation(email);
    passwordValidation(password);
    if(flag){
        console.log('Name:'+name,'Email:'+email,'Password:'+password);
    }
    
}

function userValidation(username)
{
  var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (username == ''){
    document.getElementById("nameErrorMsg").innerHTML = "Name must not be empty";
      return false;
  } else if(username != '') {    
    if( username.match(format)){
        document.getElementById("nameErrorMsg").innerHTML = "Name must not contain any symbols";
      return false;
    }else if (username.length < 3){
        document.getElementById("nameErrorMsg").innerHTML = "Name must contain at least 3 characters";
      return false;
    }else if (username.length > 10){
        document.getElementById("nameErrorMsg").innerHTML = "Name must not exceed 10 characters";
      return false;
    }else{
        document.getElementById("nameErrorMsg").innerHTML="";
      return true;
    }
  }
}

function emailValidation(emailValue)
{
  var format=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  if (emailValue == ''){
    document.getElementById("emailErrorMsg").innerHTML = "Email must not be empty";
      return false;
  }else if(emailValue != ''){
    if (!format.test(emailValue)){
        document.getElementById("emailErrorMsg").innerHTML = "Invalid Email Address";
        return false;
      } else {
        document.getElementById("emailErrorMsg").innerHTML="";
        return true;
    }
  }

}

function passwordValidation(password){
    if (password == ''){
        document.getElementById("passwordErrorMsg").innerHTML = "Password must not be empty";
          return false;
      }else if(password != ""){
        if ((password.length < 8 )){
            document.getElementById("passwordErrorMsg").innerHTML = "Password must be  atleast 8  characters";
          return false;
        }else{
    
          document.getElementById("passwordErrorMsg").innerHTML="";
          flag= true;
          return true;
        }
      }

}