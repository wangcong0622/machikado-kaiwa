(() => {
  'use strict';
  const get = id => document.getElementById(id);
  const steps = [
    ['#scenePlay','播放本幕','从这里开始听当前场景。播放时，同一个按钮可以暂停或继续。'],
    ['.caption-options label:has(input[value="listen"])','先听，再看字幕','选「先听」会收起字幕。每句结束后，你可以重听、显示日语，或继续听下一句。'],
    ['#cast button:nth-child(2)','选一个人物，和对方接戏','点这个角色，从第一句进入对戏。轮到你时，剧情会停下；说完再点「我说完了」。'],
    ['#jumpChoice','试试不同的回应','从这里直接跳到本幕的选择点。选一句日语，就能听到对方相应的回答。'],
    ['#challengeOpen','听一句，接一句','进入本幕的对白闯关。选出贴合人物处境的答句；选错可以看解释，答对就能听到角色接话并继续。'],
    ['#observeScene','近看现场里的细节','打开物件特写，放大观察，再听一句与线索有关的原声。'],
    ['#hearExample','听懂表达和词汇','对白工坊会高亮原句里的重点表达，也给出词汇读音和中文释义。点这里听对应原句。']
  ];
  const modal=get('guide'),spot=get('guideSpot'),card=get('guideCard');
  const seenKey='machikado.spotlightSeen.v1';
  let step=0,target=null,origin,track,wasWide,runTarget=false,raf=0;
  const clamp=(x,min,max)=>Math.max(min,Math.min(x,max));
  function place(){
    if(!modal.open || !target)return;
    const r=target.getBoundingClientRect(), w=modal.clientWidth,h=modal.clientHeight;
    const left=clamp(r.left-4,2,w-2), right=clamp(r.right+4,2,w-2);
    const top=clamp(r.top-4,2,h-2), bottom=clamp(r.bottom+4,2,h-2);
    Object.assign(spot.style,{left:left+'px',top:top+'px',width:Math.max(0,right-left)+'px',height:Math.max(0,bottom-top)+'px'});
    const cw=card.offsetWidth,ch=card.offsetHeight,gap=12;
    let x=(left+right-cw)/2,y=bottom+gap;
    if(y+ch>h-gap){
      if(top-ch-gap>=gap)y=top-ch-gap;
      else {x=right+gap+cw<=w-gap?right+gap:left-cw-gap;y=(top+bottom-ch)/2;}
    }
    card.style.left=clamp(x,gap,w-cw-gap)+'px';card.style.top=clamp(y,gap,h-ch-gap)+'px';
  }
  function schedule(){
    if(!modal.open || raf)return;
    raf=requestAnimationFrame(()=>{raf=0;place();});
  }
  function show(i){
    step=i;
    const [selector,title,text]=steps[i];
    target=document.querySelector(selector);
    target.scrollIntoView({block:'center',inline:'nearest',behavior:'instant'});
    get('guideTitle').textContent=title;get('guideText').textContent=text+' 点击高亮处可结束引导并直接使用。';
    spot.setAttribute('aria-label','立即使用：'+title);
    get('guideCount').textContent=(i+1)+' / '+steps.length;
    get('guidePrev').disabled=i===0;
    get('guideNext').textContent=i===steps.length-1?'完成':'下一步';
    place();get('guideNext').focus({preventScroll:true});
  }
  function open(){
    if(modal.open || document.querySelector('dialog[open]'))return;
    origin={x:scrollX,y:scrollY,focus:document.activeElement};
    track=state==='playing'?audio:null;
    if(track)toggle();
    wasWide=get('screen').classList.contains('wide-view');
    if(wasWide)get('wideMode').click();
    runTarget=false;modal.showModal();show(0);
  }
  get('guideOpen').onclick=open;
  get('guidePrev').onclick=()=>show(step-1);
  get('guideNext').onclick=()=>step===steps.length-1?modal.close():show(step+1);
  get('guideClose').onclick=get('guideLeave').onclick=()=>modal.close();
  spot.onclick=()=>{runTarget=true;modal.close();};
  modal.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'&&step<steps.length-1){e.preventDefault();show(step+1);}
    if(e.key==='ArrowLeft'&&step>0){e.preventDefault();show(step-1);}
  });
  modal.addEventListener('close',()=>{
    try{localStorage.setItem(seenKey,'1');}catch{}
    if(runTarget){
      target.focus({preventScroll:true});target.click();
      if(step===1 && track===audio && state==='paused')toggle();
    }else{
      if(wasWide && !get('screen').classList.contains('wide-view'))get('wideMode').click();
      scrollTo({left:origin.x,top:origin.y,behavior:'instant'});
      (origin.focus===document.body?get('guideOpen'):origin.focus)?.focus({preventScroll:true});
      if(track && track===audio && state==='paused')toggle();
    }
    track=null;target=null;
  });
  window.addEventListener('resize',schedule);
  window.addEventListener('scroll',schedule,true);
  new ResizeObserver(schedule).observe(card);
  let seen=false;
  try{seen=localStorage.getItem(seenKey)==='1';}catch{}
  if(!seen)open();
})();
