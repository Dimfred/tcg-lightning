export function reveal(node: HTMLElement, delay: number = 0) {
  // Check if the element is already fully in the viewport on mount — skip animation
  const rect = node.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.75) {
    return { destroy() {} };
  }

  node.style.opacity = "0";
  node.style.transform = "translateY(32px)";
  node.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

  let revealed = false;
  function show() {
    if (revealed) return;
    revealed = true;
    node.style.opacity = "1";
    node.style.transform = "translateY(0)";
    observer.disconnect();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          show();
        }
      }
    },
    { threshold: 0.1 },
  );

  observer.observe(node);

  // Fallback: reveal after 2s in case IntersectionObserver doesn't fire (Safari)
  const timeout = setTimeout(show, 2000);

  return {
    destroy() {
      observer.disconnect();
      clearTimeout(timeout);
    },
  };
}
