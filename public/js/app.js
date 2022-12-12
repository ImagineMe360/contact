const contactForm = document.querySelector(".form-contact");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// console.log(contactForm);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email Sent Successfully");
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else {
      alert("Something Went Wrong");
    }
  };
  xhr.send(JSON.stringify(formData));
});
