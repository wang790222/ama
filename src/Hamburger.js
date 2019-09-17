import React, { useRef, useEffect } from 'react';

const Hamburger = (props) => {

  const checkBoxRef = useRef(null);

  const handleOnClick = () => {
    checkBoxRef.current.checked = false;
  };

  const handleGoToHomePage = () => {
    props.backToHomePage();
  };

  return (
    <div className="hamburger">
      <input 
        type="checkbox" 
        className="hamburger__checkbox" 
        id="navi-toggle" 
        ref={checkBoxRef}
      />
      <label htmlFor="navi-toggle" className="hamburger__button">
        <span className="hamburger__icon">&nbsp;</span>
      </label>
      <div className="hamburger__background">&nbsp;</div>
      <nav className="hamburger__nav">
        <ul className="hamburger__list">
          <li className="hamburger__item">
            <a href="#" className="hamburger__link" onClick={handleOnClick}>
              <span>首頁</span><span className="bull">&nbsp;</span></a>
          </li>
          <li className="hamburger__item">
            <a href="#s2" className="hamburger__link" onClick={handleOnClick}>
              <span>你是哪裡人？</span><span className="bull">&nbsp;</span></a>
          </li>
          <li className="hamburger__item">
            <a href="#s3" className="hamburger__link" onClick={handleOnClick}>
              <span>你怎麼看兩岸關係？</span><span className="bull">&nbsp;</span></a>
          </li>
          <li className="hamburger__item">
            <a href="#s4" className="hamburger__link" onClick={handleOnClick}>
              <span>對台灣的愛恨情仇？</span><span className="bull">&nbsp;</span></a>
          </li>
          <li className="hamburger__item">
            <a href="#s5" className="hamburger__link" onClick={handleOnClick}>
              <span>高中職生對政治冷感嗎？</span><span className="bull">&nbsp;</span></a>
          </li>
          <li className="hamburger__item">
            <a href="#s6" className="hamburger__link" onClick={handleOnClick}>
              <span>調查結果，他們怎麼看？</span><span className="bull">&nbsp;</span></a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Hamburger;