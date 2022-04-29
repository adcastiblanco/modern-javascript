document.addEventListener("DOMContentLoaded", () => {
  let observer = new IntersectionObserver((entries) => {
    console.log(entries);
  });

  observer.observe(document.querySelector("div"));
});
