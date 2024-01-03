const observeSection = (sectionClassName, cornerClassNames, animationName) => {
  const section = document.querySelector(`.${sectionClassName}`);
  const corners = document.querySelectorAll(`.${cornerClassNames.join(', .')}`);

  if (section) { // Check if section is not null
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the section is in view, add a class to trigger the animation
          corners.forEach(corner => {
            corner.classList.add(animationName);
          });

          // Log that the section is reached
          console.log(`${sectionClassName} section reached`);

          // Observe the section again after a delay (0.5 seconds)
          setTimeout(() => {
            corners.forEach(corner => {
              corner.classList.remove(animationName);
            });
          }, 500);
        }
      });
    }, { threshold: 1 }); // Adjust the threshold based on your needs

    observer.observe(section);
  } else {
    console.error(`${sectionClassName} section not found`);
  }
};

// Observe multiple sections
observeSection('cricket-body', ['to', 'divider', 'details', 'venue', 'dresscode'], 'animate-horizontal-peel');
observeSection('cricket-body', ['tagline'], 'animate-zoom-out-greater');
observeSection('cricket-body', ['top-left-corner-cricket', 'top-right-corner-cricket', 'bottom-left-corner-cricket', 'bottom-right-corner-cricket', 'smlogo'], 'animate-zoom-out');
observeSection('musical-body', ['to', 'divider', 'details', 'venue', 'dresscode'], 'animate-horizontal-peel');
observeSection('musical-body', ['tagline'], 'animate-zoom-out-greater');
observeSection('musical-body', ['top-left-corner-musical', 'top-right-corner-musical', 'bottom-left-corner-musical', 'bottom-right-corner-musical', 'smlogo'], 'animate-zoom-out');
observeSection('pujan-body', ['to', 'divider', 'details', 'venue', 'dresscode'], 'animate-horizontal-peel');
observeSection('pujan-body', ['tagline'], 'animate-zoom-out-greater');
observeSection('pujan-body', ['top-left-corner-pujan', 'top-right-corner-pujan', 'bottom-left-corner-pujan', 'bottom-right-corner-pujan', 'smlogo'], 'animate-zoom-out');
observeSection('haldi-body', ['to', 'divider', 'details', 'venue', 'dresscode'], 'animate-horizontal-peel');
observeSection('haldi-body', ['tagline'], 'animate-zoom-out-greater');
observeSection('haldi-body', ['top-left-corner-haldi', 'top-right-corner-haldi', 'bottom-left-corner-haldi', 'bottom-right-corner-haldi', 'smlogo'], 'animate-zoom-out');
observeSection('sangeet-body', ['to', 'divider', 'details', 'venue', 'dresscode'], 'animate-horizontal-peel');
observeSection('sangeet-body', ['tagline'], 'animate-zoom-out-greater');
observeSection('sangeet-body', ['top-left-corner-sangeet', 'top-right-corner-sangeet', 'bottom-left-corner-sangeet', 'bottom-right-corner-sangeet', 'smlogo'], 'animate-zoom-out');
observeSection('wedding-body', ['to', 'divider', 'details', 'venue', 'dresscode'], 'animate-horizontal-peel');
observeSection('wedding-body', ['tagline'], 'animate-zoom-out-greater');
observeSection('wedding-body', ['top-left-corner-wedding', 'top-right-corner-wedding', 'bottom-left-corner-wedding', 'bottom-right-corner-wedding', 'smlogo'], 'animate-zoom-out');
