function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    console.log(modal);
    const bg = document.querySelector(".bg-image");
    bg.style.display = "block";
    document.getElementById("form").reset();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    const bg = document.querySelector(".bg-image");
    bg.style.display = "none";
}




function verifName (value) {
    const regex = /^[a-zA-Z_.+-]*(?:[a-zA-Z][a-zA-Z_.+-]*){2,}$/g;
    if (regex.test(value)) {
      return true;
    }
    else {
      return false;
    }
};

function verifEmail(value) {
  const EMAIL_REGEX = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "i");
  if (EMAIL_REGEX.test(value)) {
    return true;
  }
  else {
    return false;
  }
}

let emailValue = document.getElementById("email").value;
let firstNameValue = document.getElementById("firstName").value;
let lastNameValue = document.getElementById("lastName").value;
let allValues = [firstNameValue, lastNameValue, emailValue];

function allVerifs(allVerifs) {
  
  emailValue = document.getElementById("email").value;
  firstNameValue = document.getElementById("firstName").value;
  lastNameValue = document.getElementById("lastName").value;
  allValues = [firstNameValue, lastNameValue, emailValue];

  allVerifs = [verifEmail(emailValue), verifName(firstNameValue), verifName(lastNameValue)]
  if (allVerifs.includes(false)) {
    return false;
  }
  else {
    return true;
  }
};

console.log(verifEmail(emailValue));
console.log(allVerifs());

function submitForm (event) {
  const messValue = document.getElementById("message-input").value;
  event.preventDefault();
  if (allVerifs(allValues)) {
    closeModal();
    console.log(allValues);
    console.log(messValue);
  }
  else {
    window.alert("Veuillez indiquer votre nom, prénom et adresse mail")
  }
}