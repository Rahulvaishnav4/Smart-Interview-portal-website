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

// search resources

const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function () {
  let value = search.value.toLowerCase();

  cards.forEach((card) => {
    let text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


// Small Card Hover Effect

const smallCards = document.querySelectorAll(".small-card");

smallCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 25px rgba(37,99,235,.25)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 10px rgba(0,0,0,.08)";
  });
});

const topbtn = document.getElementById('topBtn');

topbtn.addEventListener("click",(e)=>{
  e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})