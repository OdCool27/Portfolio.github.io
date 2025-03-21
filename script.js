document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementsByName("contactForm")[0];
    const emailInput = document.getElementsByName("email")[0];
    const teleInput = document.getElementsByName("telephone")[0];

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateTelephone(telephone) {
        return /^\d{10,}$/.test(telephone);
    }

    function showError(input) {
        input.classList.add("error");
        input.classList.remove("success", "neutral");
    }

    function showSuccess(input) {
        input.classList.add("success");
        input.classList.remove("error", "neutral");
    }

    function resetState(input) {
        input.classList.remove("error", "success");
    }

    // Real-time validation event listeners
    emailInput.addEventListener("input", function () {
        const emailValue = emailInput.value.trim();
        if (emailValue === "") {
            resetState(emailInput); // Reset to original if empty
        } else if (!validateEmail(emailValue)) {
            showError(emailInput);
        } else {
            showSuccess(emailInput);
        }
    });

    teleInput.addEventListener("input", function () {
        const teleValue = teleInput.value.trim();
        if (teleValue === "") {
            resetState(teleInput); // Reset to original if empty
        } else if (!validateTelephone(teleValue)) {
            showError(teleInput);
        } else {
            showSuccess(teleInput);
        }
    });

    // Prevent form submission if validation fails
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailValue = emailInput.value.trim();
        const teleValue = teleInput.value.trim();

        if (emailValue === "") {
            resetState(emailInput);
        } else if (!validateEmail(emailValue)) {
            showError(emailInput);
        } else {
            showSuccess(emailInput);
        }

        if (teleValue === "") {
            resetState(teleInput);
        } else if (!validateTelephone(teleValue)) {
            showError(teleInput);
        } else {
            showSuccess(teleInput);
        }
    });
});
