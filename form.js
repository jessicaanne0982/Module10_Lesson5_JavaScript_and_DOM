// Task 3 - Form Validation to ensure all fields are filled in before submission

function validateForm() {
    let formName = document.forms["contactForm"]["name"].value;
    let formEmail = document.forms["contactForm"]["email"].value;
    let formComments = document.forms["contactForm"]["comments"].value;
    if (formName == "") {
      alert("Name must be filled out");
      return false;
    }
    if (formEmail == "") {
        alert("Email must be filled out");
        return false;
      }
      if (formComments == "") {
        alert("Comments must be filled out");
        return false;
      }

    return true; 
  }

function submitForm() {
    // create an object to store user submission in
    let userSubmission = {};

    // store the form data
    userSubmission.name = document.getElementById("name").value;
    userSubmission.email = document.getElementById("email").value;
    userSubmission.comments = document.getElementById("comments").value;
    
    // print to console to ensure it's working properly
    console.log(userSubmission);

    // Give the user an alert that their form was successfully submitted
    alert("Hello, " + userSubmission.name + "! Your form was submitted successfully.");
}

function handleSubmit(event) {
    event.preventDefault();

    // Checks if the form validates before running the submitForm function
    if (validateForm()) {
        submitForm();

    // reset the form after it's been successfully submitted
    document.getElementById("contactForm").reset();
    }
}
