(() => {
  'use strict';

  const filters = document.getElementById('libraryFilters');
  const count = document.getElementById('libraryCount');
  const tokyo = document.getElementById('tokyoLibrary');
  const personal = document.getElementById('personalLibrary');
  const schoolScenes = new Set(['juku', 'briefing', 'exam']);
  const groups = [
    {section: tokyo, cards: Array.from(tokyo.querySelectorAll('.card'))},
    {section: personal, cards: Array.from(personal.querySelectorAll('.card'))}
  ];

  function showCategory(category) {
    let visible = 0;
    for (const {section, cards} of groups) {
      let matches = 0;
      for (const card of cards) {
        const cardCategory = section === tokyo ? 'tokyo' : schoolScenes.has(card.dataset.scene) ? 'school' : 'family';
        card.hidden = category !== 'all' && category !== cardCategory;
        if (!card.hidden) matches++;
      }
      section.hidden = matches === 0;
      visible += matches;
    }
    for (const button of filters.children) {
      button.setAttribute('aria-pressed', String(button.dataset.category === category));
    }
    count.textContent = visible + ' 幕';
  }

  if (!groups.some(group => group.cards.length)) return;
  const sceneById = new Map(chapters.map(scene => [scene.id, scene]));
  for (const {section, cards} of groups) {
    for (const card of cards) {
      const scene = sceneById.get(card.dataset.scene);
      if (!scene?.intro) continue;
      const summary = document.createElement('span');
      summary.className = 'scene-summary';
      summary.id = 'preview-' + scene.id;
      summary.textContent = scene.intro;
      card.querySelector('.card-copy').append(summary);
      card.setAttribute('aria-label', scene.label + '，' + scene.tag);
      card.setAttribute('aria-describedby', summary.id);
    }
    section.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const visible = cards.filter(card => !card.hidden);
      const index = visible.indexOf(event.target);
      if (index < 0) return;
      let next;
      switch (event.key) {
        case 'ArrowLeft': next = Math.max(0, index - 1); break;
        case 'ArrowRight': next = Math.min(visible.length - 1, index + 1); break;
        case 'Home': next = 0; break;
        case 'End': next = visible.length - 1; break;
        default: return;
      }
      event.preventDefault();
      visible[next].focus();
    });
  }
  filters.hidden = false;
  for (const button of filters.children) {
    button.addEventListener('click', () => showCategory(button.dataset.category));
  }
  showCategory('all');
})();

