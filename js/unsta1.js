document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".accordion-button");
  const content = document.querySelector(".acordion-content-unsta1");

  button.addEventListener("click", function () {
    content.classList.toggle("open");
  });
});
