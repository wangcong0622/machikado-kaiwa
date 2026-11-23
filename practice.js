(() => {
  'use strict';

  const cinema = document.querySelector('#cinemaHost .cinema');
  const template = document.getElementById('practiceTemplate');
  const translation = document.getElementById('translation');
  if (!cinema || !template || !translation) return;

  const dialogue = cinema.querySelector('.cn-dialogue');
  const japanese = dialogue.querySelector('.cn-ja');
  const subtitles = dialogue.querySelector('.cn-subs');
  dialogue.prepend(template.content.cloneNode(true));
  subtitles.after(document.getElementById('listenCaptionHint'));
  japanese.id = 'screenJapanese';

  const radios = [...dialogue.querySelectorAll('input[name=captionMode]')];
  const reveal = document.getElementById('revealCaption');
  const replay = document.getElementById('replayCaption');
  const save = document.getElementById('saveCaption');
  const hint = document.getElementById('listenCaptionHint');
  const status = document.getElementById('listenCaptionStatus');
  const next = document.getElementById('continueListening');
  const counter = cinema.querySelector('.cn-count');
  let mode = translation.checked ? 'bilingual' : 'japanese';
  let currentCaption, revealed = false;

  function update() {
    const {story, mode: shot} = cinema.dataset;
    const available = !subtitles.hidden && !dialogue.querySelector('.role-cue, .final-card');
    const caption = available ? [story, shot, counter.textContent, japanese.textContent].join('\n') : '';
    if (currentCaption !== caption) revealed = false;
    currentCaption = caption;

    const listening = available && mode === 'listen';
    const waiting = listening && cinema.dataset.practiceWaiting === 'true';
    const hintText = waiting
      ? '这一句听完了'
      : '字幕已隐藏';
    cinema.dataset.listenHidden = String(listening && !revealed);
    reveal.hidden = !listening;
    reveal.setAttribute('aria-pressed', String(revealed));
    reveal.textContent = revealed ? '隐藏日语' : '显示日语';
    replay.disabled = !available;
    if (!waiting && document.activeElement === next) {
      const target = available ? replay : cinema.querySelector('.cn-toggle');
      target.focus({preventScroll:true});
    }
    next.hidden = !waiting;
    hint.hidden = !listening || revealed && !waiting;
    if (status.textContent !== hintText) status.textContent = hintText;
  }

  function selectMode(nextMode) {
    mode = nextMode;
    cinema.dataset.captionMode = mode;
    revealed = false;
    for (const radio of radios) radio.checked = radio.value === mode;
    const wantsChinese = mode === 'bilingual';
    if (translation.checked !== wantsChinese) {
      translation.checked = wantsChinese;
      translation.dispatchEvent(new Event('change'));
    }
    update();
  }

  for (const radio of radios) radio.addEventListener('change', () => selectMode(radio.value));
  translation.addEventListener('change', () => {
    if (translation.checked !== (mode === 'bilingual')) {
      selectMode(translation.checked ? 'bilingual' : 'japanese');
    }
  });
  reveal.addEventListener('click', () => {
    revealed = !revealed;
    update();
  });
  replay.addEventListener('click', () => document.dispatchEvent(new Event('machikado:replay-line')));
  save.addEventListener('click', () => document.dispatchEvent(new Event('machikado:save-line')));
  next.addEventListener('click', () => document.dispatchEvent(new Event('machikado:continue-listening')));

  const observer = new MutationObserver(update);
  observer.observe(cinema, {attributes: true, attributeFilter: ['data-story', 'data-mode', 'data-practice-waiting']});
  for (const part of [dialogue, japanese, counter]) observer.observe(part, {childList: true});
  selectMode(mode);
})();
