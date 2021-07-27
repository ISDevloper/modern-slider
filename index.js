var slides = document.querySelector(".slides");

var activeSide = document.querySelector(".active");

var profiles = [
  {
    id: "john-donne",
    name: "John Donne",
    avatar: "./users/John Donne.jpg",
    position: "Web Devloper",
    about:
      "Ab natus officia possimus voluptate mollitia distinctio, esse labore tempore doloreillum provident vero veniam iusto iure necessitatibus ad magnam quidem sit",
  },
  {
    id: "emily-dickinson",
    name: "Emily Dickinson",
    avatar: "./users/Emily Dickinson.jpg",
    position: "UX designer",
    about:
      "Dollitia distinctio, esse labore tempore doloreillum provident vero veniam iusto iure necessitatibus ad magnam quidem sit",
  },
  {
    id: "mark-harvard",
    name: "Mark Harvard",
    avatar: "./users/Mark Harvard.jpg",
    position: "Content Managment",
    about:
      "Ab natus officia provident vero veniam iusto iure necessitatibus ad magnam quidem sit",
  },
  {
    id: "sarah-kate",
    name: "Sarah kate",
    avatar: "./users/Sarah kate.jpg",
    position: "CEO / Founder",
    about:
      "Voluptate mollitia distinctio, esse labore tempore doloreillum provident vero veniam iusto iure necessitatibus ad magnam quidem sit",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  profiles.forEach((profile, index) => {
    var slide = `<div id="${profile.id}" class="slide ${
      index === 0 ? "active" : ""
    } ${index === 1 ? "next-1" : ""} ${index === 2 ? "next-2" : ""}">
      <img src="${profile.avatar}" alt="">
      <p class="font-bold text-xl mb-3">${profile.name}</p>
      <p class="text-xl mb-3 text-yellow-500">${profile.position}</p>
      <p class="text-lg font-light text-gray-600 text-center">${
        profile.about
      }</p>
    </div>`;
    slides.innerHTML += slide;
  });

  var slidesArray = document.querySelectorAll(".slide");
  slidesArray = Array.from(slidesArray);

  var index = 0;
  slidesArray.forEach((slideElement) => {
    slideElement.addEventListener("click", (e) => {
      var currentElement = e.target;
      if (e.target.classList.contains("active")) {
        index++;
        if (index > slidesArray.length - 1) {
          index = 0;
        }
        moveSlides(slidesArray, index);
        currentElement.classList.add("move");
      }
    });
  });
});

var moveSlides = function (slidesArray, i) {
  slidesArray = Array.from(slidesArray);
  console.log(i);
  if (i == slidesArray.length - 2) {
    console.log("i == slidesArray.length - 2");
    removeClass(slidesArray);
    slidesArray[i].classList.add("active");
    slidesArray[i + 1].classList.add("next-1");
    slidesArray[0].classList.add("next-2");
  } else if (i == slidesArray.length - 1) {
    console.log("i == slidesArray.length - 1");
    removeClass(slidesArray);
    slidesArray[i].classList.add("active");
    slidesArray[0].classList.add("next-1");
    slidesArray[1].classList.add("next-2");
  } else if (i <= slidesArray.length - 3) {
    removeClass(slidesArray);

    console.log("i < slidesArray.length - 3");
    slidesArray[i].classList.add("active");
    slidesArray[i + 1].classList.add("next-1");
    slidesArray[i + 2].classList.add("next-2");
  } else if (i > slidesArray.length - 1) {
    console.log("i > slidesArray.length - 1");
    removeClass(slidesArray);
    slidesArray[i].classList.add("active");
    slidesArray[i + 1].classList.add("next-1");
    slidesArray[i + 2].classList.add("next-2");
  }
};

var removeClass = function (slidesArray) {
  slidesArray.forEach((slide) => {
    if (slide.classList.contains("active")) {
      slide.classList.remove("active");
    }
    if (slide.classList.contains("next-1")) {
      slide.classList.remove("next-1");
    }
    if (slide.classList.contains("next-2")) {
      slide.classList.remove("next-2");
    }
    if (slide.classList.contains("move")) {
      slide.classList.remove("move");
    }
  });
};
