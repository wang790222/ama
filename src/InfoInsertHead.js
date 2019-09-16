import React, { useState, useEffect, useRef } from 'react';

import style from './style.css';

const InfoInsertHead = () => {

  const thisDiv = useRef(null);
  const [intro, setIntro] = useState(true);
  const [popup, setPopup] = useState(false);
  const [afterNine, setAfterNine] = useState(false);

  useEffect(() => {
    if(intro) {
      thisDiv.current.focus();
    }
  });

  const skipIntro = () => {
    setIntro(false);
  };

  const handleOnClickFor4 = () => {
    setPopup(true);
  };

  const handleOnClickFor6 = () => {
    setPopup(false);
  };

  const handleOnClickFor9 = () => {
    setAfterNine(true);
  }

  const showPopup = () => {
    if (popup) {
      return (
        <div className="page__block page__block-6">
          <div 
            className="page__block page__block-6-close"
            onClick={handleOnClickFor6}
          >
            &times;
          </div>
          <div className="page__block page__block-6-text">
            <p>
            一：本次問卷調查期間為2019年6月21日至7月14日，考量到時間與經費的限制，最後以滾雪球取樣的方法，邀請全國高中職生自行填答，總計回收2223份有效問卷。調查結果最後依受訪者性別、學校性質、以及學校地理區域進行加權，使與母體一致。母體參數依據教育統計查詢網─107學年度高級中等學校校別資料檔。
            </p>
            <br />
            <br />
            <p>
            有關滾雪球方式的操作，我們發放了紙本與網路問卷。在紙本問卷上，我們先透過在高中職任教的老師，詢問是否願意協助發放且回收問卷，並且透過老師再介紹其他願意協助發放問卷的老師。網路問卷亦同，我們透過Facebook、PTT、親朋好友以及有意願協助的老師轉傳問卷連結，同時寄出e-mail給已填答完成的學生，請他們幫忙將問卷轉傳給朋友或是同學填寫。在最後的2223份有效問卷中，紙本回收1200份，網路回收1023份。
            </p>
            <br />
            <br />
            <p>
            二：問卷調查期間，香港反送中運動爆發。
            </p>
            <br />
            <p>
            三：本份問卷設計參考美國杜克大學亞太安全研究中心《台灣國家安全調查》以及國立政治大學選舉研究中心《我國大學生政治社會化之研究》兩份問卷的題型。
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const showAfterNine = () => {
    if (afterNine) {
      return (
        <div>
          <div className="page__block page__block-11">
          </div>
          <div className="page__block page__block-12">
            <p>超過七成高中職生認為自己是「台灣人」</p>
          </div>
          <div className="page__block page__block-13">
            <p>在這份問卷中，有78.7％的受訪者認為自己是「台灣人」，遠高於「中國人」(0.8%)與「兩者皆是」(20.1%)的選項，可見「台灣」這個名詞已成為大多高中生對「我是哪裡人」的直覺反應。此外，在美國杜克大學於2019年發布的《台灣國家安全調查》中，同樣一個問題，20歲以上的成年人認同自己是「台灣人」、「中國人」、或「兩者皆是」的比例依序是：50.6%、3.1%、42.6%。若將兩份調查的數據相對照，在認同自己是「台灣人」的部分，可看出一定的差距。</p>
          </div>
          <div className="page__block page__block-14">
          </div>
          <div className="page__block page__block-15">
            <div className="page__block-15-cube">
              &nbsp;
            </div>
            <div className="page__block-15-text-box">
              <div className="page__block-15-box-text">
                <p>延續上一題，如果問題的問法改為：從「文化」角度來看，請問你認為自己是台灣人、中國人還是都是？你覺得高中職生的答案會有改變嗎？
                </p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-16">
          </div>
          <div className="page__block page__block-17">
            <p>若從文化角度思考，認同「中國」的高中職生增加約16%</p>
          </div>
          <div className="page__block page__block-18">
            <p>將「文化」納入考量後，雖然受訪者認同自己是「台灣人」的比例仍占最高（62.2%），但有趣的是，認同自己是「中國人」的比例從0.8%上升到8.2%，認為自己「兩者都是」則從20.1%變為29.4%，這似乎意味著在文化層面上，部分受訪者仍對「中國」有所認同。</p>
          </div>
          <div className="page__block page__block-19">
            <div className="page__block-19-title">
              <p>12位台灣青少年 深談國家認同與未來</p>
            </div>
            <div className="page__block-19-text">
              <p>高中職生的國族認同，跟你的想像一致嗎？「青春發言人」邀請12位來自台灣各地、不同家庭背景的青少年，深入訪問他們對國家、族群，以及台灣未來的想法。</p>
            </div>
            <div className="page__block-19-video">
              Video
            </div>
          </div>
          <div className="page__block page__block-20">
            <div className="page__block page__block-20-content">
              <div className="page__block-20-content-cube">
              </div>
              <div className="page__block-20-content-text">
                <p>你怎麼看兩岸關係？</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="page__block page__block-10">
        </div>
      );
    }
  };
  
  const showContent = () => {
    if (intro) {
      return (
        <div 
          ref={thisDiv}
          className="one-line"
          onClick={skipIntro}
          onKeyDown={skipIntro}
          tabIndex="0"
        >
          <h3 className="one-line one-line__info-insert">有些資訊開始慢慢進入你的腦中....</h3>
        </div>
      );
    } else {
      return (
        <div className="page">
          <div className="page__block page__block-1">
            <h1>嘿！你是哪裡人？</h1>
            <h2>青少年國族認同大調查</h2>
          </div>
          <div className="page__block page__block-2">
          </div>
          <div className="page__block page__block-3">
            <p>2020總統大選將至，社會上對於總統選舉、國家認同和國家未來等議題，討論得沸沸揚揚。你會好奇代表著「未來」的青少年們究竟是怎麼想的嗎？公共電視青少年節目《青春發言人》委託政治大學「選舉研究中心」，針對全國高中職生進行國族認同 調查，分別從「你是哪裡人？」、「兩岸關係」、「對台灣的愛恨情仇？」、「高中職生對政治冷感嗎？」四大面向，帶你了解青少年如何看待自己的國家與土地。</p>
          </div>
          <div className="page__block page__block-4">
            <div 
              onClick={handleOnClickFor4}
              className="page__block page__block-4 page__block-4-btn">看研究方法
            </div>
          </div>
          <div className="page__block page__block-5">
            <div className="page__block page__block-5-content">
              <div className="page__block-5-content-cube">
              </div>
              <div className="page__block-5-content-text">
                <p>你是哪裡人？</p>
              </div>
            </div>
          </div>
          {showPopup()}
          <div className="page__block page__block-7">
            <div className="page__block-7-cube">
              &nbsp;
            </div>
            <div className="page__block-7-text-box">
              <div className="page__block-7-box-text">
                <p>在台灣，有人說自己是「台灣人」，也有人說自己是「中國人」，也有人說都是。你猜多數高中職生是怎麼想的？
                </p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-8">
          </div>
          <div className="page__block page__block-9">
            <div className="row">
              <div 
                className="col-1-of-3 page__block-9-btn"
                onClick={handleOnClickFor9}>
                中國人
              </div>
              <div 
                className="col-1-of-3 page__block-9-btn"
                onClick={handleOnClickFor9}>
                台灣人
              </div>
              <div 
                className="col-1-of-3 page__block-9-btn"
                onClick={handleOnClickFor9}>
                都是
              </div>
            </div>
          </div>
          {showAfterNine()}
        </div>
      );
    }
  }

  return (
    showContent()
  );
}

export default InfoInsertHead;