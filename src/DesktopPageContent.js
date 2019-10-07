import React, { useState, useEffect, useRef } from 'react';
import { FacebookShareButton, FacebookIcon, LineShareButton, LineIcon } from 'react-share';
import { Player, ControlBar } from 'video-react';
import "../node_modules/video-react/dist/video-react.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import YouTube from 'react-youtube';
import Hamburger from './Hamburger';
import getParagraph from './getParagraph';

import PopupSurveyMethod from './PopupSurveyMethod';

const DesktopPageContent = () => {

  const wholePageDiv = useRef(null);
  const scrollRef = useRef(null);
  
  const s1Ref = useRef(null);
  const s2Ref = useRef(null);
  const s3Ref = useRef(null);
  const s4Ref = useRef(null);
  const s5Ref = useRef(null);
  const s6Ref = useRef(null);
  const s7Ref = useRef(null);
  const s8Ref = useRef(null);
  const s9Ref = useRef(null);
  const s10Ref = useRef(null);
  const s11Ref = useRef(null);
  const s12Ref = useRef(null);
  const s13Ref = useRef(null);
  const s14Ref = useRef(null);
  const s15Ref = useRef(null);
  const s16Ref = useRef(null);
  const s17Ref = useRef(null);
  const s18Ref = useRef(null);
  const s19Ref = useRef(null);
  const s20Ref = useRef(null);
  const s21Ref = useRef(null);
  const s22Ref = useRef(null);
  const s23Ref = useRef(null);
  const s24Ref = useRef(null);
  const s25Ref = useRef(null);
  const s26Ref = useRef(null);
  const s27Ref = useRef(null);
  const s28Ref = useRef(null);
  const s29Ref = useRef(null);
  const s30Ref = useRef(null);
  const s31Ref = useRef(null);
  const s32Ref = useRef(null);
  const s33Ref = useRef(null);
  const s34Ref = useRef(null);
  const s35Ref = useRef(null);
  const s36Ref = useRef(null);
  const s37Ref = useRef(null);
  const s38Ref = useRef(null);
  const s39Ref = useRef(null);
  const s40Ref = useRef(null);
  const s41Ref = useRef(null);
  const s42Ref = useRef(null);
  const s43Ref = useRef(null);
  const s44Ref = useRef(null);
  const s45Ref = useRef(null);
  const s46Ref = useRef(null);
  const s47Ref = useRef(null);
  const s48Ref = useRef(null);
  const s49Ref = useRef(null);
  const s50Ref = useRef(null);
  const s51Ref = useRef(null);
  const s52Ref = useRef(null);
  const s53Ref = useRef(null);
  const s54Ref = useRef(null);
  const s55Ref = useRef(null);
  const s56Ref = useRef(null);
  const s57Ref = useRef(null);
  const s58Ref = useRef(null);
  const s59Ref = useRef(null);
  const s60Ref = useRef(null);

  const [popup, setPopup] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [share, setShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [readAll, setReadAll] = useState(false);
  const [readAllIndex, setReadAllIndex] = useState(false);
  const [curSec, setCurSec] = useState(0);
  const [hambugerOn, setHambugerOn] = useState(false);
  const [q5Option, setQ5Option] = useState(0);
  const [q6Option, setQ6Option] = useState(0);
  const [afterBlockNine, setAfterBlockNine] = useState(false);
  const [afterBlock51, setAfterBlock51] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [q8910Index, setQ8910Index] = useState(0);
  const [navIndex, setNavIndex] = useState(0);
  
  let totalBlocks = 59;

  let temp = [];
  for (let i = 0; i < totalBlocks; i++) {
    temp.push(false);
  }

  const [blockInPage, setBlockInPage] = useState(temp);

  useEffect(() => {
    window.addEventListener('scroll', currentBlocksInPage);
    window.addEventListener('keyDown', currentBlocksInPage);
    window.addEventListener('keyPress', currentBlocksInPage);
    
    window.scrollTo(0, scrollY);

    if (navIndex) {
      handleNavToSection(navIndex);
    }
    
  }, [popup, share, navIndex]);

  const animateShowUpBlock = (index, originClassName) => {
    if (blockInPage[index]) {
      return `${originClassName} add_showup`;
    } else {
      return originClassName;
    }
  };

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

  const currentBlocksInPage = () => {
    let pages = [];
    for (let i = 1; i <= totalBlocks; i++) {
      let temp = eval(`s${i}Ref`);
      let snTop = (temp.current) ? temp.current.offsetTop : -1;
      let snBottom = (temp.current) ? (snTop + temp.current.clientHeight) : -1;
      if (
           (snTop !== -1) && (snBottom !== -1) && (
            (
              (snTop >= window.pageYOffset && snTop <= window.pageYOffset + window.innerHeight) 
            ) ||
              ((snBottom >= window.pageYOffset) && (snTop <= window.pageYOffset))
           )
         ) {
        
        if (!blockInPage[i]) {
          pages.push(i);
        }
      }
    }

    let temp = blockInPage.slice();
    for (let i = 0; i < pages.length; i++) {
      temp[pages[i]] = true;
    }

    setBlockInPage(temp);
  }

  const handleNavToSection = (section) => {
    let curSection = eval(`s${section}Ref`);
    let snTop = (curSection.current) ? curSection.current.offsetTop : Number.MAX_SAFE_INTEGER;
    window.scrollTo(0, snTop);
  }

  const popupSurveyMethod = () => {
    setScrollY(window.pageYOffset);
    setPopup(true);
  };

  const closePopupSurveyMethod = () => {
    setPopup(false);
  };

  const handleNavIndex = (sec) => {
    if (sec === 6) {
      setAfterBlockNine(true);
      setAfterBlock51(true);
      setNavIndex(6);
    } else {
      if (sec > 2) {
        setAfterBlockNine(true);
        setNavIndex(sec);
      } else {
        setNavIndex(sec);
      }
    }
  };

  const showHamburger = () => {
    if (popup) {
      return null;
    } else {
      return (<Hamburger 
        isMobile={false} 
        isHamburgerOn={isHamburgerOn}
        currentSection={curSec}
        handleNavIndex={handleNavIndex}
        />
      );
    }
  };

  const getCurrentSection = () => {

    let minDis = Number.MAX_SAFE_INTEGER;
    let topOffsetArr = [];
    let sec = null;

    let s1Top = (s1Ref.current) ? s1Ref.current.offsetTop : Number.MAX_SAFE_INTEGER;
    topOffsetArr.push(s1Top);

    let s2Top = (s2Ref.current) ? s2Ref.current.offsetTop : Number.MAX_SAFE_INTEGER;
    topOffsetArr.push(s2Top);

    let s3Top = (s3Ref.current) ? s3Ref.current.offsetTop : Number.MAX_SAFE_INTEGER;
    topOffsetArr.push(s3Top);

    let s4Top = (s4Ref.current) ? s4Ref.current.offsetTop : Number.MAX_SAFE_INTEGER;
    topOffsetArr.push(s4Top);

    let s5Top = (s5Ref.current) ? s5Ref.current.offsetTop : Number.MAX_SAFE_INTEGER;
    topOffsetArr.push(s5Top);

    let s6Top = (s6Ref.current) ? s6Ref.current.offsetTop : Number.MAX_SAFE_INTEGER;
    topOffsetArr.push(s6Top);

    let i = 0;
    for (; i < 6; i++) {
      if (minDis > Math.abs(window.pageYOffset - topOffsetArr[i])) {
        sec = i;
        minDis = Math.abs(window.pageYOffset - topOffsetArr[i]);
      }
    }
    
    return sec;
  };

  const isHamburgerOn = (isOn) => {
    let cur = getCurrentSection();
    if (cur !== curSec) {
      setCurSec(cur);
    }

    if (hambugerOn && !isOn) {
      setHambugerOn(false);
    } else if (!hambugerOn && isOn) {
      setHambugerOn(true);
    }
  };

  const onClickQ5Option = (index) => {
    setQ5Option(index)
  };

  const onClickQ6Option = (index) => {
    setQ6Option(index)
  };

  // 看全文
  const onClickReadAll = (e) => {
    setReadAll(true);
    setReadAllIndex(e.target.id);
  };

  const showReadAll = () => {
    if (readAll) {
      return (
        <div className="page__block page__block-61">
          <div className="page__block page__block-61__content">
            <div 
              className="page__block page__block-61__content-close"
              onClick={() => { setReadAll(false) }}
            >
              &times;
            </div>

            {
               getParagraph(readAllIndex - 1).split("<br />").map((item) => {
                return (<p className="page__block-61__content-text">{item}</p>);
              })
            }
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const question5Video = () => {
    if (q5Option === 0) {
      return (
        <div className={animateShowUpBlock(34, "page__block page__block-34")} ref={s34Ref}>
          <Player
            playsInline={true}
            src={require('./img/video/p30.mp4')}
            width={"100%"}
            height={"100%"}
            fluid={false}
            autoPlay={false}
            muted={true}
          />
        </div>
      );
    } else if (q5Option === 1) {
      return (
        <div className={animateShowUpBlock(34, "page__block page__block-34")} ref={s34Ref}>
          <Player
            playsInline={true}
            src={require('./img/video/p31.mp4')}
            width={"100%"}
            height={"100%"}
            fluid={false}
            autoPlay={false}
            muted={true}
          />
        </div>
      );
    } else if (q5Option === 2) {
      return (
        <div className={animateShowUpBlock(34, "page__block page__block-34")} ref={s34Ref}>
          <Player
            playsInline={true}
            src={require('./img/video/p32.mp4')}
            width={"100%"}
            height={"100%"}
            fluid={false}
            autoPlay={false}
            muted={true}
          />
        </div>
      );
    } else if (q5Option === 3) {
      return (
        <div className={animateShowUpBlock(34, "page__block page__block-34")} ref={s34Ref}>
          <Player
            playsInline={true}
            src={require('./img/video/p33.mp4')}
            width={"100%"}
            height={"100%"}
            fluid={false}
            autoPlay={false}
            muted={true}
          />
        </div>
      );
    }
  };

  const quesion6Video = () => {
    if (q6Option === 0) {
      return (
        <div className={animateShowUpBlock(43, "page__block page__block-42")} ref={s43Ref}>
          <Player
            playsInline
            src={require('./img/video/p20.mp4')}
            width={"100%"}
            height={"100%"}
            fluid={false}
            muted={true}
          >
            <ControlBar disableCompletely={true} />
          </Player>
        </div>
      );
    } else if (q6Option === 1) {
      return (
        <div className={animateShowUpBlock(43, "page__block page__block-42")} ref={s43Ref}>
          <Player
            playsInline
            src={require('./img/video/p21.mp4')}
            width={"100%"}
            height={"100%"}
            fluid={false}
            muted={true}
          >
            <ControlBar disableCompletely={true} />
          </Player>
        </div>
      );
    } else if (q6Option === 2) {
      return (
        <div className={animateShowUpBlock(43, "page__block page__block-42")} ref={s43Ref}>
          <Player
            playsInline
            src={require('./img/video/p22.mp4')}
            width={"100%"}
            height={"100%"}
            fluid={false}
            muted={true}
          >
            <ControlBar disableCompletely={true} />
          </Player>
        </div>
      );
    } else if (q6Option === 3) {
      return (
        <div className={animateShowUpBlock(43, "page__block page__block-42")} ref={s43Ref}>
          <Player
            playsInline
            src={require('./img/video/p23.mp4')}
            width={"100%"}
            height={"100%"}
            fluid={false}
            muted={true}
          >
            <ControlBar disableCompletely={true} />
          </Player>
        </div>
      );
    }
  };

  const handleShareBtn = () => {
    setScrollY(window.pageYOffset);
    setShare(true);
  };

  const shareBtnPopup = () => {
    if (share) {
      const socialMediaIcon = () => {
        return (
          <div>
            <div className="page__block-60__content-row-icon-line">
              <LineShareButton url={"https://www.google.com"}>
                <LineIcon borderRadius={10} size={100}/>
              </LineShareButton>
            </div>
            <div className="page__block-60__content-row-icon-fb">
              <FacebookShareButton url={"https://ama-test.herokuapp.com/"}>
                <FacebookIcon borderRadius={10} size={100}/>
              </FacebookShareButton>
            </div>
          </div>
        );
      };

      return (
        <div className="page__block-60">
          <div className="page__block-60__content">
            <div className="page__block-60__content-text">
              分享出去，功德無量！
            </div>
            <div 
              className="page__block page__block-60__content-close"
              onClick={() => {setShare(false)}}
            >
              &times;
            </div>
            <div className="page__block-60__content-row-icon">
             {socialMediaIcon()}
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

  const addOpacityToArrowLeft = () => {
    if (videoIndex === 0) {
      return "page__block-54-video-slides-window-left add_opacity";
    } else {
      return "page__block-54-video-slides-window-left";
    }
  };

  const addOpacityToArrowRight = () => {
    if (videoIndex === 5) {
      return "page__block-54-video-slides-window-right add_opacity";
    } else {
      return "page__block-54-video-slides-window-right";
    }
  };

  const reachBottom = () => {
    
  };

  const handleUp = () => {
    if (q8910Index === 25) {
      setQ8910Index(0);
    } else if (q8910Index === 30) {
      setQ8910Index(25);
    }
  };

  const handleDown = () => {
    if (q8910Index < 20) {
      setQ8910Index(25);
    } else if (q8910Index === 25) {
      setQ8910Index(30);
    } else if (q8910Index === 30) {
      if (!afterBlock51) {
        setAfterBlock51(true);
      }
    }
  };

  const selectVideo = () => {
    if (q8910Index < 20) {
      return (
        <Player
          playsInline
          src={require('./img/video/q8.mp4')}
          width={"100%"}
          height={"100%"}
          fluid={false}
          autoPlay={true}
          muted={true}
        >
          <ControlBar disableCompletely={true} />
        </Player>
      );
    } else if (q8910Index === 25) {
      return (
        <Player
          playsInline
          src={require('./img/video/q9.mp4')}
          width={"100%"}
          height={"100%"}
          fluid={false}
          autoPlay={true}
          muted={true}
        >
          <ControlBar disableCompletely={true} />
        </Player>
      );
    } else if (q8910Index === 30){
      return (
        <Player
          playsInline
          src={require('./img/video/q10.mp4')}
          width={"100%"}
          height={"100%"}
          fluid={false}
          autoPlay={true}
          muted={true}
        >
          <ControlBar disableCompletely={true} />
        </Player>
      );
    }
  };

  const containerRef = useBottomScrollListener(reachBottom);
 
  const showAfterBlockNine = () => {
    return ((afterBlockNine || navIndex > 2) ? 
    <div>
      <div ref={scrollRef}>
          <div className={animateShowUpBlock(16, "page__block page__block-16")} ref={s16Ref}>
            <Player
              playsInline
              src={require('./img/video/q1.mp4')}
              width={"100%"}
              height={"100%"}
              fluid={false}
              autoPlay={true}
              muted={true}
            >
              <ControlBar disableCompletely={true} />
            </Player>
          </div>
          <div className={animateShowUpBlock(12, "page__block page__block-12")} ref={s12Ref}>
            <img src={require('./img/q2-title.png')} alt="q2" style={{width: "100%", height: "100%"}} />
          </div>
          <div className={animateShowUpBlock(13, "page__block page__block-13")} ref={s13Ref}>
            <p>在這份問卷中，有78.7％的受訪者認為自己是「台灣人」，遠高於「中國人」(0.8%)與「兩者皆是」(20.1%)的選項，可見「台灣」這個名詞已成為大多高中生對「我是哪裡人」的直覺反應。此外，在美國杜克大學於2019年發布的《台灣國家安全調查》中，同樣一個問題，20歲以上的成年人認同自己是「台灣人」、「中國人」、或「兩者皆是」的比例依序是：50.6%、3.1%、42.6%。若將兩份調查的數據相對照，在認同自己是「台灣人」的部分，可看出一定的差距。</p>
          </div>
          <div className={animateShowUpBlock(14, "page__block page__block-14")} ref={s14Ref}>
          </div>
          <div className={animateShowUpBlock(15, "page__block page__block-15")} ref={s15Ref}>
            <div className="page__block-15-cube">
              <img src={require('./img/q2-head.png')} style={{width: "100%", height: "100%"}} alt="img_block13" />
            </div>
            <div className="page__block-15-text-box">
              <div className="page__block-15-box-text">
                <p>延續上一題，如果問題的問法改為：從「文化」角度來看，請問你認為自己是台灣人、中國人還是都是？你覺得高中職生的答案會有改變嗎？
                </p>
              </div>
            </div>
          </div>
          <div className={animateShowUpBlock(11, "page__block page__block-11")} ref={s11Ref}>
            <Player
              playsInline
              src={require('./img/video/q2.mp4')}
              width={"100%"}
              height={"100%"}
              fluid={false}
              autoPlay={true}
              muted={true}
            >
              <ControlBar disableCompletely={true} />
            </Player>
          </div>
          <div className={animateShowUpBlock(17, "page__block page__block-17")} ref={s17Ref}>
            <img src={require('./img/q3-title.png')} alt="q3" style={{width: "100%", height: "100%"}} />
          </div>
          <div className={animateShowUpBlock(18, "page__block page__block-18")} ref={s18Ref}>
            <p>將「文化」納入考量後，雖然受訪者認同自己是「台灣人」的比例仍占最高（62.2%），但有趣的是，認同自己是「中國人」的比例從0.8%上升到8.2%，認為自己「兩者都是」則從20.1%變為29.4%，這似乎意味著在文化層面上，部分受訪者仍對「中國」有所認同。</p>
          </div>
          <div className={animateShowUpBlock(19, "page__block page__block-19")} ref={s19Ref}>
            <div className="page__block-19-title">
              <img src={require('./img/q4-title.png')} alt="q3" style={{width: "860px", height: "62px"}} />
            </div>
            <div className="page__block-19-text">
              <p>高中職生的國族認同，跟你的想像一致嗎？「青春發言人」邀請12位來自台灣各地、不同家庭背景的青少年，深入訪問他們對國家、族群，以及台灣未來的想法。</p>
            </div>
            <div className="page__block-19-video">
              <YouTube
                videoId="ebRmX-5gPfU"
                opts={{
                  width: '650',
                  height: '365',
                }}
              />
            </div>
          </div>
          <div className={animateShowUpBlock(3, "page__block page__block-20")} id="s3" ref={s3Ref}>
            <img src={require('./img/q5-title.png')} alt="q5" className="page__block-20-front"/>
            <img src={require('./img/green-background.jpg')} style={{width: "100%", height: "250px"}} alt="q1" className="page__block-5-background"/>
          </div>
          <div className={animateShowUpBlock(21, "page__block page__block-21")} ref={s21Ref}>
            <img src={require('./img/q6-title.png')} alt="q6" style={{width: "840px", height: "100px"}} />
          </div>
          <div className={animateShowUpBlock(22, "page__block page__block-22")} ref={s22Ref}>
            <Player
              playsInline={true}
              src={require('./img/video/q3.mp4')}
              width={"100%"}
              height={"100%"}
              fluid={false}
              autoPlay={true}
              muted={true}
            >
              <ControlBar disableCompletely={true} />
            </Player>
          </div>
          <div className={animateShowUpBlock(23, "page__block page__block-23")} ref={s23Ref}>
            <p>我們用0~10分量表的方式(0完全不焦慮、10非常焦慮)詢問高中職生：「你是否會因為兩岸關係的不確定性感到焦慮？」。結果，0分的選項無人選擇，但有76.1%的人集中選填4-8分。這可說明，充滿不確定性的兩岸關係，讓大多受訪者感到「焦慮」甚至接近「非常焦慮」的狀態。</p>
          </div>
          <div className={animateShowUpBlock(24, "page__block page__block-24")} ref={s24Ref}></div>
          <div className={animateShowUpBlock(25, "page__block page__block-25")} ref={s25Ref}>
            <img src={require('./img/q7-title.png')} alt="q6" style={{width: "840px", height: "100px"}} />
          </div>
          <div className={animateShowUpBlock(26, "page__block page__block-26")} ref={s26Ref}>
            <Player
              playsInline
              src={require('./img/video/q4.mp4')}
              width={"100%"}
              height={"100%"}
              fluid={false}
              autoPlay={true}
              muted={true}
            >
              <ControlBar disableCompletely={true} />
            </Player>
          </div>
          <div className={animateShowUpBlock(27, "page__block page__block-27")} ref={s27Ref}>
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
          <div className={animateShowUpBlock(4, "page__block page__block-28")} id="s4" ref={s4Ref}>
            <img src={require('./img/q8-title.png')} alt="q5" className="page__block-28-front"/>
            <img src={require('./img/green-background.jpg')} style={{width: "100%", height: "250px"}} alt="q1" className="page__block-5-background"/>
          </div>
          <div className={animateShowUpBlock(29, "page__block page__block-29")} ref={s29Ref}>
            <img src={require('./img/q9-title.png')} alt="q9" style={{width: "100%", height: "100%"}} />
          </div>
          <div className={animateShowUpBlock(30, "page__block page__block-30")} ref={s30Ref}>
            <p>對於身為我們國家的一份子，你是否感到光榮？</p>
          </div>
          <div style={{height: "250px"}}>
            <div className={animateShowUpBlock(32, "page__block page__block-32")} ref={s32Ref}>
              <img src={require('./img/q5.png')} style={{width:"100%", height:"100%"}} alt="img_block32" />
            </div>
            <div className={animateShowUpBlock(33, "page__block page__block-33")} ref={s33Ref}>
              <div className="row-4">
                <div 
                  className="col-1-of-4 page__block-33-btn page__block-33-btn-1"
                  onClick={() => onClickQ5Option(0)}>
                  一點也不光榮
                </div>
                <div 
                  className="col-1-of-4 page__block-33-btn page__block-33-btn-2"
                  onClick={() => onClickQ5Option(1)}>
                  很少感到光榮
                </div>
                <div 
                  className="col-1-of-4 page__block-33-btn page__block-33-btn-2"
                  onClick={() => onClickQ5Option(2)}>
                  有時感到光榮
                </div>
                <div 
                  className="col-1-of-4 page__block-33-btn page__block-33-btn-4"
                  onClick={() => onClickQ5Option(3)}>
                  時常感到光榮
                </div>
              </div>
            </div>
          </div>
          <div className={animateShowUpBlock(31, "page__block page__block-31")} ref={s31Ref}>
            <span><ion-icon name="arrow-dropup"></ion-icon></span><span>點擊按鈕試試看！</span>
          </div>
          {question5Video()}
          <div className={animateShowUpBlock(35, "page__block page__block-35")} ref={s35Ref}>
            <p>為了多了解青少年對國家和這塊土地的情感，在這份問卷中，設計了這項提問：「對於身為我們國家的一份子，你是否感到光榮？」，結果有47.5%的受訪者認為「有時感到光榮」，33.9%選擇「時常感到光榮」，兩者合計共81.4%。
            </p>
            <br />
            <br />
            <p>
            此外，該題也進一步請同學們寫下對我們國家「感到光榮」或「不感到光榮」的原因。其中，「感到光榮」的理由，同學們的答案高度雷同，都是認為台灣的「自由民主」以及「社會安定」，是很值得驕傲的事。而「不感到光榮」的原因，則包括「國際地位低落」、「政治混亂」等。
            </p>
          </div>
          <div className={animateShowUpBlock(36, "page__block page__block-36")} ref={s36Ref}></div>
          <div className={animateShowUpBlock(37, "page__block page__block-37")} ref={s37Ref}>
            <img src={require('./img/q10-title.png')} alt="q10" style={{width: "100%", height: "100%"}} />
          </div>
          <div className={animateShowUpBlock(38, "page__block page__block-38")} ref={s38Ref}>
            <p>當我們講到台灣時，你認為以下哪個負面性形容詞適合描述你心理上感受？</p>
          </div>
          <div>
            <div className={animateShowUpBlock(40, "page__block page__block-40")} ref={s40Ref}>
              <div className="row-4-2">
                <div className="col-1-of-4 page__block-40-imgbtn">
                  <img src={require('./img/q6-1.png')} alt="img_block40" />
                  <div className="col-1-of-4 page__block-41-btn" onClick={() => onClickQ6Option(0)}>
                    沮喪的
                  </div>
                </div>
                <div className="col-1-of-4 page__block-40-imgbtn">
                  <img src={require('./img/q6-2.png')} alt="img_block40" />
                  <div className="page__block-41-btn" onClick={() => onClickQ6Option(1)}>
                  難過的
                  </div>  
                </div>
                <div className="col-1-of-4 page__block-40-imgbtn">
                  <img src={require('./img/q6-3.png')} alt="img_block40" />
                  <div className="col-1-of-4 page__block-41-btn" onClick={() => onClickQ6Option(2)}>
                    憤怒的
                  </div>
                </div>
                <div className="col-1-of-4 page__block-40-imgbtn">
                  <img src={require('./img/q6-4.png')} alt="img_block40" />
                  <div className="col-1-of-4 page__block-41-btn" onClick={() => onClickQ6Option(3)}>
                    擔心的
                  </div>
                </div>
              </div>
            </div>
            <div className={animateShowUpBlock(42, "page__block page__block-41-2")} ref={s42Ref}>
              <span><ion-icon name="arrow-dropup"></ion-icon></span><span>點擊按鈕試試看！</span>
            </div>
            {quesion6Video()}
          </div>
          <div className={animateShowUpBlock(44, "page__block page__block-43")} ref={s44Ref}>
            <p>問完青少年是否會對自己的國家感到光榮後，問卷中進一步提問：「當我們講到台灣時，你認為以下哪個負面性形容詞適合描述你心理上感受？」。負面形容詞的選項包括：「沮喪的」、「難過的」、「憤怒的」、「擔心的」、以及「沒有」。
            </p>
            <br />
            <br />
            <p>
            結果顯示，有5成以上的受訪者認為講到台灣時，他們是「擔心的」。該題進一步請他們寫下擔心的原因時，答案則圍繞在「擔心台灣失去自由」以及「國際地位遭打壓」。
            </p>
          </div>
          <div className={animateShowUpBlock(45, "page__block page__block-44")} ref={s45Ref}></div>
          <div className={animateShowUpBlock(46, "page__block page__block-45")} ref={s46Ref}>
            <div className="page__block-45-cube">
              <img src={require('./img/q7-head.png')} style={{width: "100%", height: "100%"}} alt="img_block45" />
            </div>
            <div className="page__block-45-text-box">
              <div className="page__block-45-box-text">
                <p>高中職生沒有選票，但他們代表的卻是台灣的未來。阿嬤我很好奇，當討論到國家未來10年的目標時，高中職生會認為哪一項社會目標是最重要的呢？
                </p>
              </div>
            </div>
          </div>
          <div className={animateShowUpBlock(47, "page__block page__block-46")} ref={s47Ref}>
            <Player
              playsInline
              src={require('./img/video/q7.mp4')}
              width={"100%"}
              height={"100%"}
              fluid={false}
              autoPlay={true}
              muted={true}
            >
              <ControlBar disableCompletely={true} />
            </Player>
          </div>
          <div className={animateShowUpBlock(48, "page__block page__block-47")} ref={s48Ref}>
            <img src={require('./img/q11-title.png')} alt="q11" style={{width: "100%", height: "100%"}} />
          </div>
          
          <ReactScrollWheelHandler
              upHandler={handleUp}
              downHandler={handleDown}
          >
            <div className={animateShowUpBlock(49, "page__block page__block-48")} ref={s49Ref}>
              <p>這份問卷列出9項人們認為重要的社會目標，讓受訪者選擇。其中有32.7%受訪者認為「維持經濟繁榮」最重要，佔比最高。其次則是佔14.7%的「保障言論自由」、以及佔13.3%「讓人民對政府重大決策有更多表達意見的機會」。
              </p>
              <br />
              <br />
              <p>
              在這個數據中，第一高的「維持經濟繁榮」比第二高「保障言論自由」多了兩倍以上，可見年輕世代對於台灣未來的共識，還是著重在民生方面，相當務實。但從「保障言論自由」和「讓人民對政府重大決策有更多表達意見的機會」分據重要性的第二、第三來看，「民主自由」同樣是當前青少年們相當重視的社會發展目標。
              </p>
            </div>
            <div className={animateShowUpBlock(50, "page__block page__block-49")} ref={s50Ref}>
              <div className="page__block-49-title">
                <img src={require('./img/q12-title.png')} alt="q11" style={{width: "100%", height: "100%"}} />
              </div>
              <div className="page__block-49-text">
                <p>看到這裡，你有更理解高中職生們怎麼看待自己的國家和土地嗎？你是否有過因為國族立場的不同，導致世代衝突的經驗呢？「青春發言人」特別邀請政治立場有所差異的青少年和成年人一起坐下來對話，嘗試找尋彼此溝通的可能。</p>
              </div>
              <div className="page__block-49-video">
                
              </div>
            </div>
            <div className={animateShowUpBlock(5, "page__block page__block-50")} id="s5" ref={s5Ref}>
              <img src={require('./img/q13-title.png')} alt="q13" className="page__block-50-front"/>
              <img src={require('./img/green-background.jpg')} style={{width: "100%", height: "250px"}} alt="q13" className="page__block-50-background"/>
            </div>
            <div className={animateShowUpBlock(51, "page__block page__block-51")} ref={s51Ref}>
              <div className="page__block-51-content">
                <div className="page__block-51-content-cube">
                  <img src={require('./img/q8-head.png')} style={{width: "100%", height: "100%"}} alt="img_block51" />
                </div>
                <div className="page__block-51-content-text-box">
                  <div className="page__block-51-content-box-text">
                    <p>了解青少年如何看待國族認同的問題後，你想不想知道，高中職生們對於民主政治參與的態度和想法呢？
                    </p>
                  </div>
                </div>
              </div>
              <div className="page__block-51-img">
                {selectVideo()}
              </div>
            </div>
          </ReactScrollWheelHandler>
        </div>
      {showAfterBlock51()}
    </div>
    : null);
  };

  const showAfterBlock51 = () => {
    return (
      (afterBlock51 || navIndex === 6) ?
      <div>
        <div className={animateShowUpBlock(52, "page__block page__block-52")} ref={s52Ref}>
          <img src={require('./img/q14-title.png')} alt="q14" style={{width: "100%", height: "100%"}} />
        </div>
        <div className={animateShowUpBlock(53, "page__block page__block-53")} ref={s53Ref}>
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
        <div className={animateShowUpBlock(54, "page__block page__block-54")} ref={s54Ref}>
          <div className="page__block-54-title">
            <img src={require('./img/q15-title.png')} alt="q15" style={{width: "503px", height: "60px"}} />
          </div>
          <div className="page__block-54-text">
            <p>因為製作「嘿！你是哪裡人？─高中職生國族認同」的專題，「青春發言人」接觸許多來自不同家庭背景的台灣青少年，他們每個人對於自己的身分認同，或者台灣的族群、文化和未來，都各自有非常精采的思考。製作單位精選出幾位青少年的生命故事和想法，邀請你一起聽聽看台灣年輕世代的心聲。
            </p>
          </div>
          <div className="page__block-54-video-grid">
            <div className="page__block-54-video-grid-img">
              <YouTube
                videoId="XQ6AgHZ7uIU"
                opts={{
                  width: '350px',
                  height: '196px',
                }}
              />
            </div>
            <div className="page__block-54-video-grid-img">
              <YouTube
                videoId="5qs1sVhjKWI"
                opts={{
                  width: '350px',
                  height: '196px',
                }}
              />
            </div>
            <div className="page__block-54-video-grid-img">
              <YouTube
                videoId="-JzH9WXQAjs"
                opts={{
                  width: '350px',
                  height: '196px',
                }}
              />
            </div>
          </div>
          <div className="page__block-54-video-grid page__block-54-video-grid-row-2">
            <div className="page__block-54-video-grid-img">
              <YouTube
                videoId="__tP2CFToB8"
                opts={{
                  width: '350px',
                  height: '196px',
                }}
              />
            </div>
            <div className="page__block-54-video-grid-img">
              <YouTube
                videoId="dzKGkTj3S5I"
                opts={{
                  width: '350px',
                  height: '196px',
                }}
              />
            </div>
            <div className="page__block-54-video-grid-img">
              <YouTube
                videoId="x4kPXXt46MU"
                opts={{
                  width: '350px',
                  height: '196px',
                }}
              />
            </div>
          </div>
        </div>
        <div className={animateShowUpBlock(6, "page__block page__block-55")} id="s6" ref={s6Ref}>
          <div className="page__block-55-title">
            <img src={require('./img/q16-title.png')} alt="q16" style={{width: "860px", height: "62px"}} />
          </div>
          <div className="page__block-55-text">
            <p>我們邀請了五位政治界、媒體界的朋友，和大家分享他們看過這份青少年的國族調查後，有什麼觀察和思考！
            </p>
          </div>
          <div className="page__block-55-grid">
            <div className="page__block-55-grid-person">
              <div className="page__block-55-grid-person-left">
                <img src={require('./img/profile-1.jpg')} alt="profile-1" style={{width: "100%", height: "100%"}} />
              </div>
              <div className="page__block-55-grid-person-right">
                <div>
                  <span className="page__block-55-grid-person-right-span-1">李志德</span>
                  <span className="page__block-55-grid-person-right-span-2"> / 端傳媒總編輯</span>
                </div>
                <div className="page__block-55-grid-person-right-text">
                  <p>「若將這份報告視作目前青少年的準確圖像，對我來說，台灣正在走向正確的道路。」</p>
                </div>
                <div 
                  className="page__block-55-grid-person-right-btn"
                  onClick={onClickReadAll}
                  id="1">
                  看全文
                </div>
              </div>
            </div>
            <div className="page__block-55-grid-person">
              <div className="page__block-55-grid-person-left">
                <img src={require('./img/profile-2.jpg')} alt="profile-1" style={{width: "100%", height: "100%"}} />
              </div>
              <div className="page__block-55-grid-person-right">
                <div>
                  <span className="page__block-55-grid-person-right-span-1">李志德</span>
                  <span className="page__block-55-grid-person-right-span-2"> / 端傳媒總編輯</span>
                </div>
                <div className="page__block-55-grid-person-right-text">
                  <p>「天然獨？天然台？中華民國派需要更有自信！這場可能被紅統、急獨派夾殺的詮釋權保衛戰，才是「中華民國派」真正的對手，而不是台灣的年輕人們。」</p>
                </div>
                <div 
                  className="page__block-55-grid-person-right-btn"
                  onClick={onClickReadAll}
                  id="2">
                  看全文
                </div>
              </div>
            </div>
            <div className="page__block-55-grid-person">
              <div className="page__block-55-grid-person-left">
                <img src={require('./img/profile-3.jpg')} alt="profile-1" style={{width: "100%", height: "100%"}} />
              </div>
              <div className="page__block-55-grid-person-right">
                <div>
                  <span className="page__block-55-grid-person-right-span-1">李志德</span>
                  <span className="page__block-55-grid-person-right-span-2"> / 端傳媒總編輯</span>
                </div>
                <div className="page__block-55-grid-person-right-text">
                  <p>在公共事務的討論、決策過程裡，青少年不應該總是「被代表」，而該是不折不扣的持分者，因為他們有能力改造出一個對所有人都好的新世界。</p>
                </div>
                <div 
                  className="page__block-55-grid-person-right-btn"
                  onClick={onClickReadAll}
                  id="3"
                >
                  看全文
                </div>
              </div>
            </div>
            <div className="page__block-55-grid-person">
              <div className="page__block-55-grid-person-left">
                <img src={require('./img/profile-4.jpg')} alt="profile-1" style={{width: "100%", height: "100%"}} />
              </div>
              <div className="page__block-55-grid-person-right">
                <div>
                  <span className="page__block-55-grid-person-right-span-1">李志德</span>
                  <span className="page__block-55-grid-person-right-span-2"> / 端傳媒總編輯</span>
                </div>
                <div className="page__block-55-grid-person-right-text">
                  <p>「即便前世代不斷強調，「台灣、中國同文同種、血脈相連」等情感訴求，新世代認為自己是台灣人的比例，已與過去有明顯差異。」</p>
                </div>
                <div 
                  className="page__block-55-grid-person-right-btn"
                  onClick={onClickReadAll}
                  id="4"
                >
                  看全文
                </div>
              </div>
            </div>
            <div className="page__block-55-grid-person">
              <div className="page__block-55-grid-person-left">
                <img src={require('./img/profile-5.jpg')} alt="profile-1" style={{width: "100%", height: "100%"}} />
              </div>
              <div className="page__block-55-grid-person-right">
                <div>
                  <span className="page__block-55-grid-person-right-span-1">李志德</span>
                  <span className="page__block-55-grid-person-right-span-2"> / 端傳媒總編輯</span>
                </div>
                <div className="page__block-55-grid-person-right-text">
                  <p>「高中職生認為未來10年重要的社會目標中，「環境維護」敬陪末座，由此可粗略觀少年的價值觀，以及未來台灣將會面臨選擇衝突的問題。」</p>
                </div>
                <div 
                  className="page__block-55-grid-person-right-btn"
                  onClick={onClickReadAll}
                  id="5"
                >
                  看全文
                </div>
              </div>
            </div>
          </div>
        </div>
        {showReadAll()}
        <div className={animateShowUpBlock(57, "page__block page__block-57")} ref={s57Ref}>
          <div className="page__block-57-content">
            <div className="page__block-57-content-cube">
              <img src={require('./img/q8-head.png')} style={{width: "100%", height: "100%"}} />
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
          >
            <a href='https://pse.is/KBUF6' target='_blanket'>下載報告</a>
          </div>
        </div>
        <div className={animateShowUpBlock(58, "page__block page__block-58")} ref={s58Ref}>
          <div className="page__block-58-pic">
          </div>
          <div className="page__block-58-share">
            <img src={require('./img/q9-title.png')} alt="q9" style={{width: "100%", height: "100%"}} />
          </div>
          <div className="page__block-58-btn" onClick={handleShareBtn}>
            分享
          </div>
        </div>
        <div className={animateShowUpBlock(59, "page__block page__block-59")} ref={s59Ref}>
          <div className="page__block-59-pic">
          </div>
            <div className="page__block-59-icon">
              <ion-icon name="logo-facebook" className="page__block-59-icon-1"></ion-icon>
              <ion-icon name="logo-youtube" className="page__block-59-icon-2"></ion-icon>
              <ion-icon name="logo-instagram" className="page__block-59-icon-3"></ion-icon>
            </div>
            <div className="page__block-59-line">&nbsp;</div>
            <div>
            <div className="row-3-2">
              <div className="col-1-of-3-1 page__block-59-textbox">
                <p>監製：於蓓華</p>
                <p>督導：舒逸琪</p>
                <p>社群：林孟勳</p>
              </div>
              <div className="col-1-of-3-2 page__block-59-textbox">
                <p>製作人：賴彥如</p>
                <p>影音導演：朱孝權</p>
                <p>網頁設計：通點設計</p>
              </div>
              <div className="col-1-of-3-3 page__block-59-textbox">
                <p>企劃：王柔婷</p>
                <p>執行製作：詹惠茹</p>
              </div>
            </div>
            <div className="page__block-59-text page__block-59-text-1">
                
            </div>
            <div className="page__block-59-text page__block-59-text-2">
                <p>財團法人公共電視文化事業基金會 版權所有 All Contents Copyright, Taiwan Public Television Service.</p>
            </div>
          </div>
        </div>
        {shareBtnPopup()}
      </div> : null
    );
  };

  return (
    <div style={fixBackground()}>
      {showHamburger()}
      <div className="page__block page__block-1 add_showup" id="#s1" ref={s1Ref}>
        <img src={require('./img/title2.png')} style={{width:"100%", height:"100%"}} alt="title2" />
      </div>
      <div className="page__block page__block-2 add_showup">
        <Player
          playsInline
          src={require('./img/video/P4.mp4')}
          width={"100%"}
          height={"100%"}
          fluid={false}
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <ControlBar disableCompletely={true} />
        </Player>
      </div>
      <div className="page__block page__block-3 add_showup">
        <p>2020總統大選將至，社會上對於總統選舉、國家認同和國家未來等議題，討論得沸沸揚揚。你會好奇代表著「未來」的青少年們究竟是怎麼想的嗎？公共電視青少年節目《青春發言人》委託政治大學「選舉研究中心」，針對全國高中職生進行國族認同 調查，分別從「你是哪裡人？」、「兩岸關係」、「對台灣的愛恨情仇？」、「高中職生對政治冷感嗎？」四大面向，帶你了解青少年如何看待自己的國家與土地。</p>
      </div>
      <div 
        onClick={popupSurveyMethod}
        className="page__block page__block-4 add_showup">看研究方法
      </div>
      <div className={animateShowUpBlock(2, "page__block page__block-5")} id="s2" ref={s2Ref}>
        <img src={require('./img/q1-title.png')} alt="q1" className="page__block-5-front"/>
        <img src={require('./img/green-background.jpg')} style={{width: "100%", height: "250px"}} alt="q1" className="page__block-5-background"/>
      </div>
      <PopupSurveyMethod 
        isPopup={popup} 
        closePopupSurveyMethod={closePopupSurveyMethod}
      />
      <div className={animateShowUpBlock(7, "page__block page__block-7")} ref={s7Ref}>
        <div className="page__block-7-cube">
          <img src={require('./img/q1-head.png')} style={{width: "100%", height: "100%"}} alt="img_block7" />
        </div>
        <div className="page__block-7-text-box">
          <div className="page__block-7-box-text">
            <p>在台灣，有人說自己是「台灣人」，也有人說自己是「中國人」，也有人說都是。你猜多數高中職生是怎麼想的？
            </p>
          </div>
        </div>
      </div>
      <div className={animateShowUpBlock(8, "page__block page__block-8")} ref={s8Ref}>
        <Player
          playsInline
          src={require('./img/video/P5.mp4')}
          width={"100%"}
          height={"100%"}
          fluid={false}
          autoPlay={true}
          muted={true}
        >
          <ControlBar disableCompletely={true} />
        </Player>
      </div>
      <div className={animateShowUpBlock(9, "page__block page__block-9")} ref={s9Ref}>
        <div className="row-3">
          <div 
            className="col-1-of-3 page__block-9-btn"
            onClick={() => {setAfterBlockNine(true)}}>
            中國人
          </div>
          <div 
            className="col-1-of-3 page__block-9-btn"
            onClick={() => {setAfterBlockNine(true)}}>
            台灣人
          </div>
          <div 
            className="col-1-of-3 page__block-9-btn"
            onClick={() => {setAfterBlockNine(true)}}>
            都是
          </div>
        </div>
      </div>
      {showAfterBlockNine()}
    </div>
  );
};

export default DesktopPageContent;