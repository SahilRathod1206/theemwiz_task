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
