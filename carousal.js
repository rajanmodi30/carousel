let images = ["1.jpg", "2.jpg", "3.jpg"];
let imageElement = document.getElementById("image");
let currentIndex = 0;

document
  .getElementById("forwardButtonClick")
  .addEventListener("click", goForward);
document
  .getElementById("backwardButtonClick")
  .addEventListener("click", goBackward);

function goBackward() {
  currentIndex--;
  if (currentIndex < 0) {
    //if less then 0 then go to last element of array
    currentIndex = images.length - 1;
  }
  setImageSrc(images[currentIndex]);
}

function goForward() {
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  setImageSrc(images[currentIndex]);
}

function setImageSrc(src) {
  imageElement.src = src;
}
