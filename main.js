const getButtons = document.getElementsByClassName('btn');
getButtons.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const getEmails = document.getElementById('email');
  const getErrorMessages = document.getElementsByClassName('error-msg')[0];
  const emailChecker =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 

  if (!getEmails.value) {
    getErrorMessages.classList.add("visible");
    getErrorMessages.textContent = "Please check your email";
   
  } else if (getEmails.value.match(emailChecker)) {
    getErrorMessages.textContent = "Cool beans!";
  } 
}

