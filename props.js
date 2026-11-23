(() => {
  // In-world documents remain available during both sides of a call.
  const props = {
    cafe:{label:'查看真帆的手帐',name:'M. ／ 个人手帐',tabs:['本周安排','未发送的草稿'],pages:[
      ['月曜日 · 09:30','部長と面談','仙台に行く曜日を固定できるか。最初の三か月だけ試す余地は？','她在考虑带团队，也想知道工作安排还有多少商量的空间。'],
      ['下書き · 未送信','今夜、少し話せる？','「何とかする」って言ってくれたけど、そっちが何を心配してるのかも聞きたい。','对伴侣，这里用「聞きたい」。面对上司，同一个人会换一种语体。']]},
    station:{label:'查看会议日程',name:'業務用スマートフォン',tabs:['招待状','交通信息'],pages:[
      ['カレンダー · 本日','10:00　費用・納期の確認','10:30　部長は別会議へ。決裁が必要な項目を先に。','客户真正稀缺的资源是能做决定的那十五分钟。'],
      ['運行状況 · 中央線','運転を見合わせています','運転再開の見込みは立っていません。','「見合わせる」在列车信息中表示暂时停运。车站这一幕的核心是还能承诺什么。']]},
    store:{label:'翻看预约便笺',name:'家族の共有メモ',tabs:['通院安排','家人留言'],pages:[
      ['来週 · 水曜日','母の通院','予約済み。付き添いは未定。病院に着いたら受付へ。','约到了时间，和答应陪诊，中间差着一次没有发生的确认。'],
      ['家族 · 音声メモの書き起こし','母から','いつもありがとう。次は私に何が必要か、先に聞いてくれるとうれしい。','这张便笺补上母亲的视角。两个人商量的决定也要让她参与。']]},
    apartment:{label:'检查出差前的备忘',name:'出張前のメモ',tabs:['交接记录','联络草稿'],pages:[
      ['出発前夜 · メモ','天井のしみ','見つけた時刻と場所を記録する。原因はまだ分からない。','有水渍是可观察的事实。说渗漏一定来自楼上，就多了一层推测。'],
      ['下書き · 管理会社へ','折り返しのお願い','明日から不在にします。確認の段取りを、今夜のうちに相談できますか。','「段取り」说的是接下来谁先做什么。它有助于把话题从责任转向协作。']]},
    wedding:{label:'打开婚宴席卡',name:'披露宴の記念カード',tabs:['席次卡','未发的消息'],pages:[
      ['披露宴 · 友人席','久しぶりの同じテーブル','昔と同じ呼び方。昔とは違う、それぞれの暮らし。','几位多年不见的朋友坐在一起。两个人原来以为自己还了解彼此。'],
      ['トーク · 下書き','あとで少し話せる？','さっきの話、みんなの前ではうまく言えなかったんだけど。','「～んだけど」把话留在半空中，也给对方一个愿意听下去的机会。']]},
    juku:{label:'查看咨询记录',name:'塾の電話相談メモ',tabs:['家长的疑问','在家怎么试'],pages:[
      ['佐伯さん · 電話相談','算数の文章題','式を立てる前に止まることがある。計算と、問題文の読み取りを分けて見る。','先确认是没读懂题意，还是不知道该列什么式子。'],
      ['ご家庭で · 声かけの例','何を聞かれていると思う？','中国語でも聞いてみる。式を立てた理由は、本人に日本語で説明してもらう。','家长可以用中文帮孩子梳理题意，再请孩子用日语说说自己为什么这样列式。']]},
    pickup:{label:'打开接娃备忘',name:'家族の共有メモ',tabs:['今天的接送','给健太的消息'],pages:[
      ['今日 · 保育園','お迎えは18時まで','美咲に保護者面談が一件追加。健太にお迎えを頼めるか、先に確認する。','美咲临时多了一场家长面谈，得先确认健太能否在六点前接孩子。'],
      ['健太へ · 下書き','今日、お迎え行けそう？','18時までに間に合いそうか教えて。難しそうなら、私が塾に戻る前に相談しよう。','「行けそう？」是在问对方能不能安排得开，适合家里人之间商量。']]},
    neighbor:{label:'查看邻里备忘',name:'美咲のメモ',tabs:['脚步声','今天先做什么'],pages:[
      ['玄関先 · 土曜の朝','足音が響く時間','朝、娘が廊下を走ることがある。特に何時ごろ響くか、亮さんに聞いてみる。','先问清楚周六早上哪个时间段最容易听见脚步声。'],
      ['今日から · できること','廊下にマットを敷く','朝は絵本を読んで過ごす。まだ響くようなら、どの部屋で聞こえたか教えてもらう。','早上先一起看绘本。如果还有声音，再问邻居在哪个房间听到的。']]},
    briefing:{label:'翻看说明会资料',name:'保護者説明会の配布資料',tabs:['升学资料','和孩子聊什么'],pages:[
      ['説明会 · 配布資料','入試日程と出願の流れ','提出書類と締切は、中国語でも分かるようにする。年度ごとの日程は募集要項で確認する。','中文资料先讲清报名流程。具体日期以学校当年的招生简章为准。'],
      ['面談 · 聞きたいこと','どんな学校なら通ってみたい？','通学時間や校風を一緒に見ながら、本人が気になることを先に聞く。','家长可以一起看通学时间和校风。先问孩子想了解哪所学校、为什么。']]},
    exam:{label:'翻开模考答卷',name:'算数の答案',tabs:['答题记录','课后约定'],pages:[
      ['最後の二問','途中まで合っています','式の書き出しはできている。最後まで解く時間があったか、本人に聞いてみる。','先看孩子已经做到哪里，再问有没有做完的时间。'],
      ['次回の授業まで','直すのはこの一問','家では、どう考えたかを本人に説明してもらう。時間の使い方は次の授業で見る。','回家先重看这一题。下次课再一起看看考试时间怎么分。']]},
    nursery:{label:'翻开入园联络本',name:'保育園の連絡帳',tabs:['早上交接','接娃时问'],pages:[
      ['登園時 · 家庭から','今朝は早起き','いつもより早く目が覚めました。眠そうなときは、かばんのタオルを渡してください。','早上比平时醒得早。困的时候，请把包里的小毛巾递给孩子。'],
      ['お迎え · 園から','その後の様子','落ち着くまで何をしていたか、迎えに来たときにお伝えします。','接娃的时候，老师会告诉家长孩子后来怎样慢慢安定下来。']]}
  };
  let sceneId, trigger, panel, heading, tabs, content, onOpen;
  function close(){panel.hidden=true;trigger.setAttribute('aria-expanded','false');trigger.focus();}
  function page(i){
    const prop=props[sceneId], copy=prop.pages[i];
    [...tabs.children].forEach((b,n)=>b.setAttribute('aria-pressed',String(i===n)));
    content.replaceChildren();
    ['small','h3','p','p'].forEach((tag,n)=>{
      const item=document.createElement(tag);item.textContent=copy[n];item.lang=n===3?'zh-CN':'ja';content.append(item);
    });
  }
  function mount(stage, pause) {
    onOpen=pause;
    trigger=document.createElement('button');trigger.className='prop-trigger';trigger.setAttribute('aria-expanded','false');
    panel=document.createElement('section');panel.className='prop-panel';panel.hidden=true;
    panel.innerHTML='<div class="prop-inner"><div class="prop-head"><b></b><button aria-label="收起道具">×</button></div><div class="prop-tabs"></div><article></article></div>';
    stage.append(trigger,panel);
    heading=panel.querySelector('b');tabs=panel.querySelector('.prop-tabs');content=panel.querySelector('article');
    panel.querySelector('button').onclick=close;
    panel.onkeydown=e=>{if(e.key==='Escape'){e.stopPropagation();close();}};
    trigger.onclick=()=>{
      const prop=props[sceneId];
      onOpen?.();
      heading.textContent=prop.name;tabs.replaceChildren();
      prop.tabs.forEach((text,i)=>{const b=document.createElement('button');b.textContent=text;b.onclick=()=>page(i);tabs.append(b);});
      page(0);panel.hidden=false;trigger.setAttribute('aria-expanded','true');panel.querySelector('button').focus();
    };
  }
  function scene(key){
    sceneId=key;
    trigger.hidden=!props[key];
    trigger.textContent=props[key]?.label ?? '';
    panel.hidden=true;
    trigger.setAttribute('aria-expanded','false');
  }
  window.SceneProps={mount,scene};
})();
