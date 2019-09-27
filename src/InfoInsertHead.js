import React, { useState, useEffect, useRef } from 'react';
import { FacebookShareButton, FacebookIcon, LineShareButton, LineIcon } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


import style from './style.css';
import Hamburger from './Hamburger';

const InfoInsertHead = (props) => {

  const thisDiv = useRef(null);
  const [intro, setIntro] = useState(!props.fromGotoPage);
  const [popup, setPopup] = useState(false);
  const [afterNine, setAfterNine] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [share, setShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [readAll, setReadAll] = useState(false);
  const [readAllIndex, setReadAllIndex] = useState(false);
  const [singleColor, setSingleColor] = useState(true);

  useEffect(() => {
    if(intro && !singleColor) {
      thisDiv.current.focus();
    }

    window.scrollTo(0, scrollY);
  }, [popup, share]);

  const skipIntro = () => {
    setIntro(false);
  };

  const handleOnClickFor4 = () => {
    setScrollY(window.pageYOffset);
    setPopup(true);
  };

  const handleShareBtn = () => {
    setScrollY(window.pageYOffset);
    setShare(true);
  };

  const handleOnClickFor6 = () => {
    setPopup(false);
  };

  const handleOnClickFor60 = () => {    
    setShare(false);
  };

  const handleOnClickFor61 = () => {    
    setReadAll(false);
  };

  const handleOnClickFor9 = () => {
    setAfterNine(true);
  };

  const handleOnClickFor33 = () => {

  };

  // 看全文
  const handleOnClickFor55 = (e) => {
    setReadAll(true);
    setReadAllIndex(e.target.id);
  };

  const handleOnClickFor57 = (index) => {

  };

  const personalComment = (index) => {
    if (props.isMobile) {
      return ("在公共事務的討論、決策過程裡青少年不應該總是「被代表」。");
    } else {
      return ("在公共事務的討論、決策過程裡，青少年不應該總是「被代表」，而該是不折不扣的持分者，因為他們有能力改造出一個對所有人都好的新世界。");
    }
  }

  const videoSlideLeft = () => {
    if (videoIndex > 0 ) {
      let temp = videoIndex - 1;
      setVideoIndex(temp);
    }
  };

  const videoSlideRight = () => {
    if (videoIndex < 5 ) {
      let temp = videoIndex + 1;
      setVideoIndex(temp);
    }
  };

  // based on page__block-54-video-slides-window-img
  const videoCssStyle = (index) => { 

    const color = ["grey", "red", "orange", "yellow", "green", "blue"];
    return ({
      width: "29rem",
      height: "16.2rem",
      backgroundColor: color[index],
      margin: "0 auto",
      display: "inline-block",
    });
  };

  const dotCssStyle = (dotIndex, vIndex) => {
    if (dotIndex === vIndex) {
      return ({
        width: "1rem",
        height: "1rem",         
        borderRadius: "50%",
        backgroundColor: "#F06F04",
        display: "inline-block",
        marginRight: "1rem"
      });
    } else {
      return ({
        width: "1rem",
        height: "1rem",         
        borderRadius: "50%",
        backgroundColor: "white",
        display: "inline-block",
        marginRight: "1rem"
      });
    }
  };

  const showMutipleVideos = (index) => {
    if (props.isMobile) {
      return (
        <div className="page__block-54-video-slides">
          <div className="page__block-54-video-slides-window">
            <div 
              className="page__block-54-video-slides-window-left"
              onClick={videoSlideLeft}
            >
            &nbsp;
            </div>
            <div style={videoCssStyle(videoIndex)}>&nbsp;</div>
            <div 
              className="page__block-54-video-slides-window-right"
              onClick={videoSlideRight}
            >
            &nbsp;
            </div>
          </div>
          <div className="page__block-54-video-slides-dot-group">
            <div style={dotCssStyle(0, videoIndex)}>&nbsp;</div>
            <div style={dotCssStyle(1, videoIndex)}>&nbsp;</div>
            <div style={dotCssStyle(2, videoIndex)}>&nbsp;</div>
            <div style={dotCssStyle(3, videoIndex)}>&nbsp;</div>
            <div style={dotCssStyle(4, videoIndex)}>&nbsp;</div>
            <div style={dotCssStyle(5, videoIndex)}>&nbsp;</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="page__block-54-video-grid">
          <div className="page__block-54-video-grid-img">One</div>
          <div className="page__block-54-video-grid-img">Two</div>
          <div className="page__block-54-video-grid-img">Thre</div>
          <div className="page__block-54-video-grid-img">Four</div>
          <div className="page__block-54-video-grid-img">Five</div>
          <div className="page__block-54-video-grid-img">Six</div>
        </div>
      );
    }
  }

  const showFooter = () => {
    if (props.isMobile) {
      return (
        <div>
          <div className="page__block-59-row">
            <div className="page__block-59-row-left">
              <p>監製：於蓓華</p>
              <p>督導：舒逸琪</p>
            </div>
            <div className="page__block-59-row-right">
              <p>製作人：賴彥如</p>
              <p>影音導演：朱孝權</p>
            </div>
          </div>
          <div className="page__block-59-row">
            <div className="page__block-59-row-left">
              <p>企劃：王柔婷</p>
              <p>社群：林孟勳</p>
            </div>
            <div className="page__block-59-row-right">
                <p>網頁設計工程：</p>
                <p>通點設計</p>
            </div>
          </div>
          <div className="page__block-59-text page__block-59-text-2">
              <p>財團法人公共電視文化事業基金會 版權所有 All Contents Copyright, Taiwan Public Television Service.</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row-3-2">
            <div className="col-1-of-3-1 page__block-59-textbox">
              <p>監製：於蓓華</p>
              <p>督導：舒逸琪</p>
            </div>
            <div className="col-1-of-3-2 page__block-59-textbox">
              <p>製作人：賴彥如</p>
              <p>影音導演：朱孝權</p>
            </div>
            <div className="col-1-of-3-3 page__block-59-textbox">
              <p>企劃：王柔婷</p>
              <p>社群：林孟勳</p>
            </div>
          </div>
          <div className="page__block-59-text page__block-59-text-1">
              <p>網頁設計工程：通點設計</p>
          </div>
          <div className="page__block-59-text page__block-59-text-2">
              <p>財團法人公共電視文化事業基金會 版權所有 All Contents Copyright, Taiwan Public Television Service.</p>
          </div>
        </div>
      );
    }
  }

  const showHamburger = () => {
    if (popup) {
      return null;
    } else {
      return (<Hamburger isMobile={props.isMobile} />);
    }
  };

  const handleReadMore = () => {
    setReadMore(true);
  };

  const showReadMoreContent = () => {
    if (!props.isMobile || readMore) {
      return (
        <div className="page__block page__block-6__content-text">
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
      );
    } else {
      return (
        <div className="page__block page__block-6__content-text">
          <p>
            一：本次問卷調查期間為2019年6月21日至7月14日，考量到時間與經費的限制，最後以滾雪球取樣的方法，邀請全國高中職生自行填答，總計回收2223份有效問卷。調查結果最後依受訪者性別、學校性質、以及學校地理區域進行加權，使與母體一致。母體參數依據教育統計查詢網─107學年度高級中等學校校別資料檔。
          </p>
          <br />
          <br />
          <p>
            有關滾雪球方式的操作，
          </p>
          <span onClick={handleReadMore}>...繼續閱讀</span>
        </div>
      );
    }
  };

  const showPopup = () => {
    if (popup) {
      return (
        <div className="page__block page__block-6">
          <div className="page__block page__block-6__content">
            <div 
              className="page__block page__block-6__content-close"
              onClick={handleOnClickFor6}
            >
              &times;
            </div>
            {showReadMoreContent()}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const shareBtnPopup = () => {
    if (share) {
      return (
        <div className="page__block-60">
          <div className="page__block-60__content">
            <div className="page__block-60__content-text">
              分享出去，功德無量！
            </div>
            <div 
              className="page__block page__block-60__content-close"
              onClick={handleOnClickFor60}
            >
              &times;
            </div>
            <div className="page__block-60__content-row-icon">
              <div className="page__block-60__content-row-icon-fb">
                <FacebookShareButton url={"https://www.google.com"}>
                  <FacebookIcon borderRadius={10} size={100}/>
                </FacebookShareButton>
              </div>
              <div className="page__block-60__content-row-icon-line">
                <LineShareButton url={"https://www.google.com"}>
                  <LineIcon borderRadius={10} size={100}/>
                </LineShareButton>
              </div>
            </div>
            <div className="page__block-60__content-row-copied">
              <input 
                value="https://www.google.com" 
                className="page__block-60__content-row-copied-input" />
        
              <CopyToClipboard 
                text="https://www.google.com"
                onCopy={() => setCopied(true)}>
                <button className="page__block-60__content-row-copied-btn">
                  複製連結
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    };
  };

  const showReadAll = () => {
    if (readAll) {
      return (
        <div className="page__block page__block-61">
          <div className="page__block page__block-61__content">
            <div 
              className="page__block page__block-61__content-close"
              onClick={handleOnClickFor61}
            >
              &times;
            </div>
            {readAllIndex}
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
          <div className="page__block page__block-20" id="s3">
            <div className="page__block page__block-20-content">
              <div className="page__block-20-content-cube">
              </div>
              <div className="page__block-20-content-text">
                <p>你怎麼看兩岸關係？</p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-21">
            <p>超過七成高中職生對兩岸關係的不確定性「感到焦慮」</p>
          </div>
          <div className="page__block page__block-22">
          </div>
          <div className="page__block page__block-23">
            <p>我們用0~10分量表的方式(0完全不焦慮、10非常焦慮)詢問高中職生：「你是否會因為兩岸關係的不確定性感到焦慮？」。結果，0分的選項無人選擇，但有76.1%的人集中選填4-8分。這可說明，充滿不確定性的兩岸關係，讓大多受訪者感到「焦慮」甚至接近「非常焦慮」的狀態。</p>
          </div>
          <div className="page__block page__block-24"></div>
          <div className="page__block page__block-25">
            <p>兩岸下一步怎麼走? 超過４０％高中職生：希望維持現狀，以後走向獨立
            </p>
          </div>
          <div className="page__block page__block-26"></div>
          <div className="page__block page__block-27">
            <p>關於兩岸未來的政治關係，在六個不同的選項中，有40.3%的受訪者希望：「維持現狀，以後走向獨立」。其次是「維持現狀，看情形再決定獨立或統一」(25.2％)，以及「永遠維持現狀」(14%)。
            </p>
            <br />
            <br />
            <p>
            相比美國杜克大學於2019年發布的《台灣國家安全調查》，同樣一個問題，20歲以上的成年人對兩岸關係的期望，前四高依序是：「維持現狀，看情形再決定獨立或統一」(33.4%)、「永遠維持現狀」(23.7%)、「維持現狀，以後走向獨立(16.2%)」、「維持現狀，以後走向統一」(10.8%)。
            </p>
            <br />
            <br />
            <p>
            若從這兩份調查來看，無論是高中職生或成年人，都有超過8成的人選擇與「維持現狀」有關的選項。但多數高中職生傾向『維持現狀，以後走向獨立』，成年人則以『維持現狀，看情形再決定獨立或統一』的意見佔多數。
            </p>
          </div>
          <div className="page__block page__block-28" id="s4">
            <div className="page__block page__block-28-content">
              <div className="page__block-28-content-cube">
              </div>
              <div className="page__block-28-content-text">
                <p>對台灣的愛恨情仇？</p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-29">
            <p>高中職生：擁有民主自由，我驕傲！</p>
          </div>
          <div className="page__block page__block-30">
            <p>對於身為我們國家的一份子，你是否感到光榮？</p>
          </div>
          <div className="page__block page__block-31">
            <p>顯示統計結果，每個結果可以點按鈕，看看覺得光榮或不光榮的原因。</p>
          </div>
          <div className="page__block page__block-32"></div>
          <div className="page__block page__block-33">
            <div className="row-4">
              <div 
                className="col-1-of-4 page__block-33-btn"
                onClick={handleOnClickFor33}>
                一點也不光榮
              </div>
              <div 
                className="col-1-of-4 page__block-33-btn"
                onClick={handleOnClickFor33}>
                很少感到光榮
              </div>
              <div 
                className="col-1-of-4 page__block-33-btn"
                onClick={handleOnClickFor33}>
                有時感到光榮
              </div>
              <div 
                className="col-1-of-4 page__block-33-btn"
                onClick={handleOnClickFor33}>
                時常感到光榮
              </div>
            </div>
          </div>
          <div className="page__block page__block-34"></div>
          <div className="page__block page__block-35">
            <p>為了多了解青少年對國家和這塊土地的情感，在這份問卷中，設計了這項提問：「對於身為我們國家的一份子，你是否感到光榮？」，結果有47.5%的受訪者認為「有時感到光榮」，33.9%選擇「時常感到光榮」，兩者合計共81.4%。
            </p>
            <br />
            <br />
            <p>
            此外，該題也進一步請同學們寫下對我們國家「感到光榮」或「不感到光榮」的原因。其中，「感到光榮」的理由，同學們的答案高度雷同，都是認為台灣的「自由民主」以及「社會安定」，是很值得驕傲的事。而「不感到光榮」的原因，則包括「國際地位低落」、「政治混亂」等。
            </p>
          </div>
          <div className="page__block page__block-36"></div>
          <div className="page__block page__block-37">
            <p>「擔心」是多數高中職生對台灣的感受</p>
          </div>
          <div className="page__block page__block-38">
            <p>當我們講到台灣時，你認為以下哪個負面性形容詞適合描述你心理上感受？</p>
          </div>
          <div className="page__block page__block-39">
            <p>顯示統計結果，每個結果可以點按鈕，看看覺得負面形容詞的原因。</p>
          </div>
          <div className="page__block page__block-40">
            <div className="row-4">
              <div className="col-1-of-4 page__block-40-img"></div>
              <div className="col-1-of-4 page__block-40-img"></div>
              <div className="col-1-of-4 page__block-40-img"></div>
              <div className="col-1-of-4 page__block-40-img"></div>
            </div>
          </div>
          <div className="page__block page__block-41">
            <div className="row-4">
              <div className="col-1-of-4 page__block-41-btn">
                沮喪的
              </div>
              <div className="col-1-of-4 page__block-41-btn">
                難過的
              </div>
              <div className="col-1-of-4 page__block-41-btn">
                憤怒的
              </div>
              <div className="col-1-of-4 page__block-41-btn">
                擔心的
              </div>
            </div>
          </div>
          <div className="page__block page__block-42">
          </div>
          <div className="page__block page__block-43">
            <p>問完青少年是否會對自己的國家感到光榮後，問卷中進一步提問：「當我們講到台灣時，你認為以下哪個負面性形容詞適合描述你心理上感受？」。負面形容詞的選項包括：「沮喪的」、「難過的」、「憤怒的」、「擔心的」、以及「沒有」。
            </p>
            <br />
            <br />
            <p>
            結果顯示，有5成以上的受訪者認為講到台灣時，他們是「擔心的」。該題進一步請他們寫下擔心的原因時，答案則圍繞在「擔心台灣失去自由」以及「國際地位遭打壓」。
            </p>
          </div>
          <div className="page__block page__block-44"></div>
          <div className="page__block page__block-45">
            <div className="page__block-45-cube">
              &nbsp;
            </div>
            <div className="page__block-45-text-box">
              <div className="page__block-45-box-text">
                <p>高中職生沒有選票，但他們代表的卻是台灣的未來。阿嬤我很好奇，當討論到國家未來10年的目標時，高中職生會認為哪一項社會目標是最重要的呢？
                </p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-46"></div>
          <div className="page__block page__block-47">
            <p>談到未來，高中職生選擇務實：經濟繁榮最重要</p>
          </div>
          <div className="page__block page__block-48">
            <p>這份問卷列出9項人們認為重要的社會目標，讓受訪者選擇。其中有32.7%受訪者認為「維持經濟繁榮」最重要，佔比最高。其次則是佔14.7%的「保障言論自由」、以及佔13.3%「讓人民對政府重大決策有更多表達意見的機會」。
            </p>
            <br />
            <br />
            <p>
            在這個數據中，第一高的「維持經濟繁榮」比第二高「保障言論自由」多了兩倍以上，可見年輕世代對於台灣未來的共識，還是著重在民生方面，相當務實。但從「保障言論自由」和「讓人民對政府重大決策有更多表達意見的機會」分據重要性的第二、第三來看，「民主自由」同樣是當前青少年們相當重視的社會發展目標。
            </p>
          </div>
          <div className="page__block page__block-49">
            <div className="page__block-49-title">
              <p>政治立場不同的世代  有對話的可能嗎？</p>
            </div>
            <div className="page__block-49-text">
              <p>看到這裡，你有更理解高中職生們怎麼看待自己的國家和土地嗎？你是否有過因為國族立場的不同，導致世代衝突的經驗呢？「青春發言人」特別邀請政治立場有所差異的青少年和成年人一起坐下來對話，嘗試找尋彼此溝通的可能。</p>
            </div>
            <div className="page__block-49-video">
              Video
            </div>
          </div>
          <div className="page__block page__block-50" id="s5">
            <div className="page__block page__block-50-content">
              <div className="page__block-50-content-cube">
              </div>
              <div className="page__block-50-content-text">
                <p>高中職生對政治冷感嗎？</p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-51">
            <div className="page__block-51-content">
              <div className="page__block-51-content-cube">
                &nbsp;
              </div>
              <div className="page__block-51-content-text-box">
                <div className="page__block-51-content-box-text">
                  <p>了解青少年如何看待國族認同的問題後，你想不想知道，高中職生們對於民主政治參與的態度和想法呢？
                  </p>
                </div>
              </div>
            </div>
            <div className="page__block-51-img"></div>
          </div>
          <div className="page__block page__block-52">
            <p>高中職生：關心政治與讀書都不可分割！</p>
          </div>
          <div className="page__block page__block-53">
            <p>從以上三個問句的調查結果觀察，高中職生們其實高度認同民主參與，同時也捍衛自己說話的權利。不但高達95.6%的受訪者不同意「政府自然會為人民解決困難，我們人民不要發表太多的意見。」這句話，也有92%的受訪高中職生認為「學生仍需花時間關心政治」。可見對他們而言，現階段除了讀書以外，公民參與也是一件很重要的事。
            </p>
            <br />
            <br />
            <p>
            此外，也有51%的受訪高中職生「不太同意或非常不同意」高中生「對政府的政策是沒有什麼影響力的」，可見高中職生們對自己的政治參與，多數是抱持正面、肯定的想法。
            </p>
            <br />
            <br />
            <p>
            然而，做為青少年節目，策劃此問卷的製作單位特別想指出的是：在本次調查中，仍可以看到有39.4%的受訪者是「有點同意」自己「對政府的政策沒有什麼影響力的」。這個數字提醒我們，即便高中職生們對政治發聲有高度期盼，但仍有趨近四成的學生是感到無力，認為自己恐怕「沒有什麼影響力」。如何讓青少年們有機會為自己發聲，同時讓他們對參與民主、改變社會抱持正面態度，是身處社會共同體的我們應該努力思考並盡力達成的。
            </p>
          </div>
          <div className="page__block page__block-54">
            <div className="page__block-54-title">
              <p>想瞭解更多青少年如何看待我們的國家、族群和文化嗎？</p>
            </div>
            <div className="page__block-54-text">
              <p>因為製作「嘿！你是哪裡人？─高中職生國族認同」的專題，「青春發言人」接觸許多來自不同家庭背景的台灣青少年，他們每個人對於自己的身分認同，或者台灣的族群、文化和未來，都各自有非常精采的思考。製作單位精選出幾位青少年的生命故事和想法，邀請你一起聽聽看台灣年輕世代的心聲。
              </p>
            </div>
            {showMutipleVideos()}
          </div>
          <div className="page__block page__block-55" id="s6">
            <div className="page__block-55-title">
              <p>他們怎麼看這份調查？</p>
            </div>
            <div className="page__block-55-text">
              <p>我們邀請了五位政治界、媒體界的朋友，和大家分享他們看過這份青少年的國族調查後，有什麼觀察和思考！
              </p>
            </div>
            <div className="page__block-55-grid">
              <div className="page__block-55-grid-person">
                <div className="page__block-55-grid-person-left">
                </div>
                <div className="page__block-55-grid-person-right">
                  <div>
                    <span className="page__block-55-grid-person-right-span-1">李志德</span>
                    <span className="page__block-55-grid-person-right-span-2"> / 端傳媒總編輯</span>
                  </div>
                  <div className="page__block-55-grid-person-right-text">
                    <p>
                    {personalComment(1)}
                    </p>
                  </div>
                  <div 
                    className="page__block-55-grid-person-right-btn"
                    onClick={handleOnClickFor55}
                    id="1">
                    看全文
                  </div>
                </div>
              </div>
              <div className="page__block-55-grid-person">
                <div className="page__block-55-grid-person-left">
                </div>
                <div className="page__block-55-grid-person-right">
                  <div>
                    <span className="page__block-55-grid-person-right-span-1">李志德</span>
                    <span className="page__block-55-grid-person-right-span-2"> / 端傳媒總編輯</span>
                  </div>
                  <div className="page__block-55-grid-person-right-text">
                    <p>
                    {personalComment(1)}
                    </p>
                  </div>
                  <div 
                    className="page__block-55-grid-person-right-btn"
                    onClick={handleOnClickFor55}
                    id="2">
                    看全文
                  </div>
                </div>
              </div>
              <div className="page__block-55-grid-person">
                <div className="page__block-55-grid-person-left">
                </div>
                <div className="page__block-55-grid-person-right">
                  <div>
                    <span className="page__block-55-grid-person-right-span-1">李志德</span>
                    <span className="page__block-55-grid-person-right-span-2"> / 端傳媒總編輯</span>
                  </div>
                  <div className="page__block-55-grid-person-right-text">
                    <p>
                    {personalComment(1)}
                    </p>
                  </div>
                  <div 
                    className="page__block-55-grid-person-right-btn"
                    onClick={handleOnClickFor55}
                    id="3"
                  >
                    看全文
                  </div>
                </div>
              </div>
              <div className="page__block-55-grid-person">
                <div className="page__block-55-grid-person-left">
                </div>
                <div className="page__block-55-grid-person-right">
                  <div>
                    <span className="page__block-55-grid-person-right-span-1">李志德</span>
                    <span className="page__block-55-grid-person-right-span-2"> / 端傳媒總編輯</span>
                  </div>
                  <div className="page__block-55-grid-person-right-text">
                    <p>
                    {personalComment(1)}
                    </p>
                  </div>
                  <div 
                    className="page__block-55-grid-person-right-btn"
                    onClick={handleOnClickFor55}
                    id="4"
                  >
                    看全文
                  </div>
                </div>
              </div>
              <div className="page__block-55-grid-person">
                <div className="page__block-55-grid-person-left">
                </div>
                <div className="page__block-55-grid-person-right">
                  <div>
                    <span className="page__block-55-grid-person-right-span-1">李志德</span>
                    <span className="page__block-55-grid-person-right-span-2"> / 端傳媒總編輯</span>
                  </div>
                  <div className="page__block-55-grid-person-right-text">
                    <p>
                    {personalComment(1)}
                    </p>
                  </div>
                  <div 
                    className="page__block-55-grid-person-right-btn"
                    onClick={handleOnClickFor55}
                    id="5"
                  >
                    看全文
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showReadAll()}
          <div className="page__block page__block-57">
            <div className="page__block-57-content">
              <div className="page__block-57-content-cube">
                &nbsp;
              </div>
              <div className="page__block-57-content-text-box">
                <div className="page__block-57-content-box-text">
                  <p>想了解更多，趕緊來下載完整版問卷吧！</p>
                </div>
              </div>
            </div>
            <div className="page__block-57-text">
              <p>這份「高中職生國族認同調查」的問卷，總共包含36個問題，我們僅挑選其中10個問題呈現於網頁中。若您對整份問卷結果有興趣，歡迎直接下載。另外，我們也邀請了五位政治界、媒體界的朋友，和大家分享他們看過這份青少年的國族調查後，有什麼觀察和思考。
              </p>
            </div>
            <div 
              className="page__block-57-btn"
              onClick={handleOnClickFor57}  
            >
              下載報告
            </div>
          </div>
          <div className="page__block page__block-58">
            <div className="page__block-58-pic">
            </div>
            <div className="page__block-58-share">
              <p>分享這份報告給更多人知道！</p>
            </div>
            <div className="page__block-58-btn" onClick={handleShareBtn}>
              分享
            </div>
          </div>
          <div className="page__block page__block-59">
            <div className="page__block-59-pic">
            </div>
            <div className="page__block-59-icon">
              <ion-icon name="logo-facebook" className="page__block-59-icon-1"></ion-icon>
              <ion-icon name="logo-youtube" className="page__block-59-icon-2"></ion-icon>
              <ion-icon name="logo-instagram" className="page__block-59-icon-3"></ion-icon>
            </div>
            <div className="page__block-59-line">&nbsp;</div>
            {showFooter()}
          </div>
          {shareBtnPopup()}
        </div>
      );
    } else {
      return (
        <div className="page__block page__block-10">
        </div>
      );
    }
  };

  const introStyle = (className) => {
    if (className === "one-line") {
      if (!props.route) {
        return ({
          width: "100vw",
          height: "100vh",
          backgroundColor: "white"
        });
      } else {
        return ({
          width: "100vw",
          height: "100vh",
          backgroundColor: "black"
        });
      }
    } else if (className === "one-line__infoinsert-box-typing") {
      if (!props.route) {
        return ({
          width: "24.6rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          animation: "typing 1s steps(18) 1.5s",
        });
      } else {
        return ({
          
        });
      }

    }
  }

  const singleColorStyle = () => {
    if (!props.route) {
      return ({
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
      });
    } else {
      return ({
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        color: "white"
      });
    }
  }
  
  const showContent = () => {
    if (intro) {

      const finishSingleColor = () => {
        setSingleColor(false)
      };

      setTimeout(finishSingleColor, 1000);
  
      if (singleColor) {
        return (
          <div style={singleColorStyle()}>
          </div>
        );
      } else {
        return (
          <div 
            ref={thisDiv}
            style={singleColorStyle()}
            onClick={skipIntro}
            onKeyDown={skipIntro}
            tabIndex="0"
          >
            <div className="one-line__infoinsert">
              <div className="one-line__infoinsert-box">
                <div className="one-line__infoinsert-box-typing">
                  有些資訊開始慢慢進入你的腦中....
                </div>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div>
          {showHamburger("one-line__infoinsert-box-typing")}
          <div className="page__block page__block-1" id="#s1">
            <h1>嘿！你是哪裡人？</h1>
            <h2>青少年國族認同大調查</h2>
          </div>
          <div className="page__block page__block-2">
          </div>
          <div className="page__block page__block-3">
            <p>2020總統大選將至，社會上對於總統選舉、國家認同和國家未來等議題，討論得沸沸揚揚。你會好奇代表著「未來」的青少年們究竟是怎麼想的嗎？公共電視青少年節目《青春發言人》委託政治大學「選舉研究中心」，針對全國高中職生進行國族認同 調查，分別從「你是哪裡人？」、「兩岸關係」、「對台灣的愛恨情仇？」、「高中職生對政治冷感嗎？」四大面向，帶你了解青少年如何看待自己的國家與土地。</p>
          </div>
          <div 
            onClick={handleOnClickFor4}
            className="page__block page__block-4">看研究方法
          </div>
          <div className="page__block page__block-5" id="s2">
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
            <div className="row-3">
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

  const fixBackground = () => {
    if (popup || share) {
      return ({
        position: "fixed",
        top: `-${scrollY}px`
      });
    } else {
      return ({});
    }
  }

  return (
    <div style={fixBackground()}>
      {showContent()}
    </div>
  );
}

export default InfoInsertHead;