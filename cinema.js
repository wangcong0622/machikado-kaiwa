(() => {
  'use strict';
  const films = {
    cafe: ['01','返事をする前に','喫茶店','日中','咖啡馆里的两位老同事','靠窗的座位','「奥の席」是店里靠里的座位。真帆先挑座位，才敢提起公司里还没人知道的事。',15,58],
    station: ['02','動かない朝','駅のホーム','通勤時間','列车停运后，打给客户的电话','站台边缘','「見通しが立つ」指情况逐渐明朗。列车恢复时间未定，能承诺的是下一次联系。',60,53],
    store: ['03','帰り道の電話','コンビニの前','夜','下班后，姐姐拨通了弟弟的电话','店门口','「帰り道」指回去的途中。姐姐在下班路上谈起家里的事，照护已经占用了她的私人时间。',71,43]
  };
  films.apartment=['04','壁の向こうで','集合住宅','出張前夜','一次很难开口的敲门','门口的灯','敲门前，先把你能确认的现象和推测分开。',68,44];
  films.wedding=['05','乾杯のあとで','ホテルの廊下','披露宴のあと','笑声散去以后，老朋友留在走廊里','宴会厅门口','离开大家的视线，两个人才有机会谈刚才的事。',70,49];
  films.juku=['06','','駅のホーム','電話相談','','桌上的应用题','拿一题一起看，比笼统地说「她读不懂日语」更容易发现卡在哪儿。',75,79];
  films.pickup=['07','','コンビニの前','仕事帰り','','车站入口','「お迎え」是去接人。打给托班时，可以先说孩子的名字和预计到园时间。',90,46];
  films.neighbor=['08','','集合住宅','週末の朝','','门铃旁','问邻居具体什么时候、在哪儿听见声音，有助于找到两家都能做到的办法。',56,34];
  films.briefing=['09','','説明会の会場','説明会のあと','','桌上的报名资料','「願書」是申请表，「出願」是提交入学考试的报名申请。',54,76];
  films.exam=['10','','塾の面談室','模試のあと','','桌上的答卷','先看孩子写到哪一步，再讨论该复习哪一道题。',53,72];
  films.nursery=['11','','保育園の玄関','登園の朝','','鞋柜旁','「登園」是去保育园。告别前，先和老师约好由谁接手。',57,77];
  const daylightInserts = {
    cafe:{14:'extension',16:'beat-a',17:'detail',18:'beat-b'},
    juku:{3:'detail',7:'extension',8:'beat-a',9:'beat-b',10:'train'},
    pickup:{3:'detail',6:'extension',9:'bag',10:'beat-b'},
    neighbor:{0:'arrival',2:'mat',4:'book'},
    briefing:{0:'empty',1:'comparison',4:'detail',5:'three-chairs'},
    exam:{2:'detail',4:'together',8:'beat-a',9:'beat-b'},
    nursery:{2:'detail',3:'together',4:'towel',7:'beat-a',8:'beat-b'}
  };
  const beatNames = {
    cafe:['手机亮起','尝一口咖啡'],
    juku:['站台上的停顿','书页上的便签'],
    pickup:['联络本的提醒','绿灯过街'],
    exam:['圈出做对的地方','答卷收进文件夹'],
    nursery:['伸手相牵','门口挥手']
  };
  const beatLocations = {
    juku:{detail:'塾の事務室',extension:'塾の事務室','beat-a':'駅のホーム','beat-b':'塾の事務室',train:'駅のホーム'},
    pickup:{detail:'駅の入口',extension:'駅前の横断歩道','beat-a':'コンビニの前','beat-b':'駅前の横断歩道',bag:'保育園の玄関'},
    neighbor:{mat:'自宅'}
  };
  const extraShotNames = {
    juku:{train:'电车进站'},pickup:{bag:'鞋柜上的紫袋'},nursery:{towel:'递给老师的小毛巾'},
    neighbor:{arrival:'门铃前',corridor:'走廊纵深',book:'手里的绘本',mat:'家里的地垫'},
    briefing:{empty:'散场后的教室',comparison:'并排的报名资料','three-chairs':'留出三把椅子'}
  };
  const branchCutaways = {neighbor:'corridor',briefing:'comparison'};
  const insertDuration = {
    arrival:.40, book:.78, empty:.48, comparison:.54, 'three-chairs':1, train:.83, bag:.75, mat:.60, towel:.85
  };
  const daylightScenes = new Set(Object.keys(daylightInserts));
  const speakerTake = role => role === 1 ? 'b' : 'a';
  const propTakes={pickup:'bag',neighbor:'mat'};
  const daylightSource = (key,take) => propTakes[key]===take ? 'assets/objects/'+key+'.jpg' : 'assets/daylight/'+key+(take==='wide'?'':'-'+take)+'.webp';
  const oppositeLocations = {station:'会議室',juku:'塾の事務室',store:'弟の部屋',pickup:'駅の入口'};
  // Leave the speaker audible as the listener takes in a consequential line.
  const reactionLines={cafe:[6,10],station:[3],store:[2,8],apartment:[4],wedding:[4,6],juku:[3],pickup:[3],neighbor:[3],briefing:[4],exam:[6],nursery:[4]};
  let listenerCut=false;
  function previewSource(key, visual=key, line, role=0) {
    if(daylightScenes.has(key)){
      const take = !Number.isInteger(line) ? 'wide' : daylightInserts[key][line] ?? speakerTake(role);
      return daylightSource(key,take);
    }
    if(Number.isInteger(line) && edits[visual]?.[line]!==undefined)return shotSource(visual,edits[visual][line]);
    return 'assets/hd/'+visual+'-wide.jpg';
  }
  const paths = {
    play:'M8 5l11 7-11 7z',pause:'M7 5h3v14H7z M14 5h3v14h-3z',
    back:'M15 5l-7 7 7 7', next:'M9 5l7 7-7 7',
    sound:'M3 10h4l5-4v12l-5-4H3z M16 9q4 3 0 6 M19 6q7 6 0 12',
    full:'M4 9V4h5 M15 4h5v5 M20 15v5h-5 M9 20H4v-5'
  };
  function icon(name) {
    return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="'+paths[name]+'" fill="'+(['play','pause'].includes(name)?'currentColor':'none')+'" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/></svg>';
  }
  let stage, find, callbacks, film, id, story, lines=[], roles=[], showZh=true, current=-1, mode='', sound=false, ctx, ambience, loop, sequence=0;
  const update = (sel,value) => {find(sel).textContent=value};
  function stopSound(){
    clearInterval(loop);
    if(ambience){ambience.stop();ambience.disconnect();ambience=null}
  }
  function backgroundSound(){
    stopSound();
    if(!sound || !ctx || !mixAmbience || document.hidden || !stage.classList.contains('cn-playing'))return;
    const len=ctx.sampleRate*3, buffer=ctx.createBuffer(1,len,ctx.sampleRate);
    const samples=buffer.getChannelData(0);
    let last=0;
    for(let i=0;i<len;i++){last=.98*last+.02*(Math.random()*2-1); samples[i]=id==='store'?last*.7+(Math.random()-.5)*.07:last}
    ambience=ctx.createBufferSource();ambience.buffer=buffer;ambience.loop=true;
    const gain=ctx.createGain();gain.gain.value=id==='station'?.22:.13;
    ambience.connect(gain).connect(ctx.destination);ambience.start();
    ambience.onended=()=>gain.disconnect();
    const chime=()=>{
      if(!sound||document.hidden)return;
      const notes={station:[622,466],cafe:[1290,1770],store:[110,164],apartment:[98,147],wedding:[659,988]}[id] ?? [];
      notes.forEach((hz,k)=>{
        const osc=ctx.createOscillator(), vol=ctx.createGain(), t=ctx.currentTime+k*.22;
        osc.frequency.value=hz;vol.gain.setValueAtTime(.0001,t);vol.gain.exponentialRampToValueAtTime(id==='store'?.008:.013,t+.025);
        vol.gain.exponentialRampToValueAtTime(.0001,t+.8);osc.connect(vol).connect(ctx.destination);osc.start(t);osc.stop(t+.85);osc.onended=()=>{osc.disconnect();vol.disconnect()};
      });
    };
    loop=setInterval(chime,id==='station'?17300:26400);
  }
  function mount(host,actions){
    callbacks=actions;
    host.innerHTML = `<section class="cinema" aria-label="情景剧播放器">
      <div class="cn-visual">
        <div class="cn-shot"></div><div class="cn-face"></div>
        <div class="cn-weather" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="cn-passer" aria-hidden="true"><i></i><b></b><em></em><em></em><span></span></div>
        <div class="cn-grade"></div>
        <div class="cn-call" hidden aria-label="通话双方"></div>
        <div class="cn-slate"><span class="cn-dot"></span><b></b><i></i><span class="cn-time"></span></div>
        <button class="cn-pin" aria-expanded="false"><span>＋</span></button>
        <aside class="cn-note" hidden><b></b><p></p><button aria-label="关闭场景注释">×</button><button class="inspect-from-note">观察近景</button></aside>
      </div>
      <div class="cn-bar">
        <button class="cn-toggle"></button>
        <button class="cn-back" aria-label="上一句">${icon('back')}</button>
        <button class="cn-next" aria-label="下一句">${icon('next')}</button>
        <span class="cn-count"></span>
        <input class="cn-range" type="range" aria-label="选择播放台词" min="0" value="0">
        <div class="cn-scrub-preview" hidden aria-hidden="true"><img alt=""><span></span></div>
        <button class="cn-audio" aria-label="环境音" title="环境音" aria-pressed="false">${icon('sound')}</button>
        <button class="fullscreen-observe" aria-label="现场观察" title="现场观察">⌕</button>
        <button class="cn-full" aria-label="全屏" title="全屏">${icon('full')}</button>
      </div>
      <details class="cn-cameras" hidden>
        <summary><span>机位</span><span class="cn-current-shot"></span></summary>
        <div class="cn-camera-list" role="group" aria-label="可选机位"></div>
      </details>
      <div class="cn-dialogue">
        <div class="cn-subs" hidden><div class="cn-role"></div><div class="cn-ja" lang="ja"></div><div class="cn-zh"></div></div>
        <div class="cn-choice" hidden><strong></strong><div></div></div>
      </div>
    </section>`;
    stage=host.firstElementChild;find=s=>stage.querySelector(s);
    find('.cn-audio').setAttribute('aria-pressed',String(sound));
    find('.cn-toggle').onclick=()=>callbacks.toggle();
    const range=find('.cn-range'),preview=find('.cn-scrub-preview');
    function previewLine(n){
      const row=lines[n];
      if(!row)return;
      const src=previewSource(story,id,n,roles.indexOf(row[0]));
      const img=preview.querySelector('img');
      if(img.getAttribute('src')!==src)img.src=src;
      preview.querySelector('span').textContent='第 '+(n+1)+' 句 · '+row[0];
      const bar=find('.cn-bar').getBoundingClientRect(),track=range.getBoundingClientRect();
      const pos=track.left-bar.left+track.width*n/Math.max(1,lines.length-1);
      preview.hidden=false;
      const half=preview.offsetWidth/2;
      preview.style.left=Math.max(half+4,Math.min(bar.width-half-4,pos))+'px';
    }
    range.onpointermove=e=>{
      const bounds=range.getBoundingClientRect();
      previewLine(Math.round(Math.min(1,Math.max(0,(e.clientX-bounds.left)/bounds.width))*(lines.length-1)));
    };
    range.oninput=()=>{previewLine(Number(range.value));update('.cn-count',(Number(range.value)+1)+' / '+lines.length);};
    range.onchange=()=>{preview.hidden=true;callbacks.seek(Number(range.value));};
    range.onpointerleave=range.onblur=range.onpointercancel=range.onpointerup=()=>{preview.hidden=true;};
    find('.cn-back').onclick=()=>callbacks.step(-1);
    find('.cn-next').onclick=()=>callbacks.step(1);
    const fullButton=find('.cn-full');
    function syncFullButton(){
      const expanded=document.fullscreenElement===stage || stage.classList.contains('cn-expanded');
      fullButton.setAttribute('aria-pressed',String(expanded));
      fullButton.setAttribute('aria-label',expanded?'退出全屏':'全屏');
      fullButton.title=fullButton.getAttribute('aria-label');
    }
    document.addEventListener('fullscreenchange',syncFullButton);
    syncFullButton();
    fullButton.onclick=async()=>{
      if(stage.classList.contains('cn-expanded'))stage.classList.remove('cn-expanded');
      else if(document.fullscreenElement===stage)await document.exitFullscreen();
      else{
        try{
          if(!stage.requestFullscreen || document.fullscreenEnabled===false)stage.classList.add('cn-expanded');
          else await stage.requestFullscreen();
        }catch{stage.classList.add('cn-expanded');}
      }
      syncFullButton();
    };
    find('.cn-audio').onclick=async()=>{
      try{
        ctx ||= new (window.AudioContext || window.webkitAudioContext)();
        if(ctx.state!=='running')await ctx.resume();
        sound=!sound;find('.cn-audio').setAttribute('aria-pressed',sound);backgroundSound();
      }catch{find('.cn-audio').title='当前浏览器无法启动环境音'}
    };
    find('.cn-pin').onclick=()=>note(find('.cn-note').hidden);
    find('.cn-note button').onclick=()=>{note(false);find('.cn-pin').focus()};
    find('.inspect-from-note').onclick=()=>{note(false);find('.cn-pin').focus();window.Observation.open(story);};
    find('.fullscreen-observe').onclick=()=>window.Observation.open(story);
    stage.onkeydown=e=>{
      if(e.key!=='Escape')return;
      const cameras=find('.cn-cameras');
      if(cameras.open && cameras.contains(document.activeElement)){
        cameras.open=false;
        cameras.querySelector('summary').focus();
        return;
      }
      note(false);
      stage.classList.remove('cn-expanded');
      syncFullButton();
    };
    document.addEventListener('visibilitychange',backgroundSound);
    window.SceneProps?.mount(find('.cn-visual'),()=>{if(stage.classList.contains("cn-playing"))callbacks.toggle();});
  }
  function note(open){find('.cn-pin').setAttribute('aria-expanded',open);find('.cn-note').hidden=!open}
  function scene(key,dialog,visual=key){
    find('.cn-scrub-preview').hidden=true;
    id=visual;story=key;film=films[key];lines=dialog;roles=[...new Set(dialog.map(l=>l[0]))];
    window.SceneProps?.scene(key);
    const daylight=daylightScenes.has(key);
    const call=find('.cn-call');
    call.hidden=true;call.replaceChildren();
    if(oppositeLocations[key])roles.forEach((name,role)=>{
      const pane=document.createElement('div'),img=document.createElement('img'),tag=document.createElement('span');
      img.src=portrait(key,role);img.alt='';tag.textContent=name+' · '+(role===0?film[2]:oppositeLocations[key]);
      pane.append(img,tag);call.append(pane);
    });
    stage.dataset.film=daylight ? key : visual;
    stage.dataset.story=key;
    stage.toggleAttribute('data-daylight',daylight);
    delete stage.dataset.cameraTake;
    angle='edit';
    const sceneInserts=new Set(Object.values(daylightInserts[key] ?? {}));
    if(key==='pickup')sceneInserts.add('beat-a');
    if(key==='neighbor')sceneInserts.add('detail');
    if(branchCutaways[key])sceneInserts.add(branchCutaways[key]);
    buildCameraGallery(daylight,sceneInserts);
    updateAngle();
    stage.style.setProperty('--plate','url("'+previewSource(key,visual)+'")');
    if(daylight){
      for(const take of new Set(['a','b',...sceneInserts])){
        const still=new Image();still.src=daylightSource(key,take);
      }
    }else{
      for(const suffix of ['0','1']){const portrait=new Image();portrait.src='assets/hd/'+visual+'-'+suffix+'.jpg';}
    }
    stage.style.setProperty('--px',film[7]+'%');stage.style.setProperty('--py',film[8]+'%');
    update('.cn-slate b',film[2]);update('.cn-time',film[3]);
    update('.cn-note b',film[5]);update('.cn-note p',film[6]);find('.cn-pin').setAttribute('aria-label','查看场景细节 · '+film[5]);
    find('.cn-range').max=Math.max(0,lines.length-1);backgroundSound();frame(-1,false);
  }
  function transport(playing){
    stage.classList.toggle('cn-playing',playing);
    if((!playing || !mixAmbience) && ambience)stopSound();
    if(playing && sound && mixAmbience && !ambience){
      try{
        ctx ||= new (window.AudioContext || window.webkitAudioContext)();
        if(ctx.state==='suspended')ctx.resume().catch(()=>{});
        backgroundSound();
      }catch{sound=false;find('.cn-audio').setAttribute('aria-pressed','false');}
    }
    const btn=find('.cn-toggle');btn.innerHTML=icon(playing?'pause':'play');btn.setAttribute('aria-label',playing?'暂停':'播放');
    update('.cn-count',(current<0?'00':String(current+1).padStart(2,'0'))+' / '+String(lines.length).padStart(2,'0'));
    const range=find('.cn-range');range.value=Math.max(0,current);range.style.setProperty('--seek',(Math.max(0,current)/Math.max(1,lines.length-1)*100)+'%');
  }
  const angleNames = {edit:'自动剪辑',reverse:'对方反应',wide:'场景全景',together:'同框近景',detail:'道具特写',extension:'结尾补拍'};
  let angle='edit', memoryFrame=null, branchFrame=null, cameraProgress=0, cameraNames={};
  function buildCameraGallery(daylight,inserts){
    const gallery=find('.cn-cameras'), list=find('.cn-camera-list');
    gallery.open=false;
    gallery.hidden=false;
    list.replaceChildren();
    cameraNames={...angleNames,a:roles[0]+'近景',b:roles[1]+'近景',...extraShotNames[story]};
    if(beatNames[story]) [cameraNames['beat-a'],cameraNames['beat-b']]=beatNames[story];
    const takes=['edit','wide','a','b',...inserts];
    if(oppositeLocations[story]){takes.splice(1,0,'call');cameraNames.call='通话同屏';}
    for(const take of takes){
      const button=document.createElement('button');
      button.type='button';
      button.dataset.take=take;
      if(take==='call'){
        const pair=document.createElement('div');pair.className='cn-call-thumb';
        roles.forEach((_,i)=>{const img=document.createElement('img');img.src=portrait(story,i);img.alt='';pair.append(img);});
        button.append(pair);
      }else if(take!=='edit'){
        const still=document.createElement('img');
        still.src=daylight?daylightSource(story,take):take==='wide'?previewSource(story,id):portrait(story,take==='a'?0:1);
        still.alt='';
        still.loading='lazy';
        button.append(still);
      }
      const label=document.createElement('span');
      label.textContent=cameraNames[take];
      button.append(label);
      button.onclick=()=>{
        angle=take;updateAngle();
        if(daylight)showDaylightCamera();
        else if(mode==='branch' && branchFrame)branch(branchFrame.ja,find('.cn-zh').textContent,branchFrame.role,stage.classList.contains('cn-playing'),branchFrame.outcome);
        else if(mode==='choice')showFixedCamera(0);
        else if(memoryFrame)frame(...memoryFrame);
      };
      list.append(button);
    }
  }
  function currentCameraLabel(take) {
    update('.cn-current-shot', (angle==='edit'?'自动 · ':'')+(cameraNames[take] ?? ''));
  }
  function updateAngle(){
    find('.cn-call').hidden=angle!=='call';
    for(const button of find('.cn-camera-list').children){
      button.setAttribute('aria-pressed',String(button.dataset.take===angle));
    }
    currentCameraLabel(stage.dataset.cameraTake ?? 'wide');
  }
  function followReel(){
    angle='edit';
    updateAngle();
  }
  function showDaylightCamera(){
    const row=lines[current];
    const role=mode==='branch' ? branchFrame.role : roles.indexOf((row ?? lines[0])[0]);
    if(angle==='call')return showCall(role);
    let take='wide';
    if(angle!=='edit')take=angle;
    else if(mode==='line'){
      const insert=daylightInserts[story][current];
      const cutAfter=insertDuration[insert] ?? (insert?.startsWith('beat-') ? .73 : insert==='extension' ? .48 : .27);
      take=(cameraProgress<=cutAfter ? insert : undefined) ?? speakerTake(role);
    }else if(mode==='branch'){
      const cutaway=branchCutaways[story];
      take=branchFrame.outcome===1 && cameraProgress<(cutaway ? .42 : .24) ? cutaway ?? 'wide' : speakerTake(role);
    }
    if(stage.dataset.cameraTake===take)return;
    stage.dataset.cameraTake=take;
    currentCameraLabel(take);
    const picturedRole=take==='a'?0:take==='b'?1:role;
    shot(picturedRole,take==='wide',null,null,false,daylightSource(story,take));
    if(!['a','b','wide'].includes(take))stage.dataset.framing='detail';
    const location=beatLocations[story]?.[take] ?? (picturedRole===1 && oppositeLocations[story] ? oppositeLocations[story] : film[2]);
    update('.cn-slate b',location);
  }
  function portrait(key,role){
    return daylightScenes.has(key)?daylightSource(key,speakerTake(role)):'assets/hd/'+key+'-'+role+'.jpg';
  }
  function showFixedCamera(role){
    if(angle==='call')return showCall(role);
    const take=angle==='edit'?'wide':angle;
    const pictured=take==='a'?0:take==='b'?1:role;
    shot(pictured,take==='wide');
    currentCameraLabel(take);
    update('.cn-slate b',pictured===1 && take!=='wide' && oppositeLocations[story]?oppositeLocations[story]:film[2]);
  }
  function showCall(role){
    const call=find('.cn-call');
    call.hidden=false;
    [...call.children].forEach((pane,i)=>pane.classList.toggle('turn',i===role && (mode==='line'||mode==='branch')));
    currentCameraLabel('call');
  }
  let performanceTimer=0, performanceKey='', performanceIndex=0;
  let latestFrame=0;
  const shotSource=(film,n)=>'assets/restored/shots/'+film+'-'+String(n).padStart(2,'0')+'.webp';
  const edits={
    station:[0,1,0,3,3,5,1,7,8,9,9,10,8,10],
    store:[0,1,0,3,4,5,4,7,10,7,11,1,4,5],
    apartment:[0,2,3,3,4,6,5,8,10,9],
    wedding:[0,2,3,2,4,6,7,0,4,9]
  };
  const remoteShots={station:new Set([1,3,5,7,9,10,11]),store:new Set([1,3,5,7,9])};
  function shot(role, wide, number, performance, playing=false, nativeOverride){
    const face=find('.cn-face'), ticket=++sequence;
    clearInterval(performanceTimer);
    stage.dataset.role=role;
    stage.dataset.framing=wide ? 'wide' : 'speaker';
    const key=performance?id+':'+current:'';
    if(key!==performanceKey){performanceKey=key;performanceIndex=0;}
    if(wide){face.classList.remove('visible');return;}
    const src=nativeOverride ?? (performance?performance.frames[performanceIndex]:Number.isInteger(number)?shotSource(id,number):'assets/hd/'+id+'-'+role+'.jpg');
    function reveal(path){
      const requested=++latestFrame;
      if(face.dataset.src===path){face.classList.add('visible');return;}
      const picture=new Image();
      picture.onload=()=>{if(sequence!==ticket || requested!==latestFrame)return;face.style.backgroundImage='url("'+path+'")';face.dataset.src=path;face.classList.add('visible');};
      if(nativeOverride && path===nativeOverride && Number.isInteger(number)){
        picture.onerror=()=>{if(sequence===ticket && requested===latestFrame)reveal(shotSource(id,number));};
      }
      picture.src=path;
    }
    reveal(src);
    if(performance && playing && !matchMedia('(prefers-reduced-motion: reduce)').matches){
      performanceTimer=setInterval(()=>{
        if(sequence!==ticket || ++performanceIndex>=performance.frames.length-1){
          clearInterval(performanceTimer);performanceIndex=performance.frames.length-1;
        }
        if(sequence===ticket)reveal(performance.frames[performanceIndex]);
      },performance.duration/performance.frames.length);
    }
  }
  function captions(ja,zh,role){update('.cn-role',roles[role]||'');update('.cn-ja',ja);update('.cn-zh',zh);find('.cn-zh').hidden=!showZh}
  function display(value){
    mode=value;stage.dataset.mode=value;note(false);
    find('.cn-choice').hidden=value!=='choice';find('.cn-subs').hidden=value==='choice';
    find('.cn-pin').hidden=value!=='poster';
  }
  function frame(index,playing){
    memoryFrame=[index,playing];
    if(mode!=='line'||current!==index)cameraProgress=0;
    current=index;const row=lines[index];display(row?'line':'poster');transport(playing);
    if(row){const role=roles.indexOf(row[0]);captions(row[1],row[2],role);
      if(daylightScenes.has(story))return showDaylightCamera();
      const clip=window.motionClips?.[id];
      if(angle!=='edit')return showFixedCamera(role);
      shot(role,false,null,clip?.line===index?clip:null,playing);
      currentCameraLabel(speakerTake(role));
      update('.cn-slate b',role===1 && oppositeLocations[story] ? oppositeLocations[story] : film[2]);}
    else {
      const [speaker, ja, zh] = lines[0];
      captions(ja, zh, roles.indexOf(speaker));
      if(daylightScenes.has(story))return showDaylightCamera();
      showFixedCamera(0);
    }
  }
  function branch(ja,zh,roleIndex,playing=true,outcome){
    if(mode!=='branch'||branchFrame?.ja!==ja)cameraProgress=0;
    branchFrame={ja,role:roleIndex,outcome};
    display('branch');
    captions(ja,zh,roleIndex);
    transport(playing);
    if(daylightScenes.has(story))return showDaylightCamera();
    if(angle!=='edit')return showFixedCamera(roleIndex);
    currentCameraLabel(speakerTake(roleIndex));
    const reaction=Number.isInteger(outcome)?'assets/hd/'+id+'-reply-'+outcome+'.jpg':undefined;
    shot(roleIndex,false,Number.isInteger(outcome)?10+outcome:null,null,playing,reaction);
  }
  function decision(prompt,options,onPick,at,explored){
    if(Number.isInteger(at))current=at;
    display('choice');
    if(daylightScenes.has(story))showDaylightCamera();
    else showFixedCamera(0);
    transport(false);update('.cn-choice strong',prompt);
    const box=find('.cn-choice > div');box.replaceChildren();
    options.forEach((option,i)=>{
      const button=document.createElement('button'),route=document.createElement('span'),ja=document.createElement('b'),zh=document.createElement('small');
      route.textContent=String.fromCharCode(65+i)+(explored[i]?' ✓':'');
      ja.lang='ja';ja.textContent=typeof option==='string'?option:option.ja??option[0];
      zh.textContent=typeof option==='string'?'':option.zh??option[1]??'';zh.hidden=!showZh;
      button.append(route,ja,zh);
      button.onclick=()=>{
        if (document.activeElement===button) find('.cn-toggle').focus({preventScroll:true});
        onPick(i);
      };
      box.append(button);
    });
  }
  function translation(on){showZh=Boolean(on);find('.cn-zh').hidden=!showZh;find('.cn-choice').querySelectorAll('small').forEach(n=>n.hidden=!showZh)}
  let inserted=false;
  function cue(progress,remainingSeconds){
    if(mode==='line' && angle==='edit' && mixAmbience && reactionLines[story]?.includes(current) && progress>.48 && remainingSeconds>0 && remainingSeconds<2.1){
      if(!listenerCut){
        listenerCut=true;
        const role=1-roles.indexOf(lines[current][0]);
        const take=speakerTake(role);
        shot(role,false,null,null,false,portrait(story,role));
        stage.dataset.cameraTake=take;
        update('.cn-current-shot','自动 · '+roles[role]+'的反应');
        update('.cn-slate b',role===1 && oppositeLocations[story]?oppositeLocations[story]:film[2]);
      }
      return;
    }
    listenerCut=false;
    if(daylightScenes.has(story)){
      cameraProgress=progress;
      if(angle==='edit'&&(mode==='line'||mode==='branch'))showDaylightCamera();
      return;
    }
    if(mode!=='line'||angle!=='edit'||!stage.classList.contains('cn-playing')||!memoryFrame)return;
    if(progress<.15){inserted=false;return;}
    const cut=edits[id][current];
    if(progress>.58 && progress<.85 && !inserted && cut!==undefined){
      inserted=true;shot(Number(stage.dataset.role),false,cut);
      if(remoteShots[id])update('.cn-slate b',remoteShots[id].has(cut)?oppositeLocations[story]:film[2]);
    }
  }
  let mixAmbience=true;
  function setAudition(audition){
    mixAmbience=!audition;
    cameraProgress=0;
    inserted=false;
    listenerCut=false;
  }
  window.Cinema={mount,scene,frame,branch,decision,translation,previewSource,portrait,cue,setAudition,followReel};
})();







