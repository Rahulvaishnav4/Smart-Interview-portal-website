// Query form with database connection
const form = document.getElementById("queryForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const queryData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    category: document.getElementById("category").value,
    question: document.getElementById("question").value,
  };

  // By default
  successMsg.style.display = "block";
  form.reset();

  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);

  // Try to save in database
  try {
    await fetch("http://localhost:3000/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryData),
    });
  } catch (err) {
    console.log("Server not running. Data not saved.");
  }
});
