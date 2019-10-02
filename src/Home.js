import React from 'react';
import { Player } from 'video-react';

const Home = (props) => {
  let imageAma = require('./img/ama.png');

  return (
    <div>
      <div className="header__block header__block-1">
        <div className="header__block-1__img">
          <Player
            playsInline
            src={require('./img/video/P1_1.mp4')}
            width={"100%"}
            height={"100%"}
            fluid={false}
            autoPlay={true}
            muted={true}
          />
        </div>
      </div>
      <div className="header__block header__block-2">
        <div className="header__block-2__main">
          <p>高中職生青少年國族認同大調查</p>
        </div>
      </div>
      <div className="header__block header__block-3">
        <div className="header__block-3__sub">
          <p>跟著政治人物最愛的阿嬤，一起來看看台灣高中職生如何思考台灣的未來!</p>
        </div>
      </div>
      <div className="header__block header__block-4">
        <div 
          className="header__block-4__btn"
          onClick={props.btnCallback}
        >
          聽阿嬤的話
        </div>
      </div>
    </div>
  );
}

export default Home;