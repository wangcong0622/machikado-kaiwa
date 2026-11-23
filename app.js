const chapters = [
  { id:'cafe', title:'返事をする前に', label:'升职之前', tag:'职场抉择 · 老同事',
    intro:'升职的答复还没给，伴侣却要调去外地。有些话，只有约老同事出来才说得出口。',
    context:'听听航平如何帮真帆分清公司已经提出的要求，和她心里对「负责人」的预设。',
    focus:6, note:'「かなって」把后半句「思って」留给听者去补。真帆担心的是，如果还没接下职位就先谈条件，别人会怎样解读她的态度。' },
  { id:'station', title:'動かない朝', label:'列车停运之后', tag:'客户沟通 · 临场协商',
    intro:'中央线停运了，客户已经到了会议室，而能拍板的部长十点半就要走。你拨通了电话。',
    context:'对客户来说，列车何时恢复只是背景。留意说话者怎样交代已知信息，又怎样给出现在就能执行的方案。',
    focus:6, note:'「差し支えなければ」让客户可以指出不便。「私が」限定的是本人，可客户还是误以为全体要改线上。听担当者怎样把这个误会说开。' },
  { id:'store', title:'帰り道の電話', label:'谁来陪父母', tag:'家庭照护 · 手足对话',
    intro:'姐姐下班后打给弟弟。弟弟一句“跟平常一样吧”，让两个人终于谈起了那些从来没人算过的付出。',
    context:'工作日能抽身的人，常常不知不觉成了默认负责的人。听双方怎样从争论谁比较忙，转向讨论哪件事可以交给谁。',
    focus:8, note:'「～っていうより」用来修正对方对问题的理解。姐姐真正在意的是，即使弟弟愿意帮忙，每次发现问题、开口求助的人仍然是她。' },
  { id:'apartment', title:'壁の向こうで', label:'墙的另一边', tag:'邻里交涉 · 出差前夜',
    intro:'临出差前，天花板多了一块水渍。敲开楼上的门时，你得决定第一句怎么说。',
    context:'谁先发现，谁来跟进，谁有空等人上门，是三件不同的事。听双方怎样从猜测原因转到安排下一步。',
    focus:3, note:'「場所からすると」交代推测的依据，「かもしれません」保留不确定性。亮既正面回应邻居，也给进一步检查留出了空间。' },
  { id:'wedding', title:'乾杯のあとで', label:'干杯之后', tag:'老友重逢 · 修复关系',
    intro:'席间的一句玩笑让整桌人都笑了。散场后，两个老朋友在酒店走廊里终于有机会单独说话。',
    context:'一个人以为那是朋友间的熟稔，另一个人却一直等着话题结束。听双方怎样重新划出可以开玩笑的界线。',
    focus:3, note:'「そう聞こえたなら」把道歉放在了“如果你是那样理解的”这个前提下。对照结衣后面那句「私が話していいことじゃなかった」，听她什么时候开始为自己的行为负责。' },
  { id:'juku', visual:'station', title:'文章題で手が止まるとき', label:'家长问起日语应用题', tag:'受验塾 · 家长咨询',
    intro:'在日本的受验塾上班的美咲，接到一位中文家庭家长的电话。孩子懂算术，却常常读到日语题干就停住。',
    context:'家长希望帮孩子跨过语言门槛。美咲要先分清，是卡在词义、题目问法，还是不会算。',
    focus:3, note:'「本人の言葉で説明してもらう」把说话的机会交给孩子。家长可以补充词义，再请孩子用自己的话说出题目在问什么。' },
  { id:'pickup', visual:'store', title:'六時までのお迎え', label:'六点前接娃', tag:'工作与育儿 · 夫妻商量',
    intro:'塾里临时加了一场家长面谈，女儿的托班六点就要关门。美咲停在便利店门口，给健太打电话。',
    context:'这通电话需要谈清三个问题：谁先出发，谁联系园里，什么时候互相报信。',
    focus:3, note:'「間に合うかどうか」说的是能否赶上。接一句「駅を出たらすぐ連絡する」，就给了对方一个明确的等消息时间。' },
  { id:'neighbor', visual:'apartment', title:'土曜の朝の足音', label:'周六早上的小脚步', tag:'邻里沟通 · 两岁孩子',
    intro:'两岁的女儿早上爱在家里跑。美咲敲开邻居的门，想问问什么时段和位置最容易听到脚步声。',
    context:'先问清楚邻居听见的时间和位置。美咲可以由此提出具体安排，比如铺垫子或换成安静的游戏。',
    focus:1, note:'「もう少し遅い時間だと助かります」委婉地说出了希望对方调整的时间。追问「何時ごろ」能把模糊的请求变成双方都理解的约定。' },
  { id:'briefing', visual:'wedding', title:'説明会が終わって', label:'说明会散场之后', tag:'受验塾 · 双语沟通',
    intro:'升学说明会刚结束。家长想请会说中文的美咲解释出愿手续，也想让她直接推荐一所学校。她跟同事彩聊起这件事。',
    context:'报名手续可以解释清楚。聊到选校时，可以把通勤、课程和孩子自己的感受分开问。',
    focus:4, note:'「分けて話す」适合把会谈分成几个议题。这里先说手续，再聊选校，让家长和孩子都知道接下来该谈什么。' },
  { id:'exam', visual:'exam', title:'答案をひらいて', label:'模考成绩出来之后', tag:'受验塾 · 家长面谈',
    intro:'周先生拿着模考答卷来见美咲。他只看了分数，美咲请他坐下来，一起看看最后两题写到了哪一步。',
    context:'听美咲怎样指出答卷上已经做对的部分，并把家里的练习量缩小到一道题。',
    focus:4, note:'「この一問だけで大丈夫です」把任务说明白，也让家长知道今晚做到哪里就够了。' },
  { id:'nursery', visual:'nursery', title:'手を離すまで', label:'早上送孩子入园', tag:'育儿日常 · 和保育老师交接',
    intro:'早上，女儿还拉着美咲的衣袖。田中老师在鞋柜边等她们，美咲想把孩子今天的情况交代清楚。',
    context:'听美咲怎么说出和往常不一样的情况，也留意田中老师怎样提出能立刻配合的安排。',
    focus:4, note:'「渡していただけますか」适合把一个具体请求交给老师。加上「眠くなったら」，对方就知道什么时候做。' }
];
const $ = id => document.getElementById(id);
function element(tag, cls, value) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (value) node.textContent = value;
  return node;
}
let chapter, dialog, index = -1, audio, currentClip, state = 'ready';
const takes = new Map();
function loadSet(key) {
  try {
    const values = JSON.parse(localStorage.getItem(key));
    return new Set(Array.isArray(values) ? values.filter(value => typeof value === 'string') : []);
  } catch {
    return new Set();
  }
}
function saveSet(key, values) {
  try { localStorage.setItem(key, JSON.stringify([...values])); } catch { /* Keep using this session's set. */ }
}
const bookmarkKey = 'machikado.bookmarks';
const routeKey = 'machikado.routes';
const bookmarks = loadSet(bookmarkKey);
const routes = loadSet(routeKey);
let savedOnly = false;
let decisionIndex = -1;
let decisionTaken = false, selectedLine = 0, takeURL, mic, recordingId = 0, takePlayer;
const cinema = window.Cinema;
const roleMode = $('roleMode');
const useDub = $('useDub');
let nextTimer, resumeAfterLine;
let waitingForNextLine = false;
window.scenes.push(...window.extraScenes);
window.scenes.push(...window.personalScenes);
Object.assign(window.branches, window.extraBranches, window.personalBranches);
const importedVoices = new Map();
const geminiAudioFiles = new Set(window.geminiAudioFiles);
const reactionPauses = {
  'audio/cafe-17.wav':560,
  'audio/juku-8.wav':350,
  'audio/exam-8.wav':520,
  'audio/nursery-6.wav':510,
  'audio/nursery-7.wav':490
};
const dialogueFiles = new Set(window.scenes.flatMap(scene => scene.lines.map((_, i) => 'audio/' + scene.id + '-' + i + '.wav')));
for (const {options} of Object.values(window.branches)) {
  for (const {choiceAudio, replyAudio} of options) {
    dialogueFiles.add(choiceAudio);
    dialogueFiles.add(replyAudio);
  }
}
// Safari grants playback to a media element. Keep that element across dialogue cuts.
let dialoguePlayer, audioRevision = 0;
function loadDialogueTrack(source) {
  dialoguePlayer ??= new Audio();
  audio = dialoguePlayer;
  audio.src = source;
  audio.defaultPlaybackRate = audio.playbackRate = Number($('speed').value);
  return audio;
}
function clearAudio() {
  audioRevision++;
  clearTimeout(nextTimer);
  resumeAfterLine = null;
  waitingForNextLine = false;
  if (audio) {
    audio.onended = audio.onerror = audio.ontimeupdate = null;
    audio.pause();
    audio = null;
  }
}
function sync() {
  const isPlaying = state === 'playing';
  $('geminiLineNotice').hidden = state !== 'unvoiced';
  $('cinemaHost').firstElementChild.dataset.practiceWaiting = String(waitingForNextLine);
  const playLabel = {
    ready: '▶ 播放本幕',
    playing: 'Ⅱ 暂停',
    paused: '▶ 继续',
    unvoiced: '▶ 下一句',
    decision: '选择回应',
    role: '我说完了',
    ended: '↻ 重播本幕'
  }[state];
  $('play').textContent = playLabel;
  $('scenePlay').textContent = playLabel;
  const list = $('lines');
  [...list.children].forEach((row, i) => {
    const active = i === index;
    row.classList.toggle('active', active);
    row.firstChild.setAttribute('aria-current', String(active));
    row.querySelector('.icon').textContent = active && isPlaying && !currentClip?.branch ? 'Ⅱ' : '▶';
    if (active && !row.hidden && (isPlaying || state === 'role')) {
      const rowBounds = row.getBoundingClientRect();
      const listBounds = list.getBoundingClientRect();
      if (rowBounds.top < listBounds.top) list.scrollTop += rowBounds.top - listBounds.top;
      if (rowBounds.bottom > listBounds.bottom) list.scrollTop += rowBounds.bottom - listBounds.bottom;
    }
  });
  const oldFrame = $('filmstrip').querySelector('[aria-current=true]');
  const newFrame = $('filmstrip').children[index] ?? null;
  if (newFrame !== oldFrame) {
    oldFrame?.removeAttribute('aria-current');
    newFrame?.setAttribute('aria-current', 'true');
    if ($('reel').open) keepReelFrameVisible(newFrame);
  }
  syncCaptionBookmark();
  if (state === 'decision') return;
  if (currentClip && currentClip.branch) {
    cinema.branch(currentClip.ja, currentClip.zh, currentClip.role, isPlaying, currentClip.shot);
  } else {
    cinema.frame(index, isPlaying);
  }
  if (state === 'unvoiced') document.querySelector('.cn-toggle').setAttribute('aria-label', '下一句');
}
function updateRoutes() {
  const options = window.branches[chapter.id].options;
  const explored = options.filter((_, i) => routes.has(chapter.id + ':' + i)).length;
  $('routeProgress').textContent = '路线 ' + explored + '/' + options.length;
}
function updateBookmarks() {
  let count = 0;
  [...$('lines').children].forEach((row, i) => {
    const saved = bookmarks.has(chapter.id + ':' + i);
    const button = row.lastElementChild;
    button.textContent = saved ? '★' : '☆';
    button.setAttribute('aria-pressed', String(saved));
    if (saved) count++;
    row.hidden = savedOnly && !saved;
    if (row.hidden && row.contains(document.activeElement)) $('savedOnly').focus();
  });
  $('savedOnly').setAttribute('aria-pressed', String(savedOnly));
  $('savedOnly').textContent = (savedOnly ? '显示全部' : '只看收藏') + ' · ' + count;
  $('emptySaved').hidden = !savedOnly || count > 0;
  syncCaptionBookmark();
}
function toggleBookmark(lineIndex) {
  const key = chapter.id + ':' + lineIndex;
  if (bookmarks.has(key)) bookmarks.delete(key);
  else bookmarks.add(key);
  saveSet(bookmarkKey, bookmarks);
  updateBookmarks();
}
function syncCaptionBookmark() {
  const button = $('saveCaption');
  if (!button) return;
  const show = index >= 0 && !currentClip?.branch && !['decision','role','ended'].includes(state);
  const saved = show && bookmarks.has(chapter.id + ':' + index);
  button.hidden = !show;
  button.textContent = saved ? '★' : '☆';
  button.setAttribute('aria-pressed', String(saved));
  button.title = saved ? '取消收藏' : '收藏当前台词';
}
function focusChoice() {
  const button = document.querySelector('.cn-choice button');
  button?.focus({preventScroll:true});
  button?.scrollIntoView({block:'nearest'});
}
function openChoice() {
  decision();
  focusChoice();
}
function voiceSource(src) {
  if (importedVoices.has(src)) return importedVoices.get(src);
  if (!dialogueFiles.has(src)) return src;
  return geminiAudioFiles.has(src) ? src.replace(/^audio\//, 'audio-gemini/') : null;
}
function importVoices(event) {
  const picker = event.currentTarget;
  let added = 0;
  let skipped = 0;
  for (const file of picker.files) {
    const name = file.name.toLowerCase().match(/^(.+)\.(mp3|wav|m4a|ogg|opus|flac|webm|aac)$/);
    const key = name && 'audio/' + name[1] + '.wav';
    if (!dialogueFiles.has(key) || file.size === 0) {
      skipped++;
      continue;
    }
    const previous = importedVoices.get(key);
    if (previous && audio?.src !== previous) URL.revokeObjectURL(previous);
    importedVoices.set(key, URL.createObjectURL(file));
    added++;
  }
  $('voiceImportStatus').textContent = '本次载入 ' + added + ' 个，当前可用 ' + importedVoices.size + ' 句。' +
    (skipped ? ' 有 ' + skipped + ' 个文件为空或文件名未匹配。' : '');
  picker.value = '';
}
function listen(clip, next) {
  clearAudio();
  cancelMic();
  takePlayer?.pause();
  currentClip = clip;
  cinema.setAudition(clip.audition === true);
  const source = voiceSource(clip.src);
  if (!source) {
    state = 'unvoiced';
    resumeAfterLine = next;
    $('status').textContent = '这句 Google Gemini 配音待补。';
    sync();
    return;
  }
  const track = loadDialogueTrack(source);
  const revision = audioRevision;
  const active = () => audio === track && audioRevision === revision;
  state = 'playing';
  track.ontimeupdate = () => {
    if (active() && track.duration) cinema.cue(track.currentTime/track.duration,track.duration-track.currentTime);
  };
  track.onended = () => {
    if (!active() || !track.ended) return;
    if (clip.audition || $('loop').checked && !clip.branch) return next();
    const advance = () => { if (active() && state === 'playing') next(); };
    if (document.querySelector('input[name="captionMode"][value="listen"]:checked')) {
      waitingForNextLine = true;
      resumeAfterLine = advance;
      state = 'paused';
      $('status').textContent = '听完这一句。可以重听、看台词，或继续。';
      sync();
      return;
    }
    const pause = reactionPauses[clip.src] ?? (/[？?…]$/.test(clip.ja) ? 360 : 220);
    resumeAfterLine = () => {
      nextTimer = setTimeout(advance, pause);
    };
    if (state === 'playing') resumeAfterLine();
  };
  const fail = () => {
    if (!active()) return;
    state = 'paused';
    $('status').textContent = '这句音频未能播放。点「继续」重试。';
    sync();
  };
  track.onerror = fail;
  sync();
  track.play().catch(fail);
}
function stopAtEnd(message) {
  clearAudio();
  state = 'ended';
  currentClip = null;
  $('status').textContent = message;
  sync();
}
function line(i, whole = true) {
  document.querySelector('.role-cue')?.remove();
  closeCredits();
  index = Math.min(Math.max(i, 0), dialog.lines.length - 1);
  const at = index;
  chooseDub(at);
  if(whole && roleMode.value===dialog.lines[at][0])return roleCue(at);
  $('status').textContent = (whole ? '放映中' : '逐句听读') + ' · ' + dialog.lines[at][0] + ' · ' + (at + 1) + ' / ' + dialog.lines.length;
  const filename = 'audio/' + chapter.id + '-' + at + '.wav';
  const own = takes.get(chapter.id + ':' + at);
  const src = useDub.checked && whole && own ? own : filename;
  listen({src, ja:dialog.lines[at][1], audition:!whole}, () => {
    if ($('loop').checked && voiceSource(src)) return line(at, whole);
    if (!whole) return stopAtEnd('单句播放完毕。');
    if (!decisionTaken && at === window.branches[chapter.id].after) return decision();
    if (at + 1 < dialog.lines.length) return line(at + 1);
    stopAtEnd('本幕结束。可以换一幕，也可以重新体验另一种回应。');
    credits();
  });
}
function decision() {
  document.querySelector('.role-cue')?.remove();
  closeCredits();
  clearAudio();
  cancelMic();
  takePlayer?.pause();
  currentClip = null;
  state = 'decision';
  const script = window.branches[chapter.id];
  index = script.after;
  chooseDub(index);
  $('status').textContent = '剧情分歧 · 请选择你的回应。';
  sync();
  cinema.decision(script.prompt, script.options, choice => {
    if (state !== 'decision') return;
    const option = script.options[choice];
    if (!option) return;
    decisionTaken = true;
    decisionIndex = Number(choice);
    routes.add(chapter.id + ':' + choice);
    saveSet(routeKey, routes);
    updateRoutes();
    $('choiceReview').hidden = false;
    $('choiceQuote').textContent = option.ja;
    $('choiceNote').textContent = option.note;
    const role = dialog.lines[0][0] === script.choiceSpeaker ? 0 : 1;
    $('status').textContent = '你的选择 · ' + dialog.lines[role][0];
    listen({branch:true, src:option.choiceAudio, ja:option.ja, zh:option.zh, role}, () => {
      $('status').textContent = '对方的回应 · ' + dialog.lines[1-role][0];
      listen({branch:true, src:option.replyAudio, ja:option.reply, zh:option.replyZh, shot:Number(choice), role:1-role}, () => line(script.after + 1));
    });
  }, script.after, script.options.map((_, i) => routes.has(chapter.id + ':' + i)));
}
function toggle() {
  if(state==='role'){document.querySelector('.role-done')?.click();return;}
  if (state === 'decision') return focusChoice();
  if (state === 'unvoiced') {
    const next = resumeAfterLine;
    if (voiceSource(currentClip.src)) return listen(currentClip, next);
    return next();
  }
  if (state === 'playing' && audio) {
    clearTimeout(nextTimer);
    audio.pause();
    state = 'paused';
    $('status').textContent = '已暂停';
    sync();
  } else if (state === 'paused' && audio) {
    const track = audio;
    const revision = audioRevision;
    cancelMic();
    takePlayer?.pause();
    state = 'playing';
    waitingForNextLine = false;
    $('status').textContent = '继续放映';
    sync();
    if (resumeAfterLine) return resumeAfterLine();
    track.play().catch(() => {if (audio === track && audioRevision === revision) {state = 'paused'; sync();}});
  } else {
    decisionTaken = false; decisionIndex = -1;
    line(0);
  }
}
function closeCredits() { document.querySelector('.final-card')?.remove(); }
function seek(i) {
  if (i <= window.branches[chapter.id].after) decisionTaken = false;
  line(i);
}
function chooseDub(i) {
  window.updateLanguageNotes(chapter.id,i);
  if (selectedLine !== i) discardTake();
  selectedLine = i;
  takeURL = takes.get(chapter.id + ':' + i) || null;
  $('replay').disabled = !takeURL;
  if (takeURL) $('micStatus').textContent = '这一句已有你的配音。';
  $('dubLine').textContent = dialog.lines[i][1];
}
function cancelMic() {
  recordingId++;
  if (mic && mic.state !== 'inactive') mic.stop();
  if ($('record').textContent !== '● 录这一句') $('record').textContent = '● 录这一句';
}
function discardTake() {
  cancelMic();
  takePlayer?.pause();

  takeURL = takePlayer = null;
  $('replay').disabled = true;
  $('micStatus').textContent = '录音仅在当前页面保存。';
}
async function record() {
  if (mic && mic.state === 'recording') { mic.stop(); return; }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    $('micStatus').textContent = '此浏览器未开放录音。请用 Edge 或 Chrome 打开本页并允许麦克风。'; return;
  }
  if (state === 'playing') toggle();
  discardTake();
  const token = recordingId;
  $('micStatus').textContent = '等待麦克风权限…';
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({audio:true});
    if (token !== recordingId) {stream.getTracks().forEach(t=>t.stop()); return;}
    const recorder = new MediaRecorder(stream);
    mic = recorder;
    const parts = [];
    let timer;
    recorder.ondataavailable = e => {if (e.data.size) parts.push(e.data);};
    recorder.onstop = () => {
      clearTimeout(timer);
      stream.getTracks().forEach(t=>t.stop());
      if (mic === recorder) mic = null;
      if (token !== recordingId) return;
      const takeKey = chapter.id + ':' + selectedLine;
      if(takes.has(takeKey)) URL.revokeObjectURL(takes.get(takeKey));
      takeURL = URL.createObjectURL(new Blob(parts,{type:recorder.mimeType}));
      takes.set(takeKey,takeURL);
      $('record').textContent = '● 录这一句';
      $('replay').disabled = false;
      $('micStatus').textContent = '录音就绪。可以回听，或重新录制。';
    };
    recorder.start();
    $('record').textContent = '■ 完成录音';
    $('micStatus').textContent = '正在录音 · 最长 40 秒';
    timer = setTimeout(() => {if (recorder.state === 'recording') recorder.stop();},40000);
  } catch {
    stream?.getTracks().forEach(t=>t.stop());
    if (token === recordingId) $('micStatus').textContent = '未能使用麦克风，请检查浏览器权限及输入设备。';
  }
}
function roleCue(at) {
  clearAudio();
  cancelMic();
  takePlayer?.pause();
  currentClip = null;
  state = 'role';
  sync();
  const [speaker, ja, zh] = dialog.lines[at];
  const cue = element('section', 'role-cue');
  const script = element('p', 'role-script', ja);
  script.hidden = true;
  script.lang = 'ja';
  const hint = element('button', '', '看日语提词');
  const demo = element('button', '', '听示范');
  const done = element('button', 'role-done', '我说完了');
  hint.onclick = () => {
    script.hidden = !script.hidden;
    hint.textContent = script.hidden ? '看日语提词' : '收起提词';
  };
  demo.onclick = () => {
    const filename = 'audio/' + chapter.id + '-' + at + '.wav';
    function playDemo(source) {
      clearAudio();
      if (!source) {
        demo.textContent = 'Google 配音待补';
        return;
      }
      const track = loadDialogueTrack(source);
      const revision = audioRevision;
      const fail = () => {
        if (audio !== track || audioRevision !== revision) return;
        demo.textContent = '重试示范';
      };
      track.onerror = fail;
      track.play().catch(fail);
    }
    demo.textContent = '听示范';
    playDemo(voiceSource(filename));
  };
  done.onclick = () => {
    clearAudio();
    cue.remove();
    if (!decisionTaken && window.branches[chapter.id].after === at) return decision();
    if (at + 1 < dialog.lines.length) return line(at + 1);
    stopAtEnd('演出结束。');
    credits();
  };
  cue.append(element('small', '', '现在由你饰演 · ' + speaker), element('h3', '', '用日语接这句戏'), element('p', '', zh), script, hint, demo, done);
  document.querySelector('.cn-dialogue').append(cue);
  $('status').textContent = '对戏中 · 等你说完再继续';
}
function credits() {
  closeCredits();
  const selected = window.branches[chapter.id].options[decisionIndex];
  const card = element('section', 'final-card');
  const position = chapters.indexOf(chapter);
  const ending = element('div', 'ending-copy');
  const replay = element('button', '', '重选关键回应');
  const next = element('button', '', position === chapters.length - 1 ? '回到首映' : '放映下一幕');
  replay.onclick = openChoice;
  next.onclick = () => {selectScene(chapters[(position + 1) % chapters.length]); line(0);};
  ending.append(element('small', '', '終映 ／ ' + chapter.title), element('h2', '', chapter.label), element('p', '', selected?.note || chapter.intro), replay, next);
  card.append(ending);
  document.querySelector('.cn-dialogue').append(card);
}
function renderReel() {
  const strip=$('filmstrip');
  const speakers=[...new Set(dialog.lines.map(row=>row[0]))];
  strip.replaceChildren();
  dialog.lines.forEach(([speaker],i)=>{
    const b=element('button','reel-frame'), img=element('img');
    img.src=cinema.previewSource(chapter.id,chapter.visual,i,speakers.indexOf(speaker));
    img.alt='';img.loading='lazy';
    const time=element('span','',String(i+1).padStart(2,'0')+' · '+speaker);
    b.append(img,time);
    b.onclick=()=>{cinema.followReel();seek(i);$('cinemaHost').scrollIntoView({block:'nearest'});};
    strip.append(b);
  });
  strip.scrollLeft = 0;
}
function keepReelFrameVisible(frame) {
  if (!frame) return;
  const strip = $('filmstrip');
  const view = strip.getBoundingClientRect();
  const item = frame.getBoundingClientRect();
  if (item.left < view.left + 4 || item.right > view.right - 4) {
    strip.scrollLeft += (item.left + item.right - view.left - view.right) / 2;
  }
}
function selectScene(s) {
  if(window.Observation.isOpen())window.Observation.close();
  document.querySelector('.role-cue')?.remove();
  closeCredits();
  clearAudio();
  discardTake();
  chapter = s;
  dialog = window.scenes.find(d=>d.id === s.id);
  const missing = [...dialogueFiles].filter(src =>
    src.startsWith('audio/' + s.id + '-') || src.startsWith('audio/branch-' + s.id + '-')
  ).filter(src => !geminiAudioFiles.has(src)).length;
  $('geminiNotice').textContent = missing ? missing + ' 段 Google 配音待补' : '';
  $('geminiNotice').hidden = missing === 0;
  roleMode.replaceChildren(new Option('观众',''));
  [...new Set(dialog.lines.map(row=>row[0]))].forEach(name=> roleMode.add(new Option(name,name)));
  index = -1; selectedLine = 0; currentClip = null; state = 'ready'; decisionTaken = false; decisionIndex = -1;
  cinema.scene(s.id, dialog.lines, s.visual);
  const clue=window.Observation.info(s.id);
  $('observationThumb').src=clue.image;
  $('observationSubject').textContent=clue.label;
  renderCast(s.id);
  renderReel();
  $('sceneNumber').textContent = '第 ' + (chapters.indexOf(s) + 1) + ' 幕';
  $('sceneTitle').textContent = s.title;
  $('sceneLabel').textContent = s.label;
  $('sceneTag').textContent = s.tag;
  $('intro').textContent = s.intro;
  $('context').textContent = s.context;
  $('note').textContent = s.note;
  $('phrase').textContent = dialog.lines[s.focus][1];
  $('choiceReview').hidden = true;
  $('lines').replaceChildren();
  dialog.lines.forEach(([speaker, ja, zh], i) => {
    const row = element('div','line-row');
    const b = element('button','line');
    const icon = element('span','icon','▶');icon.setAttribute('aria-hidden','true');
    const text = element('span');
    const jp = element('span','jp',ja);jp.lang = 'ja';
    text.append(element('span','speaker',speaker),jp,element('span','zh',zh));
    b.append(icon,text);
    b.onclick = () => {if (i === index && !currentClip?.branch && ['paused','playing'].includes(state)) toggle(); else line(i,false);};
    const bookmark = element('button','bookmark');
    bookmark.setAttribute('aria-label', '收藏第 ' + (i + 1) + ' 句');
    bookmark.title = '收藏台词';
    bookmark.onclick = () => toggleBookmark(i);
    row.append(b, bookmark);
    $('lines').append(row);
  });
  document.querySelectorAll('.card[data-scene]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scene===s.id)));
  chooseDub(0);
  $('status').textContent = dialog.lines.length + ' 句对白';
  updateRoutes();
  updateBookmarks();
  sync();
}
cinema.mount($('cinemaHost'), {toggle,seek,step:delta=>seek(index+delta)});
window.Observation.mount($('cinemaHost').firstElementChild,{
  pause(){
    if(state==='playing') toggle();
    takePlayer?.pause();
    if(state==='role') audio?.pause();
  },
  seek(at){
    cinema.followReel();
    line(at,false);
    $('cinemaHost').scrollIntoView({block:'nearest'});
  }
});
$('observeScene').onclick=()=>window.Observation.open(chapter.id);
function renderCast(id){
  $('cast').replaceChildren();
  [...roleMode.options].forEach((option,i)=>{
    const button=element('button','cast-option');
    button.type='button';button.dataset.role=option.value;
    button.setAttribute('aria-pressed',String(option.selected));
    if(i){
      const image=element('img');
      image.alt='';image.src=cinema.portrait(id,i-1);
      button.append(image);
    }
    button.append(element('span','',i?option.textContent:'仅观看'));
    button.onclick=()=>{
      if(roleMode.value===option.value)return;
      roleMode.value=option.value;
      roleMode.dispatchEvent(new Event('change'));
    };
    $('cast').append(button);
  });
}
const geminiLineNotice = element('p', 'caption-listen-note', '这句 Google 配音待补，可继续看下一句。');
geminiLineNotice.id = 'geminiLineNotice';
geminiLineNotice.setAttribute('role', 'status');
geminiLineNotice.hidden = true;
$('cinemaHost').querySelector('.cn-dialogue').append(geminiLineNotice);
chapters.forEach(s=>{
  const b = element('button','card');
  b.dataset.scene = s.id;
  const picture = element('span','card-picture');
  const copy = element('span','card-copy');
  const img = element('img');img.src = cinema.previewSource(s.id,s.visual);img.alt = '';img.loading = 'lazy';
  const badge = element('span','air','已选');badge.setAttribute('aria-hidden','true');
  picture.append(img,badge);
  copy.append(element('strong','',s.label),element('em','',s.tag));
  b.append(picture,copy);
  b.onclick = ()=>{selectScene(s);$('screen').scrollIntoView({block:'start'});};
  $(s.visual ? 'personalCards' : 'cards').append(b);
});
$('play').onclick = toggle;
$('reel').addEventListener('toggle', () => {
  if ($('reel').open) keepReelFrameVisible($('filmstrip').children[index]);
});
$('filmstrip').addEventListener('keydown', event => {
  const frames = Array.from($('filmstrip').children);
  const current = frames.indexOf(event.target);
  if (current < 0) return;
  const destinations = {ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: frames.length - 1};
  if (!Object.hasOwn(destinations, event.key)) return;
  event.preventDefault();
  const target = frames[Math.min(frames.length - 1, Math.max(0, destinations[event.key]))];
  target.focus({preventScroll:true});
  keepReelFrameVisible(target);
});
document.addEventListener('machikado:continue-listening', () => {
  if (waitingForNextLine && state === 'paused') toggle();
});
document.addEventListener('machikado:save-line', () => {
  if (index >= 0 && !$('saveCaption').hidden) toggleBookmark(index);
});
document.addEventListener('machikado:replay-line', () => {
  if (state === 'decision' || state === 'role') return;
  if (!audio || !currentClip) {
    line(Math.max(index, 0), false);
    return;
  }
  clearTimeout(nextTimer);
  resumeAfterLine = null;
  waitingForNextLine = false;
  audio.currentTime = 0;
  cinema.cue(0);
  if (state === 'playing' && audio.paused) state = 'paused';
  if (state === 'paused') toggle();
});
$('scenePlay').onclick = () => {
  const previous = state;
  toggle();
  if (previous === 'ready' || previous === 'ended') $('cinemaHost').scrollIntoView({block:'nearest'});
};
$('jumpChoice').onclick = $('rechoose').onclick = openChoice;
$('savedOnly').onclick = () => {
  savedOnly = !savedOnly;
  updateBookmarks();
};
$('translation').onchange = ()=>{
  document.body.classList.toggle('hideZh',!$('translation').checked);
  cinema.translation($('translation').checked);
};
$('speed').onchange = ()=>{if(audio) audio.playbackRate = Number($('speed').value);};
$('modelLine').onclick = ()=>line(selectedLine,false);
$('record').onclick = record;
$('voiceFiles').onchange = importVoices;
$('replay').onclick = ()=>{
  if (!takeURL) return;
  if (state === 'playing') toggle();
  takePlayer?.pause(); takePlayer = new Audio(takeURL);
  takePlayer.play().catch(()=>$('micStatus').textContent='录音回放失败，请重新录制。');
};
roleMode.onchange=()=>{
  for(const button of $('cast').children)button.setAttribute('aria-pressed',String(button.dataset.role===roleMode.value));
  decisionTaken=false;decisionIndex=-1;
  if(roleMode.value) {
    line(0,true);
    $('cinemaHost').scrollIntoView({block:'nearest'});
  }
  else if(state==='role')line(index,true);
};
selectScene(chapters[0]);






