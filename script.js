// ===================== Navbar =====================

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Loader
const loader = document.getElementById("loader");

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        loader.style.display = "flex";

        setTimeout(() => {
            window.location.href = this.href;
        }, 500); 
    });
});

// ===================== How It Works =====================

const steps = document.querySelectorAll(".step");

const title = document.getElementById("cardTitle");
const description = document.getElementById("cardDescription");
const nextBtn = document.getElementById("nextBtn");
const icon = document.querySelector(".info-icon");

const titles = [
  "Register Yourself",
  "Choose Your Module",
  "Practice Daily",
  "Track Your Progress",
  "Placement Ready",
];

const descriptions = [
  "Create your account to access aptitude questions, technical interview preparation and learning resources.",

  "Choose Aptitude, Technical Interview Questions or Resources according to your preparation.",

  "Practice questions regularly to improve your speed, confidence and problem-solving skills.",

  "Track your completed topics and monitor your preparation through the dashboard.",

  "Revise everything and become fully prepared for placement interviews.",
];

const icons = [
  "ri-user-3-fill",
  "ri-book-open-fill",
  "ri-code-box-fill",
  "ri-line-chart-fill",
  "ri-trophy-fill",
];

let currentStep = 0;

function updateContent(index) {
  for (let i = 0; i < steps.length; i++) {
    steps[i].classList.remove("active");
  }

  steps[index].classList.add("active");

  title.innerText = titles[index];
  description.innerText = descriptions[index];
  icon.className = "info-icon " + icons[index];

  currentStep = index;

  if (currentStep == steps.length - 1) {
    nextBtn.innerText = "Start Again";
  } else {
    nextBtn.innerText = "Next Step →";
  }
}

for (let i = 0; i < steps.length; i++) {
  steps[i].addEventListener("click", function () {
    updateContent(i);
  });
}

// Next Button
nextBtn.addEventListener("click", function () {
  currentStep++;
  if (currentStep >= steps.length) {
    currentStep = 0;
  }
  updateContent(currentStep);
});

updateContent(0);


const topbtn = document.getElementById('topBtn');

topbtn.addEventListener("click",(e)=>{
  e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})