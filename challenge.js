(() => {
  'use strict';
  const modal = $('challenge');
  const completed = loadSet('machikado.challengeScenes.v1');
  let scene, rows, questions, position, firstTry, missed, track;
  function stopTrack() {
    if (track) {
      track.onerror = null;
      track.pause();
      track = null;
    }
  }
  function playLine(i) {
    stopTrack();
    $('trialAudioStatus').textContent = '';
    const src = voiceSource('audio/' + scene.id + '-' + i + '.wav');
    const failed = () => { $('trialAudioStatus').textContent = '原声暂未播放，可以阅读台词作答。'; };
    if (!src) return failed();
    const clip = new Audio(src);
    track = clip;
    clip.playbackRate = Number($('speed').value);
    clip.onerror = failed;
    clip.play().catch(() => { if (track === clip) failed(); });
  }
  function showStill(i) {
    const role = [...new Set(rows.map(row => row[0]))].indexOf(rows[i][0]);
    $('trialStill').src = cinema.previewSource(scene.id, scene.visual || scene.id, i, role);
  }
  function renderQuestion() {
    const q = questions[position];
    const [speaker, ja, zh] = rows[q.line];
    const [responder, answer] = rows[q.line + 1];
    missed = false;
    $('trialQuestion').hidden = false;
    $('trialProgress').textContent = '第 ' + (position + 1) + ' / ' + questions.length + ' 题';
    $('trialSpeaker').textContent = speaker;
    $('trialPrompt').textContent = ja;
    $('trialTranslation').open = false;
    $('trialTranslation').querySelector('p').textContent = zh;
    $('trialAsk').textContent = '如果你是' + responder + '，此时怎样接话最贴合剧情？';
    $('trialFeedback').textContent = '';
    $('trialRetry').hidden = $('trialNext').hidden = true;
    const options = $('trialOptions');
    options.replaceChildren();
    const pool = q.wrong.map(([label, explanation]) => ({label, explanation}));
    pool.splice(Math.floor(Math.random() * (pool.length + 1)), 0, {label:answer, correct:true});
    for (const [i, choice] of pool.entries()) {
      const button = element('button', '', choice.label);
      button.lang = 'ja';
      button.dataset.letter = String.fromCharCode(65 + i);
      options.append(button);
      button.onclick = () => {
        if (!choice.correct) {
          missed = true;
          button.disabled = true;
          button.dataset.result = 'wrong';
          $('trialFeedback').textContent = '再想一想。' + choice.explanation;
          options.querySelector('button:enabled')?.focus({preventScroll:true});
          return;
        }
        if (!missed) firstTry++;
        for (const b of options.children) b.disabled = true;
        button.dataset.result = 'right';
        $('trialFeedback').textContent = '答对了。' + q.why;
        showStill(q.line + 1);
        playLine(q.line + 1);
        $('trialNext').textContent = position + 1 < questions.length ? '继续下一题 →' : '查看本幕结果 →';
        $('trialNext').hidden = false;
        $('trialNext').focus({preventScroll:true});
      };
    }
    showStill(q.line);
    $('trialAsk').focus({preventScroll:true});
    modal.scrollTop = 0;
    playLine(q.line);
  }
  function start(s) {
    scene = s;
    rows = window.scenes.find(item => item.id === s.id).lines;
    questions = window.challengeQuestions[s.id];
    position = firstTry = 0;
    $('trialScene').textContent = s.label;
    $('trialContext').textContent = s.intro;
    $('challengeTitle').textContent = s.title;
    renderQuestion();
  }
  function finish() {
    stopTrack();
    $('trialAudioStatus').textContent = '';
    completed.add(scene.id);
    saveSet('machikado.challengeScenes.v1', completed);
    $('trialQuestion').hidden = true;
    $('trialProgress').textContent = '已通关 ' + chapters.filter(s => completed.has(s.id)).length + ' / ' + chapters.length + ' 幕';
    $('trialFeedback').textContent = '《' + scene.label + '》通关。共 ' + questions.length + ' 题，其中 ' + firstTry + ' 题一次答对。';
    $('trialRetry').hidden = false;
    const next = chapters[(chapters.indexOf(scene) + 1) % chapters.length];
    $('trialNext').textContent = '下一幕 · ' + next.label + ' →';
    $('trialNext').focus();
  }
  $('challengeOpen').onclick = () => {
    if (state === 'playing') toggle();
    takePlayer?.pause();
    cancelMic();
    modal.showModal();
    start(chapter);
  };
  $('trialNext').onclick = () => {
    if ($('trialQuestion').hidden) return start(chapters[(chapters.indexOf(scene) + 1) % chapters.length]);
    if (++position < questions.length) renderQuestion();
    else finish();
  };
  $('trialListen').onclick = () => playLine(questions[position].line);
  $('trialRetry').onclick = () => start(scene);
  $('trialExit').onclick = () => modal.close();
  modal.addEventListener('close', stopTrack);
})();
