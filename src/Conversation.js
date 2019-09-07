import React from 'react';
import style from './style.css';

class Conversation extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.props.handleOnClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.props.handleOnClick);
  }
  
  render() {
    let images = [
      require('./img/1.png'),
      require('./img/2.png'),
      require('./img/3.png'),
      require('./img/4.png'),
      require('./img/5.png'),
      require('./img/6.png'),
    ];

    let sentences = [
      "你走在路上，路旁林立的競選旗幟，提醒你這個島嶼上的總統大選，正如火如荼的進行中。",
      "看著旗幟上候選人笑得燦爛的臉孔，真讓人莫名煩躁。「哼，這些候選人都一個樣！」你抱怨了一句",
      "此時，突然有人拍拍你的肩膀！你轉頭一看...",
      "「年輕人，很有想法喔！」一個不知哪裡冒出來的阿嬤，笑咪咪地看著你",
      "你被看得渾身不自在，正想轉身離開，卻發現自己完全動彈不得！",
      "「少年仔，你想試試，成為這個島的領導人嗎？」神秘的阿嬤看著你，幽幽的說。",
      "",
    ];

    const h3ClassName = `h3-${this.props.index}`;

    return (
      <div className="conversation" onClick={this.props.handleOnClick} onKeyDown={this.props.handleOnClick} >
        <img src={images[this.props.index - 1]} />
        <div className="conversation-box">
          <div key={this.props.index} className={h3ClassName}>
            {sentences[this.props.index - 1]}
          </div>
          <div className="conversation-box__btn">
            <ion-icon name="play"></ion-icon>
          </div>
        </div>
      </div>
    );
  }
}

export default Conversation;