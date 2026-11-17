(() => {
  'use strict';

  const PROMPTS = [
    {
      category: 'Gratitude',
      tint: 'var(--cat-gratitude)',
      text: 'Have I experienced healing as a result of living gratefully? If so, how?',
    },
    {
      category: 'Introspection',
      tint: 'var(--cat-introspection)',
      text: 'Who in my life has taught me about resilience in the face of difficulty?',
    },
    {
      category: 'Mindfulness',
      tint: 'var(--cat-mindfulness)',
      text: 'What shifts when I let go of ideas about how life should be?',
    },
    {
      category: 'Growth',
      tint: 'var(--cat-growth)',
      text: 'Am I doing work that matters?',
    },
  ];

  const card = document.getElementById('preview-card');
  const categoryEl = document.getElementById('preview-category');
  const questionEl = document.getElementById('preview-question');
  if (!card || !categoryEl || !questionEl) return;

  let currentIndex = 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function applyPrompt(index) {
    const item = PROMPTS[index];
    card.style.backgroundColor = item.tint;
    categoryEl.textContent = item.category;
    questionEl.textContent = item.text;
  }

  function transitionToNextPrompt() {
    currentIndex = (currentIndex + 1) % PROMPTS.length;

    if (prefersReducedMotion.matches) {
      applyPrompt(currentIndex);
      return;
    }

    card.classList.add('is-transitioning');
    window.setTimeout(() => {
      applyPrompt(currentIndex);
      card.classList.remove('is-transitioning');
    }, 280);
  }

  window.setInterval(transitionToNextPrompt, 5000);
})();
