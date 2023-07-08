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
        x[currentSlide].classList.add('addRed')
        currentSlide++;
        console.log(x[currentSlide])
      } else {
        currentSlide = 0;
        x[currentSlide].classList.remove('addRed')

      }
      slides[currentSlide].style.display = "block";
     
      advance();
     
     

    }, 3000)
    x[currentSlide].classList.remove('addRed')

  }

  // function stopSlides() {
  //   clearInterval(theInterval);
  //   console.log("josue")
  // }

  // slide.addEventListener("mouseover", stopSlides)

  slides.forEach((_) => {
    let element = document.createElement("div");
    element.innerHTML = `<i class="fas fa-dot-circle"></i>`;
    dotSection.appendChild(element);

   

   

  })

  let x = document.querySelectorAll(".fa-dot-circle");
  console.log({nodeList: x, index: currentSlide})
 




  
  advance()

  
});


