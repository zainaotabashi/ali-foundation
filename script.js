const btn = document.getElementById("volunteerBtn");
const form = document.getElementById("volunteerForm");

btn.addEventListener("click", () => {
    form.classList.toggle("hidden");
});

document.getElementById("submitForm").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    alert("Thank you, " + name + "! We will contact you soon.");
});
