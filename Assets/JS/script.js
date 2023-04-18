
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow-slide");
    var dots = document.getElementsByClassName("dot");
    slideIndex = (n > slides.length) ? 1 : (n < 1 ? slides.length : n);
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("fade");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex-1].classList.remove("fade");
    dots[slideIndex-1].classList.add("active");
  }
  
  const logo = document.getElementById('logo');
  const letters = logo.textContent.split('');
  
  logo.textContent = '';
  
  let i = 0;
  
  setInterval(function() {
    if (i < letters.length) {
      logo.textContent += letters[i];
      i++;
    }
  }, 10);








