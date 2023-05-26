function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    var errorMessages = [];
  
    if (name === "") {
      errorMessages.push("Name is required.");
    }
  
    if (email === "") {
      errorMessages.push("Email is required.");
    } else if (!isValidEmail(email)) {
      errorMessages.push("Invalid email format.");
    }
  
    if (phone === "") {
      errorMessages.push("Phone is required.");
    } else if (!isValidPhone(phone)) {
      errorMessages.push("Invalid phone number format.");
    }
  
    if (message === "") {
      errorMessages.push("Message is required.");
    }
  
    if (errorMessages.length > 0) {
      showErrors(errorMessages);
      return false;
    }
  
    return true;
  }
  
  function isValidEmail(email) {
    // Simple email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
    // Phone number validation using regex
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  
  function showErrors(errors) {
    var errorDiv = document.createElement("div");
    errorDiv.className = "error";
  
    var errorList = document.createElement("ul");
    errors.forEach(function (error) {
      var errorItem = document.createElement("li");
      errorItem.textContent = error;
      errorList.appendChild(errorItem);
    });
  
    errorDiv.appendChild(errorList);
  
    var form = document.getElementById("contactForm");
    form.parentNode.insertBefore(errorDiv, form);
  }
  
  function submitForm() {
    var form = document.getElementById("contactForm");
    form.submit();
  }
  