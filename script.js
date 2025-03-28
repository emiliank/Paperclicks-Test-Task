document.addEventListener("DOMContentLoaded", () => {
    const timeSelect = document.getElementById("time-select");
    const continueBtn = document.getElementById("continue-btn");

    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const step3 = document.getElementById("step-3");

    const submitBtnStep2 = document.getElementById("submit-btn-step-2");
    const consentCheckbox = document.getElementById("consent");

    let selectedTime = "";

    
    timeSelect.addEventListener("change", () => {
        if (timeSelect.value) {
            continueBtn.classList.add("enabled");
            continueBtn.disabled = false;
        } else {
            continueBtn.classList.remove("enabled");
            continueBtn.disabled = true;
        }
    });

    
    continueBtn.addEventListener("click", () => {
        selectedTime = timeSelect.value;
        if (selectedTime) {
            step1.style.display = "none";
            step2.style.display = "block";
        } else {
            alert("Please choose a time.");
        }
    });

    
    function checkFormCompletion() {
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phone-number").value.trim();

        if (firstName && lastName && email && phoneNumber && consentCheckbox.checked) {
            submitBtnStep2.disabled = false;
            submitBtnStep2.classList.add("enabled");
        } else {
            submitBtnStep2.disabled = true;
            submitBtnStep2.classList.remove("enabled");
        }
    }

    
    document.querySelectorAll("#personal-details-form input").forEach((input) => {
        input.addEventListener("input", checkFormCompletion);
    });
    consentCheckbox.addEventListener("change", checkFormCompletion);

    
    submitBtnStep2.addEventListener("click", (e) => {
        e.preventDefault(); 

        if (!consentCheckbox.checked) {
            alert("You must agree to the terms before continuing.");
            return;
        }

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phone-number").value;

        if (firstName && lastName && email && phoneNumber) {
            document.getElementById("selected-time").textContent = `Best time to reach you: ${selectedTime}`;
            document.getElementById("user-name").textContent = `Name: ${firstName} ${lastName}`;
            document.getElementById("user-email").textContent = `Email: ${email}`;
            document.getElementById("user-phone").textContent = `Phone: ${phoneNumber}`;

            step2.style.display = "none";
            step3.style.display = "block";
        } else {
            alert("Please fill out all fields.");
        }
    });
});
