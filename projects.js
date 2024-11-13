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


