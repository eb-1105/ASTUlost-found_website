// js/auth.js

// REGISTER
const registerForm = document.querySelector("form");

if (registerForm && window.location.pathname.includes("register")) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullname = document.getElementById("fullname").value;
        const studentId = document.getElementById("studentId").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirmPassword").value;

        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users"));

        users.push({
            fullname,
            studentId,
            email,
            password,
            role: "student"
        });

        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        window.location.href = "index.html";
    });
}

// LOGIN
const loginForm = document.querySelector("form");

if (loginForm && window.location.pathname.endsWith("index.html")) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const users = JSON.parse(localStorage.getItem("users"));
        const user = users.find(
            u => u.email === email && u.password === password
        );

        if (!user) {
            alert("Invalid credentials");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        if (user.role === "admin") {
            window.location.href = "admin/admin-dashboard.html";
        } else {
            window.location.href = "dashboard.html";
        }
    });
}