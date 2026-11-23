window.branches = {
  cafe: {
    after: 10,
    prompt: "真帆怕自己误解了伴侣的体贴。你是航平，会先问什么？",
    choiceSpeaker: "航平",
    replySpeaker: "真帆",
    options: [
      {
        ja: "「何とかする」って、向こうでの暮らしは心配しなくていいって意味なのかな。",
        zh: "说“总有办法”，是说仙台那边的生活不用你操心吗？",
        reply: "そこまで聞いてなかった。向こうで一人になる時間がどれくらいか、私もちゃんと考えてなかったな。",
        replyZh: "我没问那么细。我自己也没好好想过，对方在那边会有多少时间是一个人。",
        note: "真帆准备先问伴侣到了仙台以后，最需要她帮什么。",
        choiceAudio: "audio/branch-cafe-0-choice.wav",
        replyAudio: "audio/branch-cafe-0-reply.wav"
      },
      {
        ja: "真帆は、その言葉を聞いたとき、ほっとした？　それとも、ちょっと寂しかった？",
        zh: "真帆，你听到这话时，是松了口气，还是有点失落？",
        reply: "最初はほっとした。でも、離れて暮らすのが寂しいって、私からは一度も言ってないんだよね。",
        replyZh: "一开始松了口气。可是，我一次也没跟对方说过，分开住会让我觉得寂寞。",
        note: "真帆打算先说出自己对分开生活的感受。",
        choiceAudio: "audio/branch-cafe-1-choice.wav",
        replyAudio: "audio/branch-cafe-1-reply.wav"
      }
    ]
  },
  station: {
    after: 5,
    prompt: "客户提议改期，能拍板的部长十点半就要离开。你是负责人，想先确认哪件事？",
    choiceSpeaker: "担当者",
    replySpeaker: "取引先",
    options: [
      {
        ja: "日程を改める前に、一点だけ確認させてください。本日中にご決裁が必要でしょうか。",
        zh: "重新约时间之前，请容我确认一件事。今天之内必须完成审批吗？",
        reply: "はい。明日の朝、発注の手続きを始める予定なので、今日中に部長の承認を取りたいんです。",
        replyZh: "是的。明早就要启动下单流程，所以我们想今天拿到部长的批准。",
        note: "你确认了审批期限，接下来要尽量保住今天的决策时段。",
        choiceAudio: "audio/branch-station-0-choice.wav",
        replyAudio: "audio/branch-station-0-reply.wav"
      },
      {
        ja: "日程を改める場合、皆様にお集まりいただけるのは、いつごろになりそうでしょうか。",
        zh: "如果重新约时间，各位大概什么时候还能聚到一起？",
        reply: "現場の者が明日から出張でして、全員そろうとなると、早くても来週の火曜日ですね。",
        replyZh: "现场负责人明天就要出差。要是等所有人到齐，最早也要下周二。",
        note: "你确认了改期的代价，接下来可以利用已经到齐的参会者。",
        choiceAudio: "audio/branch-station-1-choice.wav",
        replyAudio: "audio/branch-station-1-reply.wav"
      }
    ]
  },
  store: {
    after: 8,
    prompt: "姐姐想改变每次都由她开口求助的局面。你是弟弟，想先弄清哪件事？",
    choiceSpeaker: "弟",
    replySpeaker: "姉",
    options: [
      {
        ja: "次から、俺が先に動くとしたら、何を引き受けるのがいちばん助かる？",
        zh: "从下次起，如果由我先着手，你最希望我接手哪件事？",
        reply: "次の予約を確認して、日程が分かったら二人に知らせてほしい。そこをやってくれるだけで、だいぶ楽になる。",
        replyZh: "我想请你确认下次预约，知道时间后告诉我和妈。光是把这件事接过去，我就能轻松不少。",
        note: "姐姐明确提出，让弟弟接手确认预约和通知家人的工作。",
        choiceAudio: "audio/branch-store-0-choice.wav",
        replyAudio: "audio/branch-store-0-reply.wav"
      },
      {
        ja: "付き添いを交代にしても、それを決めるのが毎回姉ちゃんだったら、同じことか。",
        zh: "就算轮流陪妈，每次还得你来张罗谁去，结果也差不多吧？",
        reply: "そう。誰が行くかを決めるまでが、私の仕事みたいになってる。そこを二人で決めたいんだ。",
        replyZh: "对。连决定谁去都像是我的任务。我希望这事咱俩能一起定。",
        note: "姐姐把问题说开了。以后谁去陪诊，由两个人提前商量。",
        choiceAudio: "audio/branch-store-1-choice.wav",
        replyAudio: "audio/branch-store-1-reply.wav"
      }
    ]
  }
};
