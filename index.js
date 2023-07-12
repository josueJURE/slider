
(function () {
  const slides = document.querySelectorAll(".slide");
  const slide = document.querySelector(".slide-group");
  const dotSection = document.querySelector(".dotSection");
  let currentSlide = 0;

  // add dots.
  slides.forEach((_) => {
    let element = document.createElement("div");
    element.innerHTML = `<i class="fas fa-dot-circle"></i>`;
    dotSection.appendChild(element);
  });

  const advance = (index) => {
    const element = slides[index];
    element.style.display = "none";
    dotSection.childNodes[index].classList.remove('addRed');
    const isGreater = index + 1 >= slides.length;
    if(isGreater) {
      slides[0].style.display = "block";
      dotSection.childNodes[0].classList.add('addRed');
    } else {
      slides[index + 1].style.display = "block";
      dotSection.childNodes[index + 1].classList.add('addRed');

    }
    setTimeout(() => {
      if(isGreater) {
        advance(0);
      } else {
        advance(index + 1);
      }
    }, 3000);
  };

  advance(currentSlide);
})();
