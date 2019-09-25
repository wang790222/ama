import React, { useRef, useEffect, useState } from 'react';
import style from './style.css';

const Conversation = (props) => {
  const [route, setRoute] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const thisDiv = useRef(null);
  useEffect(() => {
    thisDiv.current.focus();
    if (thisDiv.current.clientWidth <= 1100) {
      setIsMobile(true);
      props.setIsMobile(true);
    }
  }, [route]);
  
  const images = (index) => {

    let image_normal = [
      require('./img/1.png'),
      require('./img/2.png'),
      require('./img/3.png'),
      require('./img/4.png'),
      require('./img/5.png'),
      require('./img/6.png'),
      require('./img/7.png'),
      require('./img/8.png'),
      require('./img/9.png'),
      require('./img/10-1.png'),
    ];

    let image_small = [
      require('./img/1-small.png'),
      require('./img/2-small.png'),
      require('./img/3-small.png'),
      require('./img/4-small.png'),
      require('./img/5-small.png'),
      require('./img/6-small.png'),
      require('./img/7-small.png'),
      require('./img/8-small.png'),
      require('./img/9-small.png'),
      require('./img/10-1-small.png'),
    ];

    if (isMobile) {
      return (image_small[index]);
    } else {
      return (image_normal[index]);
    }
  }

  let sentences = () => {
    if (isMobile) {
      return (
        [
          ["你走在路上，路旁林立的競選旗", "幟，提醒你這個島嶼上的總統大", "選，正如火如荼的進行中。"],
          ["看著旗幟上候選人笑得燦爛的臉", "孔，真讓人莫名煩躁。", "「哼，這些候選人都一個樣！」你", "抱怨了一句"],
          ["此時，突然有人拍拍你的肩膀！你", "轉頭一看..."],
          ["「年輕人，很有想法喔！」", "一個不知哪裡冒出來的阿嬤，笑咪", "咪地看著你"],
          ["你被看得渾身不自在，正想轉身離", "開，卻發現自己完全動彈不得！"],
          ["「少年仔，你想試試，成為這個島", "的領導人嗎？」", "神秘的阿嬤看著你，幽幽的說。"]
        ]
      );
    } else {
      return (
        [
          ["你走在路上，路旁林立的競選旗幟，提醒你這個島嶼上的總統大", "選，正如火如荼的進行中。"],
          ["看著旗幟上候選人笑得燦爛的臉孔，真讓人莫名煩躁。", "「哼，這些候選人都一個樣！」你抱怨了一句"],
          ["此時，突然有人拍拍你的肩膀！你轉頭一看..."],
          ["「年輕人，很有想法喔！」", "一個不知哪裡冒出來的阿嬤，笑咪咪地看著你"],
          ["你被看得渾身不自在，正想轉身離開，卻發現自己完全動彈不得！"],
          ["「少年仔，你想試試，成為這個島的領導人嗎？」", "神秘的阿嬤看著你，幽幽的說。"]
        ]
      );
    }
  };

  let afterSelectOption = (isOptionA) => {
    if(isOptionA) {
      return routeA();
    } else {
      return routeB();
    }
  };

  let routeA = () => {
    if (isMobile) {
      return (
        [
          ["「想成為這個島的領導人，就要先", "理解未來的主人翁是怎麼想的。」", "神秘阿嬤接著說"],
          ["阿嬤看著你，喃喃的說：「今日相", "遇，你我也算有緣....」", "只見阿嬤緩緩的閉上眼睛...."],
          ["阿嬤身後突然發出了耀眼的白色光", "芒"]
        ]
      );
    } else {
      return (
        [
          ["「想成為這個島的領導人，就要先理解未來的主人翁是怎麼想", "的。」神秘阿嬤接著說"],
          ["阿嬤看著你，喃喃的說：「今日相遇，你我也算有緣....」", "只見阿嬤緩緩的閉上眼睛...."],
          ["阿嬤身後突然發出了耀眼的白色光芒"]
        ]
      );
    }
  };

  let routeB = () => {
    if (isMobile) {
      return (
        [
          ["「哼哼，你以為你有得選嗎？」神", "秘阿嬤露出了冷笑。"],
          ["阿嬤看著你，喃喃的說：「今日相", "遇，你我也算有緣....」", "只見阿嬤緩緩的閉上眼睛...."],
          ["突然吹來了一陣冷風，四周突然風", "雨大作！你也不知不覺地暈了過", "去...."]
        ]
      );
    } else {
      return (
        [
          ["「哼哼，你以為你有得選嗎？」神秘阿嬤露出了冷笑。"],
          ["阿嬤看著你，喃喃的說：「今日相遇，你我也算有緣....」", "只見阿嬤緩緩的閉上眼睛...."],
          ["突然吹來了一陣冷風，四周突然風雨大作！你也不知不覺地暈了過", "去...."]
        ]
      );
    }
  };

  let roles = [
    "",
    "主角",
    "",
    "阿嬤",
    "",
    "阿嬤",
    "主角",
    "阿嬤",
    "阿嬤",
    ""
  ];

  const showIdentity = (index) => {
    if (roles[index]) {
      if (index === 1 || index === 6) {
        return (
          <div className="identity identity-main_role">
            {roles[index]}
          </div>
        );
      } else {
        return (
          <div className="identity identity-ama">
            {roles[index]}
          </div>
        );
      }
    }

    return null;
  }

  const setRouteA = () => {
    setRoute(true);
    props.selectRoute();
  };

  const setRouteB = () => {
    setRoute(false);
    props.selectRoute();
  };

  const getLineOrBtn = (index) => {
    if (index > 7) {
      return getAllLine(afterSelectOption(route)[props.index - 8]);
    } else if(index === 7) {
      return (
        <div>
          <div 
            key={1} 
            className="conversation__box-option conversation__box-option-1"
            onClick={setRouteA}
          >
            『有機會改變這個島，當然好囉！』
          </div>
          <div 
            key={2} 
            className="conversation__box-option conversation__box-option-2"
            onClick={setRouteB}
          >
            『不想...阿嬤都喜歡叫人酸宗痛嗎？』
          </div>
        </div>
      );
    } else {
      return getAllLine(sentences()[props.index - 1]);
    }
  }

  const getAllLine = (strArr) => {
    return strArr.map((setence, index) => {
      let keyNum = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1));
      return (
        <div>
          <p key={keyNum} className={`conversation__box-text-${index + 1}`}>
            {setence}
          </p>
          <div className="conversation-box__btn">
            <ion-icon name="arrow-dropdown"></ion-icon>
          </div>
        </div>
      );
    });
  };

  const gotoPage = () => {
    props.gotoPage();
  };
  
  return (
    <div
      className="conversation" 
      onClick={props.handleOnClick} 
      onKeyDown={props.handleOnClick}
      tabIndex="0"
      ref={thisDiv}
    >
      <div className="conversation__img" >
        <div 
          className="conversation__img-goto-page"
          onClick={gotoPage}
        >
          跳轉報告頁</div>
        <img src={images(props.index - 1)} />
      </div>
      <div className="conversation__box" >
        {showIdentity(props.index - 1)}
        {getLineOrBtn(props.index)}
      </div>
    </div>
  );
}

export default Conversation;