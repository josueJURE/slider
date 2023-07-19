(function () {
  const slides = document.querySelectorAll(".slide");
  const slide = document.querySelector(".slide-group");
  const dotSection = document.querySelector(".dotSection");
  const leftChevron = document.querySelector(".fa-chevron-left");
  const rightCheveron = document.querySelector(".fa-chevron-right");
  console.log({ chevRight: rightCheveron }, { slide });

  let currentSlide = 0;
  let clear;

  // add dots.
  slides.forEach((_) => {
    let element = document.createElement("div");
    element.innerHTML = `<i class="fas fa-dot-circle"></i>`;
    dotSection.appendChild(element);
  });

  function advance(index) {
    slideToNext(index);

   
    clear = setTimeout(() => {
      if (index + 1 >= slides.length) {
        advance(0);
      } else {
        advance(index + 1);
      }
    }, 3000);
  }

  advance(currentSlide);

  rightCheveron.addEventListener("click", function () {
    clearTimeout(clear);
    slideToNext(currentSlide);
   mouseover
  
  });

  slide.addEventListener("mouseenter", function() {
    console.log("Josue")
    clearTimeout(clear)
  });

  

  leftChevron.addEventListener("click", function () {
    clearTimeout(clear)
    slides[currentSlide].style.display = "none";
    dotSection.childNodes[currentSlide].classList.remove("addRed");
    if (currentSlide <= 0) {
      console.log(currentSlide)
      currentSlide = slides.length - 1;
      slides[currentSlide].style.display = "block";
      dotSection.childNodes[currentSlide].classList.add("addRed");
    } else {
      currentSlide--;
      slides[currentSlide].style.display = "block";
      dotSection.childNodes[currentSlide].classList.add("addRed");
    }




  });
  function slideToNext(index) {
    slides[currentSlide].style.display = "none";
    dotSection.childNodes[currentSlide].classList.remove("addRed");
    if (index < slides.length - 1) {
      currentSlide = index + 1;
    } else {
      currentSlide = 0;
    }
    slides[currentSlide].style.display = "block";
    dotSection.childNodes[currentSlide].classList.add("addRed");
   
  }
})();
