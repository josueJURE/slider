document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const slide = document.querySelector(".slide-group");
  const dotSection = document.querySelector(".dotSection");

  console.log(dotSection)

  let currentSlide = 0;
  let theInterval 

  function advance() {
    theInterval = setTimeout(function() {
      slides[currentSlide].style.display = "none";
      if(currentSlide < slides.length - 1) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }
      slides[currentSlide].style.display = "block";
      advance();

    }, 3000)
  }

  // function stopSlides() {
  //   clearInterval(theInterval);
  //   console.log("josue")
  // }

  // slide.addEventListener("mouseover", stopSlides)

  slides.forEach(slide => {
    let element = document.createElement("div");
    element.innerHTML = `<i class="fas fa-dot-circle"></i>`;
    dotSection.appendChild(element)

  })



  
  advance()

  
});


