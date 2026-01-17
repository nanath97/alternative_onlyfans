// Mobile menu
const burger = document.getElementById("burger");
const mobile = document.getElementById("mobile");

burger?.addEventListener("click", () => {
  const open = mobile.style.display === "block";
  mobile.style.display = open ? "none" : "block";
});

// Pricing toggle (monthly/yearly)
const monthlyBtn = document.getElementById("monthly");
const yearlyBtn = document.getElementById("yearly");

function setBilling(mode) {
  document.querySelectorAll(".val[data-month][data-year]").forEach((el) => {
    el.textContent = mode === "year" ? el.dataset.year : el.dataset.month;
  });
  document.querySelectorAll("[data-unit]").forEach((el) => {
    el.textContent = mode === "year" ? "an" : "mois";
  });
  monthlyBtn?.classList.toggle("active", mode !== "year");
  yearlyBtn?.classList.toggle("active", mode === "year");
}

monthlyBtn?.addEventListener("click", () => setBilling("month"));
yearlyBtn?.addEventListener("click", () => setBilling("year"));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
