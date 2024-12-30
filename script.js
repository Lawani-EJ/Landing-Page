function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirm-password").value;

    const nameerror = document.getElementById("fname-error");
    const emailerror = document.getElementById("emailError");
    const passworderror = document.getElementById("passwordError");
    const confirmpasswordError = document.getElementById("confirmPasswordError");



    nameerror.textContent = "";
    emailerror.textContent = "";
    passworderror.textContent = "";
    confirmpasswordError.textContent = "";

    nameerror.style.display = "none";
    emailerror.style.display = "none";
    passworderror.style.display = "none";
    confirmpasswordError.style.display = "none";

    let isValid = true;

    if (name === "") {
        nameerror.textContent = "Please enter your name";
        nameerror.style.display = "block";
        isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailerror.textContent = "Please enter a valid email address";
        emailerror.style.display = "block";
        isValid = false;
    }

    if (password === "" || password.length < 8) {
        passworderror.textContent = "Password must be at least 8 characters long";
        passworderror.style.display = "block";
        isValid = false;
    }

    if (password !== confirmpassword) {
        confirmpasswordError.textContent = "Passwords do not match";
        confirmpasswordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        handleSignupActivity();
    }
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    confirmPasswordField.type = type;
}

function handleSignupActivity() {
    alert("Sign up successful!");
    window.location.href = "./login.html";
}


function loginValidate() {
    const loginemail = document.getElementById("login-email").value.trim();
    const loginpassword = document.getElementById("login-password").value;

    const loginemailError = document.getElementById("login-emailError");
    const loginPasswordemailError = document.getElementById("login-passwordError");

    // Reset error messages
    loginemailError.textContent = "";
    loginPasswordemailError.textContent = "";
    loginemailError.classList.add("hidden");
    loginPasswordemailError.classList.add("hidden");

    let loginisValid = true;

    if (!/^\S+@\S+\.\S+$/.test(loginemail)) {
        loginemailError.textContent = "Please enter a valid email address";
        loginemailError.classList.remove("hidden");
        loginisValid = false;
    }

    if (loginpassword === "" || loginpassword.length < 8) {
        loginPasswordemailError.textContent = "Password must be at least 8 characters long";
        loginPasswordemailError.classList.remove("hidden");
        loginisValid = false;
    }

    return loginisValid; // Prevent form submission if invalid
}
