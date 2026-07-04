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
        }, 500); // 0.5 sec baad page open hoga
    });
});

// ===================== Technical Section =====================

const subjectCards = document.querySelectorAll(".subject-card");
const questionContainer = document.getElementById("questionContainer");
const subjectTitle = document.getElementById("subjectTitle");
const questionCount = document.getElementById("questionCount");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const searchInput = document.getElementById("searchInput");

let currentSubject = "dsa";
let visibleQuestions = 10;

const subjectNames = {
  dsa: "Data Structures & Algorithms",
  cpp: "C++",
  dbms: "Database Management System",
  os: "Operating System",
  cn: "Computer Networks",
  oops: "Object Oriented Programming",
};

renderQuestions();

// ===================== Subject Change =====================

subjectCards.forEach((card) => {
  card.addEventListener("click", () => {
    subjectCards.forEach((c) => c.classList.remove("active"));

    card.classList.add("active");
    currentSubject = card.dataset.subject;
    visibleQuestions = 10;

    renderQuestions();
  });
});

// ===================== Search =====================

searchInput.addEventListener("keyup", () => {
  visibleQuestions = 10;
  renderQuestions();
});

// ===================== Render Questions =====================

function renderQuestions() {

  questionContainer.innerHTML = "";
  let questions = questionData[currentSubject];
  const keyword = searchInput.value.toLowerCase();

  if (keyword !== "") {
    questions = questions.filter((q) =>
      q.question.toLowerCase().includes(keyword)
    );
  }

  subjectTitle.innerText = subjectNames[currentSubject];
  questionCount.innerText = "Total Questions : " + questions.length;

  const displayQuestions = questions.slice(0, visibleQuestions);

  displayQuestions.forEach((q, index) => {
    createQuestionCard(q, index + 1);
  });

  // Load More Button
  if (visibleQuestions >= questions.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "inline-block";
  }
}

// ===================== Create Question Card =====================

function createQuestionCard(question, index) {
  const card = document.createElement("div");
  card.className = "question-card fade";

  card.innerHTML = `
    <div class="question-top">
      <div>
        <div class="question-number">
          Question ${index}
        </div>

        <div class="question-title">
          ${question.question}
        </div>
      </div>

      <span class="badge ${question.difficulty.toLowerCase()}">
        ${question.difficulty}
      </span>
    </div>

    <button class="answer-btn">
      <i class="ri-arrow-down-s-line"></i>
      View Answer
    </button>

    <div class="answer">
      <p>${question.answer}</p>
    </div>
  `;

  questionContainer.appendChild(card);
}

// ===================== View / Hide Answer =====================

questionContainer.addEventListener("click", function (e) {
  const button = e.target.closest(".answer-btn");
  if (!button) return;
  const answer = button.nextElementSibling;

  if (answer.classList.contains("active")) {
    answer.classList.remove("active");
    button.innerHTML = `
      <i class="ri-arrow-down-s-line"></i>
      View Answer
    `;

  } else {
    answer.classList.add("active");
    button.innerHTML = `
      <i class="ri-arrow-up-s-line"></i>
      Hide Answer
    `;
  }
});

// ===================== Load More =====================

loadMoreBtn.addEventListener("click", () => {
  visibleQuestions += 10;
  renderQuestions();
});

// Footer top btn
const topbtn = document.getElementById('topBtn');

topbtn.addEventListener("click",(e)=>{
  e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})