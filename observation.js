(() => {
  'use strict';
  const insert = id => 'assets/objects/' + id + '.jpg';
  const evidence = {
    cafe: {
      label:'靠窗的两个咖啡杯', image:insert('cafe'), fallback:'assets/daylight/cafe-detail.webp', point:[25,60], detail:'看看桌边的杯子',
      question:'两杯咖啡摆在靠窗的桌上。坐下前，真帆为什么还要问能不能坐里面？',
      options:['工作上的消息还没告诉公司的人，她想找个安心说话的位置。','她已经决定接下职位，想在安静的地方请朋友帮她拟一份安排。'], correct:0,
      feedback:['她先问「奥の席でもいい？」紧接着解释自己还没和公司的人说过这件事。','两人确实会谈安排，不过真帆此刻仍在犹豫。她挑座位时先提到的是消息还没说出去。'], line:0
    },
    station: {
      label:'会议室里的腕表', image:'assets/restored/shots/station-03.webp', point:[58,48], detail:'看看表盘',
      question:'佐伯看了看时间。她在替谁保留哪一段时间？',
      options:['替迟到的负责人争取赶到会议室的时间。','替能拍板的部长保留参加会议开头的时间。'], correct:1,
      feedback:['换路线也许能早一点到，但负责人抵达时，部长可能已经得走了。','部长十点半有另一场会议。先谈需要拍板的事，才能用好他在场的时间。'], line:3
    },
    store: {
      label:'弟弟手边的记事本', image:'assets/restored/shots/store-07.webp', point:[48,73], detail:'看看笔记页',
      question:'弟弟拿起笔。怎样记，才回应了姐姐真正想分给他的事？',
      options:['记下次预约由谁确认，以及确认后要通知谁。','记下周三要请假，争取这次替姐姐陪诊。'], correct:0,
      feedback:['弟弟接下了确认预约和共享时间的工作。姐姐以后可以少一次主动张罗。','请假能减轻这一次的压力。姐姐还想有人主动接手每次陪诊前的协调。'], line:9
    },
    apartment: {
      label:'玄关天花板的水渍', image:'assets/restored/shots/apartment-03.webp', point:[64,42], detail:'看水渍边缘',
      question:'只凭眼前这片水渍，恵美可以怎样向邻居说明情况？',
      options:['水迹出现在洗面所下方，楼上的管道应该已经漏了。','先说自己在哪里看见水渍，再问楼上同一位置有什么。'], correct:1,
      feedback:['亮说那个位置可能靠近洗面所，但在楼上没有看见异常，还要请人检查。','恵美亲眼看见的是位置和变化。把原因留待检查，邻居才容易一起想办法。'], line:3
    },
    wedding: {
      label:'宴会厅外的走廊', image:'assets/restored/shots/wedding-09.webp', point:[55,49], detail:'看两人站的位置',
      question:'佳奈特意在走廊开口。换一个说话的地方，对她意味着什么？',
      options:['她能自己决定让谁听见，也能把席间没说的话讲完。','她希望结衣先听懂，再回到桌边替她解释清楚。'], correct:0,
      feedback:['让佳奈受伤的是，自己还没决定告诉谁，事情就被当众说出来了。','她随后还请结衣别再去向其他人解释，以免私事传得更开。'], line:4
    },
    juku: {
      label:'停笔的算数应用题', image:insert('juku'), fallback:'assets/daylight/juku-detail.webp', point:[68,76], detail:'看空着的答题框',
      question:'孩子在列式前停住了。老师想先用哪个问题找出卡点？',
      options:['“如果我把题意翻好，这道算式你会算吗？”','“你能用自己的话说说，这道题在问什么吗？”'], correct:1,
      feedback:['翻译能帮助孩子继续做，却也可能跳过她自己读题时遇到的困难。','「本人の言葉で」让孩子把读懂的意思说出来，老师才能听见她卡在哪一步。'], line:3
    },
    pickup: {
      label:'柜顶的紫色束口袋', image:insert('pickup'), fallback:'assets/daylight/pickup-detail.webp', point:[56,42], detail:'看看孩子的袋子',
      question:'孩子的袋子还在园里。离六点不远了，健太刚到车站，此刻能答应什么？',
      options:['出站就告诉美咲能不能赶上，留出另作安排的时间。','既然已经到了车站，就先答应六点前一定到园里。'], correct:0,
      feedback:['他说「駅を出たら」就联系。两人先约定下一次确认的时刻。','到了车站还要走到园里。健太答应尽快确认，延长托班也要提前联系。'], line:3
    },
    neighbor: {
      label:'垫子上摊开的绘本', image:insert('neighbor'), fallback:'assets/daylight/neighbor-detail.webp', point:[61,56], detail:'看看绘本里的兔子',
      question:'垫子只是美咲的一项安排。邻居哪句话还改变了周末的作息？',
      options:['只要铺了垫子，孩子清晨在走廊跑也没问题。','周六八点以后他不介意，所以八点前可以先玩坐着玩的。'], correct:1,
      feedback:['邻居说铺垫子应该会改善，并没有保证清早跑动就听不见了。','邻居补充了具体时间。美咲据此想到了八点前一起看绘本的办法。'], line:3
    },
    briefing: {
      label:'说明会的升学资料', image:insert('briefing'), fallback:'assets/daylight/briefing-detail.webp', point:[70,63], detail:'看看右页的对照表',
      question:'美咲可以用中文说明报名手续。她另外准备一张纸，是请谁做什么？',
      options:['让家长和孩子分别写下各自重视的择校条件。','让家长先写出最合适的学校，再请老师把理由译给孩子。'], correct:0,
      feedback:['手续有具体的办理方式，择校还要听孩子的想法。两个人先写下自己的条件。','老师愿意解释流程，但不能代替一家人选择。孩子也要有提问和表达的机会。'], line:4
    },
    exam: {
      label:'写到一半的模考答卷', image:'assets/daylight/exam-detail.webp', point:[46,39], detail:'看看老师标的勾',
      question:'末尾没有写出答案，老师为什么还想先把前面圈起来？',
      options:['先把做对的标出来，好把所有错题都留给孩子回家重做。','先让孩子看到已经想对的部分，再一起查时间分配。'], correct:1,
      feedback:['老师只请孩子先重看一道题，时间分配会在下次课一块儿看。','老师希望家长先说一句「ここまでは合ってたよ」。没算完的题里也有值得肯定的思路。'], line:6
    },
    nursery: {
      label:'门口鞋柜里的童鞋', image:insert('nursery'), fallback:'assets/daylight/nursery-detail.webp', point:[47,52], detail:'看看粉色童鞋',
      question:'门口摆着一排小鞋。孩子还拉着妈妈的手时，美咲告诉老师今天要留意什么？',
      options:['孩子今天醒得早，显得困时可以试着把毛巾递给她。','一到园就把毛巾递给她，她很快就能跟妈妈道别。'], correct:0,
      feedback:['「眠くなったら」说清了什么时候试。老师可以看孩子当时的状态再行动。','妈妈没有保证毛巾能解决分离时的难过，她特别指出的是孩子困的时候。'], line:4
    }
  };

  let modal, stage, api, active, opener, zoomed;
  const get = selector => modal.querySelector(selector);
  const setText = (selector, value) => {get(selector).textContent=value;};
  const button = (label, cls) => {
    const node=document.createElement('button');
    node.type='button';node.className=cls;node.textContent=label;
    return node;
  };

  function fit() {
    if (!modal?.open || !stage) return;
    const rect=stage.getBoundingClientRect();
    const width=Math.min(window.innerWidth,rect.width);
    const height=Math.min(window.innerHeight,rect.height);
    modal.style.left=Math.max(0,Math.min(rect.left,window.innerWidth-width))+'px';
    modal.style.top=Math.max(0,Math.min(rect.top,window.innerHeight-height))+'px';
    modal.style.width=width+'px';modal.style.height=height+'px';
  }

  function close() {
    if (!modal?.open) return;
    modal.close();
    active=null;
    if (opener?.isConnected) opener.focus({preventScroll:true});
    opener=null;
  }

  function zoom(value) {
    zoomed=value;
    const detail=evidence[active];
    const tip=get('.obs-zoom');
    modal.classList.toggle('obs-zoomed',value);
    tip.textContent=value?'还原全图':detail.detail+' · 放大';
    tip.setAttribute('aria-pressed',String(value));
    get('.obs-marker').setAttribute('aria-pressed',String(value));
  }

  function answer(index) {
    const clue=evidence[active];
    [...get('.obs-options').children].forEach((el,i)=>el.setAttribute('aria-pressed',String(index===i)));
    const result=get('.obs-result');
    result.hidden=false;
    setText('.obs-verdict',index===clue.correct?'这与对白吻合':'再听听人物怎样说');
    setText('.obs-explain',clue.feedback[index]);
    setText('.obs-listen','▶ 听第 '+(clue.line+1)+' 句');
    if (result.getBoundingClientRect().bottom>modal.getBoundingClientRect().bottom-8) {
      result.scrollIntoView({block:'nearest',behavior:'instant'});
    }
  }

  function open(id) {
    const clue=evidence[id];
    if (!modal || !clue) return false;
    if (!modal.open) {
      opener=document.activeElement;
      api.pause?.();
    }
    active=id;
    setText('.obs-title',clue.label);setText('.obs-question',clue.question);
    const photo=get('.obs-photo');
    photo.onerror=()=>{
      if(active===id && clue.fallback && !photo.src.endsWith(clue.fallback))photo.src=clue.fallback;
    };
    photo.src=clue.image;photo.alt=clue.label;
    const viewport=get('.obs-viewport');
    viewport.style.setProperty('--ox',clue.point[0]+'%');
    viewport.style.setProperty('--oy',clue.point[1]+'%');
    get('.obs-marker').setAttribute('aria-label',clue.detail+'，切换局部放大');
    zoom(false);
    get('.obs-options').replaceChildren(...clue.options.map((s,i)=>{
      const b=button(s,'obs-answer');b.setAttribute('aria-pressed','false');b.onclick=()=>answer(i);return b;
    }));
    get('.obs-result').hidden=true;setText('.obs-verdict','');setText('.obs-explain','');
    if(!modal.open)modal.showModal();
    fit();get('.obs-scroll').scrollTop=0;get('.obs-close').focus({preventScroll:true});
    return true;
  }

  function mount(host, callbacks) {
    if (modal) {close();modal.remove();window.removeEventListener('resize',fit);window.removeEventListener('scroll',fit,true);}
    stage=host;api=callbacks;
    modal=document.createElement('dialog');modal.className='obs-modal';modal.setAttribute('aria-labelledby','obs-title');
    modal.innerHTML='<div class="obs-scroll"><header class="obs-head"><div><span>现场观察</span><h3 class="obs-title" id="obs-title"></h3></div><button type="button" class="obs-close" aria-label="关闭现场观察">×</button></header><div class="obs-grid"><div class="obs-visual"><div class="obs-viewport"><img class="obs-photo" alt=""><button type="button" class="obs-marker">＋</button></div><button type="button" class="obs-zoom"></button></div><div class="obs-copy"><h4 class="obs-question"></h4><div class="obs-options"></div><div class="obs-result" hidden><div aria-live="polite"><b class="obs-verdict"></b><p class="obs-explain"></p></div><button type="button" class="obs-listen"></button></div></div></div></div>';
    stage.append(modal);
    get('.obs-close').onclick=close;
    get('.obs-marker').onclick=get('.obs-zoom').onclick=()=>zoom(!zoomed);
    get('.obs-listen').onclick=()=>{const line=evidence[active].line;close();api.seek?.(line);};
    modal.addEventListener('cancel',e=>{e.preventDefault();close();});
    modal.addEventListener('keydown',e=>{
      if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close();}
      else e.stopPropagation();
    });
    window.addEventListener('resize',fit);window.addEventListener('scroll',fit,true);
  }
  function info(id) {
    const clue=evidence[id];
    return clue ? {label:clue.label,image:clue.image} : null;
  }
  window.Observation={mount,open,close,info,isOpen:()=>Boolean(modal?.open)};
})();


