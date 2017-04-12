import React from 'react';
import ReactSwipes from 'react-swipes';
import './slider.pcss';
import Img from '../../../../source/img/service/slider.png';

const items = [
  { img: Img, key: 0 },
  { img: Img, key: 1 },
  { img: Img, key: 2 },
];
// swipes 的配置
const opt = {
  // https://github.com/younth/react-swipes
  distance: document.body.clientWidth,
};

function Slider() {
  return (
    <div className="viewport">
      <ReactSwipes className="card-slide" options={opt}>
        {
          items.map(item => (
            <div className="item" key={item.key}>
              <a href="/">
                <img src={item.img} alt="" />
              </a>
            </div>
          ))
        }
      </ReactSwipes>
    </div>
  );
}

export default Slider;