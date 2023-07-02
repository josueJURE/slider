document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function advance() {
   

    setTimeout(function () {
    slides[currentSlide].style.display = "none";
      if (currentSlide < slides.length - 1) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }
      slides[currentSlide].style.display = "block";
      advance();
    }, 2000);
  }
  advance();
});


