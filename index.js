(function () {
  const slides = document.querySelectorAll(".slide");
  const slide = document.querySelector(".slide-group");
  const dotSection = document.querySelector(".dotSection");
  const chevLeft = document.querySelector(".fa-chevron-left");
  const chevRight = document.querySelector(".fa-chevron-right");
  console.log({ chevRight }, { slide });

  let currentSlide = 0;
  let clear;

  // add dots.
  slides.forEach((_) => {
    let element = document.createElement("div");
    element.innerHTML = `<i class="fas fa-dot-circle"></i>`;
    dotSection.appendChild(element);
  });

  function advance(index) {
    const element = slides[index];
    element.style.display = "none";
    dotSection.childNodes[index].classList.remove("addRed");
    const isGreater = index + 1 >= slides.length;
    if (isGreater) {
      slides[0].style.display = "block";
      dotSection.childNodes[0].classList.add("addRed");
    } else {
      slides[index + 1].style.display = "block";
      dotSection.childNodes[index + 1].classList.add("addRed");
    }
    clear = setTimeout(() => {
      if (isGreater) {
        advance(0);
      } else {
        advance(index + 1);
      }
    }, 3000);
  }

  advance(currentSlide);

  chevRight.addEventListener("click", function () {
    clearTimeout(clear);
    slides[currentSlide].style.display = "none";
    dotSection.childNodes[currentSlide].classList.remove("addRed");
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      slides[currentSlide].style.display = "block";
      dotSection.childNodes[currentSlide].classList.add("addRed");
     
    } else {
      currentSlide = 0;
      slides[currentSlide].style.display = "block";
    dotSection.childNodes[currentSlide].classList.add("addRed");
    }
  });

  // chevRight.addEventListener("click", function () {
  //   if (currentSlide < slides.length - 1) {
  //     currentSlide++;
  //   } else {
  //     currentSlide = 0;
  //   }
  //   console.log("josué")
  //   slides[currentSlide].style.display = "block";
  // });
})();
