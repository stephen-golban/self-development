// colors
const redColor = "#FE3E57";
const whiteColor = "#FFFFFE";

// constants
const heroTextSpan = baffle("#text--skills");

const currentYear = document.querySelector("#current-year");
const scrollTopButton = document.querySelector(".fa-angle-up");

const aboutMenuFirstItem = document.querySelector(".first-item"),
  aboutMenuSecondItem = document.querySelector(".second-item"),
  aboutMenuThirdItem = document.querySelector(".third-item");

const aboutMenuContent1 = document.querySelector(".skill-content1"),
  aboutMenuContent2 = document.querySelector(".skill-content2"),
  aboutMenuContent3 = document.querySelector(".skill-content3");

// Baffling the hero text
heroTextSpan.set({
  characters: "电视电脑我是斯蒂芬你好斯特凡",
  speed: 120,
});

const mySkills = [
  "Front end Developer",
  "Back end Developer",
  "Figma Designer",
];

let i = 1;
const changeTitle = () => {
  if (i == mySkills.length) {
    i = 0;
  }
  heroTextSpan.text((currentText) => mySkills[i]).reveal(1500);
  i++;
};

setInterval(changeTitle, 3200);

const itemsChildren = (index) => ({
  0: aboutMenuFirstItem.children[index ?? 0].style,
  1: aboutMenuSecondItem.children[index ?? 0].style,
  2: aboutMenuThirdItem.children[index ?? 0].style,
});

const menuContentToggler = (index) => {
  aboutMenuContent1.style.display = index === 1 ? "block" : "none";
  aboutMenuContent2.style.display = index === 2 ? "block" : "none";
  aboutMenuContent3.style.display = index === 3 ? "block" : "none";
};

const menuItemToggler = (index, toggled) => {
  itemsChildren()[index].color = toggled ? redColor : whiteColor;
  itemsChildren(1)[index].width = toggled ? "100%" : "50%";
  itemsChildren(1)[index].backgroundColor = toggled ? redColor : whiteColor;
};

aboutMenuFirstItem.addEventListener("click", () => {
  menuItemToggler(0, true);
  menuItemToggler(1, false);
  menuItemToggler(2, false);
  menuContentToggler(1);
});

aboutMenuSecondItem.addEventListener("click", () => {
  menuItemToggler(0, false);
  menuItemToggler(1, true);
  menuItemToggler(2, false);
  menuContentToggler(2);
});

aboutMenuThirdItem.addEventListener("click", () => {
  menuItemToggler(0, false);
  menuItemToggler(1, false);
  menuItemToggler(2, true);
  menuContentToggler(3);
});

(() => {
  menuItemToggler(0, true);
  menuContentToggler(1);
})();

const portfolioContainer = document.querySelector(".portfolio--container");

const portfolioProjects = [
  {
    id: 1,
    name: "Amazon clone",
    type: "Web App",
    description: "Amazon like website",
    tech: "HTML, CSS, JavaScript, PHP",
    url: "https://amazzonclone.000webhostapp.com",
    preview:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-aae23.appspot.com/o/Screenshot_4.png?alt=media&token=66fc92d0-0aab-48ef-b9af-9bc0c438a0c5",
  },
  {
    id: 2,
    name: "Portfolio",
    type: "Web App",
    description: "Portfolio website",
    tech: "Reactjs, Redux, MaterialUI",
    url: "https://stefanportfolio.netlify.app/",
    preview:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-aae23.appspot.com/o/Screenshot_11.png?alt=media&token=f52d6c68-0f02-46e2-8059-904071a8551d",
  },
  {
    id: 3,
    name: "Forecu",
    type: "Web App",
    description: "Weather app, based on open-source API",
    tech: "Reactjs, API",
    url: "https://forecu.netlify.app/",
    preview:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-aae23.appspot.com/o/Screenshot_1.png?alt=media&token=28fe88ea-18bf-47a3-a094-ee31eb10f4be",
  },
  {
    id: 4,
    name: "Hulu",
    type: "Web App",
    description: "Movie trailers app, based on open-source API",
    tech: "Reactjs, Redux, SCSS",
    url: "https://hulu-e3ff0.web.app/",
    preview:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-aae23.appspot.com/o/Screenshot_25.png?alt=media&token=cdc817f6-0a7b-4280-8410-09fa050c3dca",
  },
  {
    id: 5,
    name: "Covid 19 tracker",
    type: "Web App",
    description: "Track worldwide covid19 pandemic crisis.",
    tech: "Reactjs, Redux, SCSS",
    url: "https://coronavirus-19-app.netlify.app/",
    preview:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-aae23.appspot.com/o/Screenshot_9.png?alt=media&token=fb92e513-ef42-4ea5-a75f-fc8f0d53839d",
  },
];

portfolioProjects.map(
  (item) =>
    (portfolioContainer.innerHTML += `
      <div class="project" style="background-image: url('${item.preview}');">
        <div class="project--details">
          <h4>${item.name}</h4>
          <h5>${item.type}</h5>
          <p>${item.description}</p>
          <p>
            <strong>Technologies used: </strong>${item.tech}
          </p>
          <a href="${item.preview}" target="_blank"
            ><i class="fa fa-link"></i
          ></a>
        </div>
      </div>
  `)
);

currentYear.textContent = new Date().getFullYear();
scrollTopButton.addEventListener("click", () => window.scrollTo(0, 0));

window.addEventListener("scroll", () => {
  const nav = document.querySelector("header");
  let windowPos = window.scrollY > 0;
  if (windowPos) {
    nav.style.height = "60px";
    nav.style.transition = ".4s";
    nav.style.boxShadow = "2px 2px 10px #000";
  } else {
    nav.style.height = "100px";
    nav.style.transition = ".4s";
    nav.style.boxShadow = "none";
  }
});

window.addEventListener("load", () => {
  $(".loader-body").fadeOut(2500);
  $(".loader").fadeOut(1000);

  setTimeout(() => {
    $(".loader-body").hide();
  }, 2000);
});
