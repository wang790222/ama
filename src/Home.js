import React from 'react';

import style from './style.css';

const Home = (props) => {

  let imageAma = require('./img/ama.png');

  return (
    <div className="header">
      <div className="header__block">
        <div className="header__block header__block-img_shade">
          <img className="header__block header__block-img_shade-img" src={imageAma} />
          <div className="header__block       header__block-img_shade-shade">&nbsp;</div>
        </div>
        <div className="header__block header__block-tittle">
          <h2 className="header__block header__block-tittle-main">高中職生青少年國族認同大調查</h2>
          <h4 className="header__block header__block-tittle-sub">跟著政治人物最愛的阿嬤，一起來看看台灣高中職生如何思考台灣的未來!</h4>
        </div>
        <div 
          className="header__block header__block-btn"
          onClick={props.btnCallback}
        >
          聽阿嬤的話
        </div>
      </div>
    </div>
  );
}

export default Home;