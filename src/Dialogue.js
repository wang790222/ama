import React, { useState, useEffect } from 'react';

import style from './style.css';
import TheDay from "./TheDay"
import Conversation from "./Conversation"
import InfoInsertHead from './InfoInsertHead';

var timerId = null;

const Dialogue = (props) => {
  const [count, setCount] = useState(0);
  const [opening, setOpening] = useState(true);

  useEffect(() => {
    if (count === 0) {
      timerId = setTimeout(closeTheDay, 1500);
    } else {
      if (timerId) {
        clearTimeout(timerId);
      }
      
      timerId = setTimeout(handleSetCount, 8000);
    }
  }, [count]);

  const handleSetCount = () => {
    if (count < 7 || ( count > 7 && count < 10)) {
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

  const renderBlock = () => {
    if(!count) {
      return <TheDay />;
    } else {
      if (opening) {
        return (
          <Conversation 
            index={count}
            handleOnClick={handleSetCount}
            selectRoute={selectRoute}
          />
        );
      } else {
        return (<InfoInsertHead />);
      }
    }
  }

  return (renderBlock());
}

export default Dialogue;