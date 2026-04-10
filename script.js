// Mobile nav toggle (accessible)
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking a link (mobile)
  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "A" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}
// Video autoplay on scroll (handles multiple videos)
const videos = document.querySelectorAll('.video-demo');
videos.forEach(video => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.5 }); // Plays when 50% of the video is visible
  observer.observe(video);
});



// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Contact form: static GitHub Pages-friendly behavior
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

if (form && statusEl) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.getElementById("name")?.value || "").trim();
    const email = (document.getElementById("email")?.value || "").trim();
    const message = (document.getElementById("message")?.value || "").trim();

    if (!name || !email || !message) {
      statusEl.textContent = "Please fill out all fields.";
      return;
    }

    // mailto fallback (works without a backend)
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;

    statusEl.textContent = "Opening your email client…";
  });
}
