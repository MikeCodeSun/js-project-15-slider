const imgContainers = document.querySelectorAll(".img-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

imgContainers.forEach(function (imgContainer, index) {
  imgContainer.style.left = `${index * 100}%`;
});

let counter = 0;

prevBtn.addEventListener("click", function () {
  counter--;

  slider();
});
nextBtn.addEventListener("click", function () {
  counter++;

  slider();
});

function slider() {
  if (counter < imgContainers.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "inline-block";
  } else {
    prevBtn.style.display = "none";
  }
  imgContainers.forEach(function (imgCountainer) {
    imgCountainer.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = "none";
