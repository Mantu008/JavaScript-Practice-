const toggleBtn = document.querySelector(".more__mogo__btn");
const sidebar = document.querySelector(".calculator-sidebar");
const app = document.querySelector(".app");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active"); // show/hide sidebar
    app.classList.toggle("sidebar-open"); // adjust layout
});
