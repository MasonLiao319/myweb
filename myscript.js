// slideshow
function slideshow() {
  const images = document.querySelectorAll('#slideshow img');
  let currentImage = 0;

  for (let i = 1; i < images.length; i++) {
    images[i].style.opacity = 0;
  }

  setInterval(() => {
    images[currentImage].style.opacity = 0;
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.opacity = 1;
  }, 3000);
}

slideshow();

