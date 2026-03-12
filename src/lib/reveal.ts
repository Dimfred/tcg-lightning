export function reveal(node: HTMLElement, delay: number = 0) {
  // Check if the element is already fully in the viewport on mount — skip animation
  const rect = node.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.75) {
    return { destroy() {} };
  }

  node.style.opacity = "0";
  node.style.transform = "translateY(32px)";
  node.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.style.opacity = "1";
          node.style.transform = "translateY(0)";
          observer.unobserve(node);
        }
      }
    },
    { threshold: 0.15 },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
