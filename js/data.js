// js/data.js

// Initialize storage if not exists
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

if (!localStorage.getItem("lostItems")) {
    localStorage.setItem("lostItems", JSON.stringify([]));
}

if (!localStorage.getItem("foundItems")) {
    localStorage.setItem("foundItems", JSON.stringify([]));
}

if (!localStorage.getItem("currentUser")) {
    localStorage.setItem("currentUser", null);
}
const items = [
    { id: 1, name: "Calculus Textbook", category: "Book", type: "lost", location: "Block 402", date: "2026-02-15", description: "Blue cover, name 'Abdi' written inside." },
    { id: 2, name: "Samsung Galaxy S21", category: "Electronics", type: "found", location: "Student Lounge", date: "2026-02-18", description: "Black case, cracked screen protector." },
    { id: 3, name: "Student ID Card", category: "ID Card", type: "found", location: "Library", date: "2026-02-20", description: "Found near the entrance." },
    { id: 4, name: "Scientific Calculator", category: "Electronics", type: "lost", location: "Cafeteria", date: "2026-02-10", description: "Casio fx-991EX." }
];