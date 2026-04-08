// Smooth Scrolling
document.querySelectorAll("nav a").forEach((link) => {
  link.onclick = (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };
});

// Simple Log for testing
console.log("Habakkuk's Portfolio Loaded Successfully");
