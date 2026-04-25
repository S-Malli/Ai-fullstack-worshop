import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]);
}
