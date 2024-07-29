function change(event, element) {
    event.preventDefault(); // Prevent the default behavior of anchor tags to avoid page reload
    var sectionId = element.getAttribute("href").substring(1); // Get the id of the section to navigate
    var section = document.getElementById(sectionId);
    
    section.scrollIntoView({behavior: "smooth"}); // Scroll to the section smoothly
}

let slideIndex = 1;

// Function to show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Function to move slides forward or backward
function plusSlides(n) {
    showSlides(slideIndex += n);
}
showSlides(slideIndex);







// function handleSubmit() {
//     // Show a pop-up message
//     alert('Form submitted successfully!');

//     // Optionally, reset the form fields after submission
//     document.getElementById('contact-form').reset();
// }


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
        // If form validation passes, show the success message
        document.getElementById("success-message").style.display = "block";
        // You can also submit the form data to the server here if needed
    }
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var messageError = document.getElementById("messageError");

    var valid = true;

    // Name validation
    if (name.trim() === "") {
        nameError.innerHTML = "Name is required";
        valid = false;
    } else {
        nameError.innerHTML = "";
    }

    // Email validation
    if (email.trim() === "") {
        emailError.innerHTML = "Email is required";
        valid = false;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Invalid email format";
        valid = false;
    } else {
        emailError.innerHTML = "";
    }

    // Phone validation
    if (phone.trim() === "") {
        phoneError.innerHTML = "Phone number is required";
        valid = false;
    } else {
        phoneError.innerHTML = "";
    }

    // Message validation
    if (message.trim() === "") {
        messageError.innerHTML = "Message is required";
        valid = false;
    } else {
        messageError.innerHTML = "";
    }

    return valid;
}

function isValidEmail(email) {
    // Very basic email validation regex, you can replace it with more sophisticated ones
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
