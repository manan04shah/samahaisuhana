document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  let isScrolling;

  function handleScroll() {
    window.clearTimeout(isScrolling);

    const currentScroll = window.scrollY;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        window.scrollTo({
          top:
            sectionTop +
            (currentScroll > sectionTop
              ? section.clientHeight
              : -section.clientHeight),
          behavior: "smooth",
          duration: 300,
        });
      }
    });

    isScrolling = setTimeout(() => {
      isScrolling = null;
    }, 66); // Adjust the time (in milliseconds) based on your preference
  }

  window.addEventListener("scroll", handleScroll);
});
