import React, { useRef, useEffect, useState } from 'react';
import { Player, ControlBar } from 'video-react';

const Home = (props) => {

  const homeDiv = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    homeDiv.current.focus();
    if (homeDiv.current.clientWidth <= 1100) {
      setIsMobile(true);
    }
  });

  return (
    <div ref={homeDiv}>
      <div className="header__block header__block-1">
        <div className="header__block-1__img">
          <Player
            playsInline
            src={require('./img/video/P1.mp4')}
            width={"100%"}
            height={"100%"}
            fluid={false}
            autoPlay={true}
            muted={true}
          >
            <ControlBar disableCompletely={true}/>
          </Player>
        </div>
      </div>
      <div className="header__block header__block-2">
        <div className="header__block-2__main">
          {
            (isMobile) ? 
            (<img src={require('./img/title-small.png')} style={{width:"100%", height:"100%"}} alt="title" />) : 
            (<img src={require('./img/title.png')} style={{width:"100%", height:"100%"}} alt="title" />)
          }
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