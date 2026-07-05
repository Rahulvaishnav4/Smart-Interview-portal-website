const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const studyButton = document.getElementById("studyButton");
const navItems = document.querySelectorAll(".nav-item");

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
    sidebar.classList.remove("open");
  });
});

studyButton.addEventListener("click", () => {
  studyButton.textContent = "Preparation started";
});
