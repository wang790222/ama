import React, { useState, useEffect } from 'react';

import style from './style.css';
import TheDay from "./TheDay"
import Conversation from "./Conversation"
import InfoInsertHead from './InfoInsertHead';

var timerId = null;

const Dialogue = (props) => {
  const [count, setCount] = useState(0);
  const [opening, setOpening] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [fromGotoPage, setFromGotoPage] = useState(false);

  // 2-> routeA, 3-> routeB
  const [route, setRoute] = useState(0);
  
  useEffect(() => {
    if (count === 0) {
      timerId = setTimeout(closeTheDay, 1500);
    } else {
      if (timerId) {
        clearTimeout(timerId);
      }
      if (route === 3 && (count === 9 || count === 10 )) {
        timerId = setTimeout(handleSetCountByTimer, 4000);
      } else if (route === 2 && count === 10) {
        timerId = setTimeout(handleSetCountByTimer, 4000);
      } else if (count !== 7){
        timerId = setTimeout(handleSetCountByTimer, 8000);
      }
      
    }
  }, [count]);

  const handleSetCountByTimer = () => {
    if (count < 10) {
      setCount(count + 1);
    } else if (count === 10) {
      setOpening(false);
    }
  }

  const handleSetCountByClick = () => {
    if (count < 7 || (count === 8 || count === 9)) {
      setCount(count + 1);
    } else if (count === 10) {
      setOpening(false);
    }
  }

  const closeTheDay = () => {
    setCount(1);
  }

  const selectRoute = () => {
    if (count === 7) {
      setCount(count + 1);
    }
  };

  const handleSetIsMobile = (flag) => {
    if (flag) {
      setIsMobile(true);
    }
  };

  const gotoPage = () => {
    setOpening(false);
    setFromGotoPage(true);
  };

  const handleRoute = (r) => {
    if (r === "A") {
      setRoute(2);
    } else {
      setRoute(3);
    }
  }

  const renderBlock = () => {
    if(!count) {
      return <TheDay />;
    } else {
      if (opening) {
        return (
          <Conversation 
            index={count}
            handleOnClick={handleSetCountByClick}
            selectRoute={selectRoute}
            setIsMobile={handleSetIsMobile}
            gotoPage={gotoPage}
            handleRoute={handleRoute}
          />
        );
      } else {
        return (
          <InfoInsertHead 
            isMobile={isMobile} 
            fromGotoPage={fromGotoPage}
            route={route}
          />);
      }
    }
  }

  return (renderBlock());
}

export default Dialogue;