document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll(".text-item");
    const cursor = document.querySelector('.cursor');
    const cursorRing = document.querySelector('.cursor-ring');

    // Verify that cursor elements are present in the DOM
    if (!cursor || !cursorRing) {
        console.error("Cursor elements not found in the DOM.");
        return;
    }

    // Cursor tracking movement
        document.addEventListener('mousemove', e => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorRing.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
        });
    });

// GSAP Animations for the Contact Page
gsap.from(".left-section", {
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".right-section", {
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".create-future-header", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  ease: "power3.out"
});

gsap.from(".contact-form label", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 1,
  stagger: 0.3,
  ease: "power3.out"
});

gsap.from(".contact-form input, .contact-form textarea", {
  opacity: 0,
  x: -100,
  duration: 0.6,
  delay: 1.5,
  stagger: 0.2,
  ease: "power3.out"
});

gsap.from(".submit-btn", {
  opacity: 0,
  y: 30,
  duration: 0.7,
  delay: 2,
  ease: "power3.out"
});
