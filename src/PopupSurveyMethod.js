import React from 'react';

const PopupSurveyMethod = (props) => {
  return (props.isPopup) ? 
  (
    <div className="page__block page__block-6">
      <div className="page__block page__block-6__content">
        <div 
          className="page__block page__block-6__content-close"
          onClick={props.closePopupSurveyMethod}
        >
          &times;
        </div>
        <div className="page__block page__block-6__content-text">
          <ol>
            <li>
              本次問卷調查期間為2019年6月21日至7月14日，考量到時間與經費的限制，最後以滾雪球取樣的方法，邀請全國高中職生自行填答，總計回收2223份有效問卷。調查結果最後依受訪者性別、學校性質、以及學校地理區域進行加權，使與母體一致。母體參數依據教育統計查詢網─107學年度高級中等學校校別資料檔。
              <br />
              <br />
              有關滾雪球方式的操作，我們發放了紙本與網路問卷。在紙本問卷上，我們先透過在高中職任教的老師，詢問是否願意協助發放且回收問卷，並且透過老師再介紹其他願意協助發放問卷的老師。網路問卷亦同，我們透過Facebook、PTT、親朋好友以及有意願協助的老師轉傳問卷連結，同時寄出e-mail給已填答完成的學生，請他們幫忙將問卷轉傳給朋友或是同學填寫。在最後的2223份有效問卷中，紙本回收1200份，網路回收1023份。
            </li>
            <br />
            <li>
              問卷調查期間，香港反送中運動爆發。
            </li>
            <br />
            <li>
              本份問卷設計參考美國杜克大學亞太安全研究中心《台灣國家安全調查》以及國立政治大學選舉研究中心《我國大學生政治社會化之研究》兩份問卷的題型。
            </li>
          </ol>
        </div>
      </div>
    </div>
  ) : null;
};

export default PopupSurveyMethod;