import React, { useState, useEffect, useRef } from 'react';

const InfoInsertHead = () => {

  const thisDiv = useRef(null);
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    if(intro) {
      thisDiv.current.focus();
    }
  });

  const skipIntro = () => {
    setIntro(false);
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
      return (<div>123</div>);
    }
  }

  return (
    showContent()
  );
}

export default InfoInsertHead;