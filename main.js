const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const form = document.getElementById("divingBookingForm");
  const successState = document.getElementById("modalSuccessState");

  const dateInput = document.getElementById("modalDate");
  if(dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  window.openBookingModal = () => {
    form.style.display = "flex";
    successState.classList.remove("active");
    form.reset();
    
    modal.classList.add("modal-active");
  };

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("modal-active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("modal-active");
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    form.style.display = "none";
    successState.classList.add("active");
   
    setTimeout(() => {
       modal.classList.remove("modal-active");
    }, 4500);
  });
});