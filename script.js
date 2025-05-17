const filterButtons = document.querySelectorAll(".skills button");
const projects = document.querySelectorAll(".repo");

// Set "ALL" button as active by default
filterButtons.forEach((button) => {
  if (button.textContent === "ALL") {
    button.classList.add("active");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.textContent;

    projects.forEach((project) => {
      const category = project.querySelector(".name h4").textContent;

      if (filter === "ALL" || filter === category) {
        project.style.display = "";
      } else {
        project.style.display = "none";
      }
    });

    // Optional: Add an active class to highlight the selected filter
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});