// export default window.onload = function lineSlider() {

//   const gap = 16;

//   const carousel = document.getElementById("carousel");
//   console.log(carousel);
//   const content = document.getElementById("content");
//   console.log(content)
//   const nextLine = document.getElementById("nextLine");
//   console.log(nextLine);
//   const prevLine = document.getElementById("prevLine");
//   console.log(prevLine);

//   nextLine.addEventListener("click", e => {
//     carousel.scrollBy(width + gap, 0);
//     if (carousel.scrollWidth !== 0) {
//       prevLine.style.display = "flex";
//     }
//     if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//       nextLine.style.display = "none";
//     }
//   });
//   prevLine.addEventListener("click", e => {
//     carousel.scrollBy(-(width + gap), 0);
//     if (carousel.scrollLeft - width - gap <= 0) {
//       prevLine.style.display = "none";
//     }
//     if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//       nextLine.style.display = "flex";
//     }
//   });

//   let width = carousel.offsetWidth;
//   window.addEventListener("resize", e => (width = carousel.offsetWidth));

// }