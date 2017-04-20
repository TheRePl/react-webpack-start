import React from 'react';
import { connect } from 'react-redux';
import { SELECT_CARD } from '../../../actions';
import cardImg from '../../../../../source/img/order/card.png';

const cardList = [
  {
    type: '洗衣',
    price: '20',
    startTime: '2017-04-11',
    endTime: '2017-06-11',
    address: '余姚',
    free: false,
    key: 0,
  },
  {
    type: '洗衣',
    price: '10',
    startTime: '2017-04-11',
    endTime: '2017-06-11',
    address: '余姚',
    free: true,
    key: 1,
  },
  {
    type: '保洁',
    price: '40',
    startTime: '2017-04-11',
    endTime: '2017-06-11',
    address: '余姚',
    free: false,
    key: 2,
  },
  {
    type: '保洁',
    price: '30',
    startTime: '2017-04-11',
    endTime: '2017-06-11',
    address: '余姚',
    free: true,
    key: 3,
  },
  {
    type: '保洁',
    price: '30',
    startTime: '2017-04-11',
    endTime: '2017-06-11',
    address: '余姚',
    free: true,
    key: 4,
  },
];

function Card(props) {
  return (
    <ul id="payCard" className="clear">
      {
        cardList.map(item => (
          /*
          * 卡卷是否选中状态
          * */
          <li
            className="active"
            onTouchTap={() => {
              props.SELECT_CARD(item.price);
              props.history.goBack();
            }}
            key={item.key}
          >
            <div>
              <img src={cardImg} alt="" />
              <div className="lt">
                <span>￥</span>
                {item.price}
                <span>.0</span>
              </div>
              <div className="rt">
                <h2>
                  {item.type}卷
                  <span>{item.free ? '体验' : '普通'}</span>
                  <small>
                    {item.free ? '（仅限单张使用）' : '（可多张使用）'}
                  </small>
                </h2>
                <ol>
                  <li>· 订单满20元可抵用</li>
                  <li>· 使用期限：{item.startTime}至{item.endTime}</li>
                  <li>· 仅限{item.address}地区使用</li>
                </ol>
              </div>
            </div>
            <p>· 仅限{item.type}使用</p>
          </li>
        ))
      }
    </ul>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return state;
}
export default connect(mapStateToProps, {
  SELECT_CARD,
})(Card);