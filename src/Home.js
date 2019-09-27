import React from 'react';

import style from './style.css';

const Home = (props) => {

  let imageAma = require('./img/ama.png');

  return (
    <div className="header">
      <img className="header__img" src={imageAma} />
      <div className="header__shade">&nbsp;</div>
      <div className="header__tittle">
        <h2 className="header__tittle-main">高中職生青少年國族認同大調查</h2>
        <h4 className="header__tittle-sub">跟著政治人物最愛的阿嬤，一起來看看台灣高中職生如何思考台灣的未來!</h4>
      </div>
      <div 
        className="header__btn"
        onClick={props.btnCallback}
      >
        聽阿嬤的話
      </div>
    </div>
  );
}

export default Home;