const header = document.querySelector("[data-header]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const observer = new IntersectionObserver(
  (entries, currentObserver) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    }
  },
  { threshold: 0.12, rootMargin: "0px 0px -35px" }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
