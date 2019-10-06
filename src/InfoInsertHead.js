import React, { useState, useEffect, useRef } from 'react';

import DesktopPageContent from './DesktopPageContent';
import MobilePageContent from './MobilePageContent';

const InfoInsertHead = (props) => {

  const wholePageDiv = useRef(null);

  const [intro, setIntro] = useState(!props.fromGotoPage);
  const [singleColor, setSingleColor] = useState(true);
  
  useEffect(() => {
    window.addEventListener('keyDown', skipIntro);
    window.addEventListener('keyPress', skipIntro);
  });

  const skipIntro = () => {
    setIntro(false);
  };

  const singleColorStyle = () => {
    if (props.route === 2) {
      return ({
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
      });
    } else if (props.route === 3) {
      return ({
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        color: "white"
      });
    }
  }

  const getImg = (index) => {
    if (!props.isMobile) {
      let img = {
        5: require('./img/q5.png'),
        7: require('./img/q7.png'),
      };

      return (img[index]);
    } else {
      let img = {
        5: require('./img/q5-small.png'),
        7: require('./img/q7-small.png'),
      };
      return (img[index]);
    }
  }

  const routeALineOrBLine = () => {
    setTimeout(skipIntro, 4000);
    if (props.route === 2) {
      return (
        <div className="one-line__infoinsert">
          <div className="one-line__infoinsert-box">
            <div className="one-line__infoinsert-box-short_typing">
              有些資訊開始慢慢進入你的腦中....
            </div>
          </div>
        </div>
      );
    } else if (props.route === 3) {
      return (
        <div className="twoline_box">
          <div className="twoline_box__twoline">
            <p className="twoline_box__twoline-text-1">
              四周陷入一片黑暗，
            </p>
            <p className="twoline_box__twoline-text-2">
              你也不知不覺地暈了過去....
            </p>
          </div>
        </div>
      );
    }
  };
  
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
            style={singleColorStyle()}
            onClick={skipIntro}
          >
            {routeALineOrBLine()}
          </div>
        );
      }
    } else {
      return (props.isMobile) ?
        <MobilePageContent /> :
        <DesktopPageContent />;
    }
  }

  return (showContent());
}

export default InfoInsertHead;