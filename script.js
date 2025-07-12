const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const ctx = document.getElementById("donutChart").getContext("2d");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [
      "Healthy Food",
      "Pure Water",
      "Medicine",
      "Feeding the Poor",
      "Excursions",
    ],
    datasets: [
      {
        data: [37, 17, 20, 12, 13],
        backgroundColor: [
          "#2e7d32",
          "#fbc02d",
          "#f57c00",
          "#aed581",
          "#ffcc80",
        ],
        borderWidth: 0,
        cutout: "60%",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") contactModal.style.display = "none";
});

const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == contactModal) {
    contactModal.style.display = "none";
  }
});

const counters = document.querySelectorAll(".count");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = Math.ceil(target / 1000); // Speed

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 20); // Delay
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

const translations = {
  en: {
    "logo-title": "Unity in Action",
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-donations": "Donations",
    "nav-campaigns": "Campaigns",
    "nav-blogs": "Blogs",
    "nav-contact": "Contact Us",
    "donate-btn": "Donate Now",
  },
  hi: {
    "logo-title": "एकता में शक्ति",
    "nav-home": "मुखपृष्ठ",
    "nav-about": "हमारे बारे में",
    "nav-donations": "दान",
    "nav-campaigns": "अभियान",
    "nav-blogs": "ब्लॉग्स",
    "nav-contact": "संपर्क करें",
    "donate-btn": "अब दान करें",
  },
};

const switchLanguage = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
};

// Load saved language or default to English
const savedLang = localStorage.getItem("selectedLang") || "en";
switchLanguage(savedLang);
document.getElementById("languageSwitcher").value = savedLang;

// Update on change + save to localStorage
document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  const lang = e.target.value;
  switchLanguage(lang);
  localStorage.setItem("selectedLang", lang);
});
