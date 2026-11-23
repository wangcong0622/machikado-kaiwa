(() => {
  'use strict';
  const finder = document.getElementById('finder');
  const input = document.getElementById('finderInput');
  const list = document.getElementById('finderList');
  const wide = document.getElementById('wideMode');
  const screen = document.getElementById('screen');
  const stage = document.querySelector('#cinemaHost .cinema');
  const subs = stage.querySelector('.cn-subs');
  const visual = stage.querySelector('.cn-visual');
  const originalParent = subs.parentElement;
  const anchor = document.createComment('字幕位置');
  originalParent.insertBefore(anchor, subs);
  const desktop = matchMedia('(min-width: 900px)');
  const sceneLines = new Map(window.scenes.map(s => [s.id,s.lines]));
  const normalize = s => s.normalize('NFKC').toLocaleLowerCase().trim();
  const docs = chapters.map(s => {
    const rows = sceneLines.get(s.id);
    return {s, rows, heading:normalize([s.title,s.label,s.tag,s.intro,...new Set(rows.map(row=>row[0]))].join(' ')), lines:rows.map(row=>normalize(row.join(' ')))};
  });
  let interruptedTrack=null;
  function renderResults() {
    const words = normalize(input.value).split(/\s+/).filter(Boolean);
    list.replaceChildren();
    let count = 0;
    for (const doc of docs) {
      const matchHeading = words.every(w=>doc.heading.includes(w));
      const matches = matchHeading ? [-1] : doc.lines.flatMap((line,i)=>words.every(w=>line.includes(w)||doc.heading.includes(w))?[i]:[]);
      for (const at of matches) {
        const row = doc.rows[at];
        const item=document.createElement('button');
        item.type='button'; item.className='finder-item';
        const img=document.createElement('img');
        img.alt='';img.loading='lazy';img.src=cinema.previewSource(doc.s.id,doc.s.visual);
        const copy=document.createElement('span'), meta=document.createElement('small'), title=document.createElement('strong'), detail=document.createElement('span');
        meta.textContent=row?doc.s.label+' · 第 '+(at+1)+' 句 · '+row[0]:doc.s.tag;
        title.textContent=row?row[1]:doc.s.title;title.lang='ja';
        detail.textContent=row?row[2]:doc.s.label;
        copy.append(meta,title,detail);item.append(img,copy);
        item.onclick=()=>{
          interruptedTrack=null;
          finder.close();
          selectScene(doc.s);
          screen.scrollIntoView({block:'start'});
          if(at>=0)line(at,false);
          document.getElementById('scenePlay').focus({preventScroll:true});
        };
        list.append(item);count++;
      }
    }
    document.getElementById('finderStatus').textContent=count?count+' 项结果':'没有找到。可以试试角色名或更短的一段台词。';
    list.scrollTop=0;
  }
  function openFinder() {
    if(finder.open || document.querySelector('dialog[open]') || document.fullscreenElement)return;
    interruptedTrack=state==='playing'?audio:null;
    if(interruptedTrack)toggle();
    input.value='';renderResults();finder.showModal();input.focus();
  }
  document.getElementById('findScene').onclick=openFinder;
  document.getElementById('closeFinder').onclick=()=>finder.close();
  finder.addEventListener('close',()=>{
    const resume=interruptedTrack && interruptedTrack===audio && state==='paused';
    interruptedTrack=null;
    if(resume)toggle();
  });
  input.oninput=renderResults;
  finder.addEventListener('keydown',e=>{
    const results=[...list.children], i=results.indexOf(document.activeElement);
    if(e.key==='ArrowDown' && results.length){e.preventDefault();results[Math.min(i+1,results.length-1)].focus();}
    if(e.key==='ArrowUp' && i>=0){e.preventDefault();(i===0?input:results[i-1]).focus();}
    if(e.key==='Enter' && e.target===input && results.length){e.preventDefault();results[0].click();}
  });
  function setWide(on) {
    screen.classList.toggle('wide-view',on);
    wide.setAttribute('aria-pressed',String(on));
    wide.textContent=on?'退出宽幕':'宽幕放映';
    if(on)visual.append(subs);else anchor.after(subs);
  }
  wide.onclick=()=>{setWide(!screen.classList.contains('wide-view'));screen.scrollIntoView({block:'start'});};
  desktop.addEventListener('change',()=>{if(!desktop.matches)setWide(false);});
  const speed=document.getElementById('speed'), nearSpeed=document.getElementById('projectionSpeed');
  nearSpeed.value=speed.value;
  nearSpeed.onchange=()=>{speed.value=nearSpeed.value;speed.dispatchEvent(new Event('change'));};
  speed.addEventListener('change',()=>nearSpeed.value=speed.value);
  stage.tabIndex=0;
  stage.setAttribute('aria-keyshortcuts','Space ArrowLeft ArrowRight R');
  stage.title='播放器获得焦点时，空格播放或暂停，左右键换句，R 重听';
  stage.addEventListener('keydown',e=>{
    if(e.defaultPrevented || e.isComposing || e.repeat || e.altKey || e.ctrlKey || e.metaKey || e.target!==stage)return;
    if(e.key===' '){e.preventDefault();toggle();}
    if(e.key==='ArrowLeft' || e.key==='ArrowRight'){e.preventDefault();seek(index+(e.key==='ArrowLeft'?-1:1));}
    if(e.key.toLowerCase()==='r'){e.preventDefault();document.getElementById('replayCaption').click();}
  });
  visual.addEventListener('click',e=>{
    if(!e.target.closest('button,input,select,dialog,.prop-panel,.cn-note'))stage.focus({preventScroll:true});
  });
  document.addEventListener('keydown',e=>{
    if(e.defaultPrevented || e.isComposing || e.ctrlKey || e.altKey || e.metaKey || e.repeat || document.querySelector('dialog[open]'))return;
    if(e.target.closest('input,textarea,select,[contenteditable=true]'))return;
    if(e.key==='/'){e.preventDefault();openFinder();return;}
    if(e.key==='Escape' && screen.classList.contains('wide-view') && !document.fullscreenElement && !stage.classList.contains('cn-expanded')){setWide(false);wide.focus({preventScroll:true});}
  });
})();

(() => {
  const links=[...document.querySelectorAll('.mast nav a')];
  const sections=links.map(link=>document.querySelector(link.hash));
  let scheduled=false;
  function update(){
    scheduled=false;
    const top=document.querySelector('.mast').getBoundingClientRect().height+40;
    let current=0;
    sections.forEach((section,i)=>{if(section.getBoundingClientRect().top<=top)current=i;});
    if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-2)current=links.length-1;
    links.forEach((link,i)=>{if(i===current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  }
  function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(update);}}
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule);
  new ResizeObserver(schedule).observe(document.querySelector('main'));
  update();
})();
