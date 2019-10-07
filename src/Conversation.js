import React, { useRef, useEffect, useState } from 'react';

import imgA from './img/A.jpg';
import imgA1 from './img/A1.jpg';
import imgA2 from './img/A2.jpg';
import imgB from './img/B.jpg';
import imgB1 from './img/B1.png'; // cloud
import imgB2 from './img/B2.png'; // ama
import imgB3 from './img/B3.png'; // background

const Conversation = (props) => {

  // 2-> routeA, 3-> routeB
  const [route, setRoute] = useState(0);
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
    let image = [
      require('./img/1.jpg'),
      require('./img/2.jpg'),
      require('./img/3.jpg'),
      require('./img/4.jpg'),
      require('./img/5.jpg'),
      require('./img/6.jpg'),
      require('./img/7.jpg'),
    ];

    return (image[index]);
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
          ["突然吹來了一陣冷風，同時開始", "響起雷鳴！"],
        ]
      );
    } else {
      return (
        [
          ["「哼哼，你以為你有得選嗎？」神秘阿嬤露出了冷笑。"],
          ["突然吹來了一陣冷風，同時開始響起雷鳴！"],
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
    if (route === 3 && index === 8) {
      return null;
    }
    
    if (roles[index]) {
      if (index === 1 || index === 6) {
        return (
          <div 
            className="conversation__block-2__identity conversation__block-2__identity-main_role"
          >
            {roles[index]}
          </div>
        );
      } else {
        return (
          <div
            className="conversation__block-2__identity conversation__block-2__identity-ama"
          >
            {roles[index]}
          </div>
        );
      }
    }

    return null;
  }

  const setRouteA = () => {
    setRoute(2);
    props.selectRoute();
    props.handleRoute("A");
  };

  const setRouteB = () => {
    setRoute(3);
    props.selectRoute();
    props.handleRoute("B");
  };

  const getLineOrBtn = (index) => {
    if (index > 7) {
      if (route === 2) {
        return getAllLine(afterSelectOption((route === 2))[props.index - 8]);
      } else if (route === 3) {
        if (index <= 9) {
          return getAllLine(afterSelectOption((route === 2))[props.index - 8]);
        }

        if (index === 10) {
          return (getLineWithoutTyping(routeB()[1]));
        }
      }
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

  const getLineWithoutTyping = (strArr) => {
    return strArr.map((setence, index) => {
      let keyNum = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1));
      return (
        <div key={keyNum}>
          <p className={`conversation__block-2__text conversation__box__text-${index + 1}-notyping`}>
            {setence}
          </p>
        </div>
      );
    });
  };

  const getAllLine = (strArr) => {
    return strArr.map((setence, index) => {
      let keyNum = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1));
      return (
        <div key={keyNum}>
          <p className={`conversation__block-2__text conversation__block-2__text-${index + 1}`}>
            {setence}
          </p>
        </div>
      );
    });
  };

  const gotoPage = () => {
    props.gotoPage();
  };

  const putGoToBtn = () => {
    if (props.index < 8) {
      return (
        <div 
          className="conversation__block-1__goto"
          onClick={gotoPage}
        >
          Skip
        </div>
      );
    } else {
      return null;
    }
  }

  const showPreImgA2 = () => {
    if (route === 2) {
      if (props.index === 9) {
        return (
          <img className="pre_img_a2" src={imgA2} alt="imga2" />
        );
      }
    }
  }

  const getImg = () => {
    if (props.index <= 7) {
      return (
        <img 
          className= "normal_img"
          src={images(props.index - 1)} 
          alt="img"
        />
      );
    } else {
      if (route === 2) {
        if (props.index === 8) {
          return (
           <img className= "normal_img" src={imgA} alt="imgA" />
          );
        }

        if (props.index === 9) {
          return (
            <img 
              className="fadeout_img" 
              src={imgA1} 
              alt="imgA1"
            />
          );
        }
        
        if (props.index === 10) {
          return (
            <img 
              className= "normal_img"
              src={imgA2} 
              alt="imgA2"
            />
          );
        }
      } else if (route === 3) { // route B
        if (props.index === 8) {
          return (
            <img className="normal_img" src={imgB} alt="imgB" />
          );
        }

        if (props.index === 9) {
          return (
            <div className="combine_3_img">
              <img className="combine_3_img combine_3_img-3" src={imgB3}        alt="imgA3"/>
            </div>
          );
        }

        if (props.index === 10) {
          return (
            <div className="combine_3_img">
              <img className="combine_3_img combine_3_img-3" src={imgB3} 
                   alt="imgB3" />
              <img className="combine_3_img combine_3_img-2" src={imgB2} 
                   alt="imgB2" />
              <img className="combine_3_img combine_3_img-1" src={imgB1} 
                   alt="imgB1" />
            </div>
          );
        }
      }
    }
  };

  const preLoadImg = () => {
    if (route === 2 && props.index === 8) {
      return (
        <img src={imgA} className="preload_img" alt="imgA" />
      );
    }
  };

  const showImg = () => {
    return (
      <div className="conversation__block conversation__block-1" >
        <div 
          className="conversation__block-1__goto"
          onClick={gotoPage}
        >
          Skip
        </div>
        {getImg()}
        {showPreImgA2()}
      </div>
    );
  };

  const showChangePageBtn = () => {
    if (props.index === 7) {
      return null;
    } else {
      return (
        <div className="conversation__block-2__btn">
          <ion-icon name="arrow-dropdown"></ion-icon>
        </div>
      );
    }
  }
  
  return (
    <div
      className="conversation" 
      onClick={props.handleOnClick} 
      onKeyDown={props.handleOnClick}
      tabIndex="0"
      ref={thisDiv}
    >
      {showImg()}
      <div className="conversation__block conversation__block-2" >
        <div className="conversation__block-2__text-box">
          {getLineOrBtn(props.index)}
        </div>
        {showIdentity(props.index - 1)}
        {showChangePageBtn()}
      </div>
    </div>
  );
}

export default Conversation;