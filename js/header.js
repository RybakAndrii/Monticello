function scrollToSection(className) {
  const targetSection = document.querySelector(`.${className}`);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  }
}
