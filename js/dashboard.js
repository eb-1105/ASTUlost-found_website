// js/dashboard.js

const user = JSON.parse(localStorage.getItem("currentUser"));



document.querySelector("h2").innerText = `Welcome, ${user.fullname}`;

const lostCount = JSON.parse(localStorage.getItem("lostItems")).length;
const foundCount = JSON.parse(localStorage.getItem("foundItems")).length;

document.querySelector("section div").innerHTML = `
    <p><strong>Lost Items Reported:</strong> ${lostCount}</p>
    <p><strong>Found Items Reported:</strong> ${foundCount}</p>
    <p><strong>Claims Submitted:</strong> 0</p>
`;