import skills from "../data/skills-data.js";
import projects from "../data/projects-data.js";
/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".about-img, .home h1", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);
/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: ["Full stack Developer", "Software Engineer", "Teccher"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ################## Dark-light mode ##############
const darkBtn = document.querySelector(".dark-light-btn");
darkBtn.addEventListener("click", () => {
  if (darkBtn.classList.contains("light")) {
    document.body.style.removeProperty("--bg-color");
    document.body.style.removeProperty("--second-bg-color");
    document.body.style.removeProperty("--text-color");
    document.body.style.removeProperty("--main-color;");
    darkBtn.innerHTML = "&#9788;";
    darkBtn.classList.remove("light");
  } else {
    document.body.style =
      "  --bg-color: #fff; --second-bg-color: #f4f4f4; --text-color: #333; --main-color: #f4880c;";
    darkBtn.innerHTML = "&#9790;";
    darkBtn.classList.add("light");
  }
});

// ######### add skills data #########
const skillsContainer = document.querySelector(".skills-container");
skills.forEach((skill) => {
  const markup = `<div class="skill-box">
  <div class="skill-name">${skill.name}</div>
  <div class="skill-par" style="--percentage: ${skill.percentage}" per="${skill.percentage}"></div>
  </div>`;
  skillsContainer.insertAdjacentHTML("beforeend", markup);
});

// ################# add projects data ###########

const projectsContainer = document.querySelector(".portfolio-container");
projects.forEach((project) => {
  const markup = `<div class="portfolio__box">
  <div class="portfolio__image">
    <img src="./images/projects/${project.image}" alt="${project.name}" />
  </div>
  <div class="portfolio__info">
    <h3>${project.name}</h3>
    <a href="${project.githubLink}" target="_blank"
      ><span><i class="bx bxl-github"></i></span
      ><span>Github Repository</span></a
    >
    <a href="${project.previewLink}" target="_blank"
      ><span><i class="bx bx-world"></i></span><span>privew</span></a
    >
  </div>
</div>`;
  projectsContainer.insertAdjacentHTML("beforeend", markup);
});
