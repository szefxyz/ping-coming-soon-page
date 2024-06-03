const formElement = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  validationEmail();
});

const validationEmail = () => {
  const regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

  if (!email.value.match(regex)) {
    errorMsg.innerHTML = "Please provide a valid email address";
    email.style.borderColor = "red";
    return false;
  } else {
    errorMsg.innerHTML = "";
    email.value = "";
    return true;
  }
};
