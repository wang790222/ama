import React from 'react';

import style from './style.css';

const Home = (props) => {

  let imageAma = require('./img/ama.png');

  return (
    <div className="body">
      <div className="header">
        <img className="header--img" src={imageAma} />
        <div className="heading-primary">
          <h2 className="heading-primary--main">高中職生國族認同大調查</h2>
          <h4 className="heading-primary--sub">跟著政治人物最愛的阿嬤，一起來看看台灣高中職生如何思考台灣的未來!</h4>
        </div>
        <div className="header--btn">
          <a href="#" className="header--btn-main" onClick={props.btnCallback}>聽阿嬤的話</a>
        
          <a href="#" className="header--btn-second">直接看調查結果</a>
        </div>
      </div>
    </div>
  );
}

export default Home;