// Menu Toggle for mobile view
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  const close = document.getElementById("close-menu");

  if (toggle && nav && close) {
    toggle.addEventListener("click", () => {
      nav.classList.add("active");
    });

    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
});

// Accrodion FAQS
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    const parent = q.parentElement;
    const isActive = parent.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
      item
        .querySelector(".icon")
        .classList.replace("fa-caret-up", "fa-caret-down");
    });

    if (!isActive) {
      parent.classList.add("active");
      q.querySelector(".icon").classList.replace(
        "fa-caret-down",
        "fa-caret-up"
      );
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.getElementById("stat-years").innerHTML = 42;
      document.getElementById("stat-members").innerHTML = 73;
      document.getElementById("stat-projects").innerHTML = 5000;
      observer.disconnect();
    }
  });
});

observer.observe(document.querySelector(".stats-row"));

// Logo Swiper Carousel
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 768) {
    new Swiper(".logoSwiper", {
      slidesPerView: 5,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      spaceBetween: 32,
      freeMode: true,
      freeModeMomentum: false,
      allowTouchMove: false,

      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 26,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 32,
        },
      },
    });
  }
});


// Team Testimonial Carousel
document.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  const teamGridWrapper = document.querySelector(".team-grid-wrapper");
  const pins = document.querySelectorAll(".pin");

  const scrollAmount = teamGridWrapper.offsetWidth * 0.8;

  leftArrow.addEventListener("click", () => {
    teamGridWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    teamGridWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  function updatePins() {
    const scrollLeft = teamGridWrapper.scrollLeft;
    const totalScrollWidth =
      teamGridWrapper.scrollWidth - teamGridWrapper.clientWidth;

    const numPages = pins.length;
    const currentIndex = Math.round(
      (scrollLeft / totalScrollWidth) * (numPages - 1)
    );

    pins.forEach((pin, index) => {
      pin.classList.toggle("active", index === currentIndex);
    });
  }

  teamGridWrapper.addEventListener("scroll", () => {
    requestAnimationFrame(updatePins);
  });

  updatePins();
});

// Portfolio sorting
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".portfolio-tabs button");
  const select = document.getElementById("portfolioSelect");
  const items = document.querySelectorAll(".portfolio-item");

  function filterPortfolio(tag) {
    items.forEach((item) => {
      const itemTag = item.getAttribute("data-tag");
      if (tag === "all" || itemTag === tag) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-tag");

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      filterPortfolio(tag);
    });
  });

  select.addEventListener("change", () => {
    const tag = select.value;
    filterPortfolio(tag);
  });

  filterPortfolio("all");
});

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!subject) {
      alert("Subject is required.");
      return;
    }

    if (!message || message.length < 10) {
      alert("Message must be at least 10 characters.");
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
