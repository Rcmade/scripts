// Select all elements with the class 'carousel-wrapper'
const carousels = document.querySelectorAll(".carousel-wrapper");

// Iterate over each carousel wrapper
carousels.forEach((carouselWrapper) => {
  // Select the carousel, previous, and next buttons within the current carousel wrapper
  const carousel = carouselWrapper?.querySelector(".carousel");
  const prevButton = carouselWrapper?.querySelector(".prev");
  const nextButton = carouselWrapper?.querySelector(".next");

  // Add event listener for the previous button
  prevButton?.addEventListener("click", () => {
    carousel?.scrollBy({ left: -300, behavior: "smooth" });
  });

  // Add event listener for the next button
  nextButton?.addEventListener("click", () => {
    carousel?.scrollBy({ left: 300, behavior: "smooth" });
  });
});
