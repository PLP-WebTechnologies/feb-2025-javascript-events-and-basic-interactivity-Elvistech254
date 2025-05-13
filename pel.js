document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gallery img").forEach((image) => {
    // Hover effect for zooming
    image.addEventListener("mouseover", () => {
      image.style.transform = "scale(1.1)";
    });

    image.addEventListener("mouseout", () => {
      image.style.transform = "scale(1)";
    });

    // Click effect for highlighting images
    image.addEventListener("click", () => {
      // Remove highlight from all images
      document
        .querySelectorAll(".gallery img")
        .forEach((img) => img.classList.remove("highlight"));
      // Add highlight to clicked image
      image.classList.add("highlight");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const userForm = document.getElementById("userForm");

  function validateEmail() {
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (emailPattern.test(emailInput.value)) {
      emailInput.classList.add("valid");
      emailInput.classList.remove("invalid");
    } else {
      emailInput.classList.add("invalid");
      emailInput.classList.remove("valid");
    }
  }

  function validatePassword() {
    if (passwordInput.value.length >= 8) {
      passwordInput.classList.add("valid");
      passwordInput.classList.remove("invalid");
    } else {
      passwordInput.classList.add("invalid");
      passwordInput.classList.remove("valid");
    }
  }

  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);

  userForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation testing

    if (
      emailInput.classList.contains("valid") &&
      passwordInput.classList.contains("valid")
    ) {
      alert("Form submitted successfully!");
    } else {
      alert("Please correct the errors before submitting.");
    }
  });
});
