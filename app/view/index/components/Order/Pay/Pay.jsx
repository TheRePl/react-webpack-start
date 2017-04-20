import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const orderPay = {
  price: '45',
  track: '20',
  type: '洗衣',
};

class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: '余额',
    };
  }

  tabMode(value) {
    this.setState({
      mode: value,
    });
  }

  render() {
    const pay = this.props.pay;
    console.log(pay.toJS(), pay.get('useCard'));
    return (
      <div id="pay">
        {
          <ul>
            <li>
              服务项目总价
              <span >{orderPay.price}元</span>
            </li>
            <li>
              物流费
              <span>{orderPay.track}元</span>
            </li>
            <li>
              服务项目
              <span >{orderPay.type}</span>
            </li>
            <li>
              总金额
              <span >
                { Number.parseInt(orderPay.price, 10) + Number.parseInt(orderPay.track, 10) }元
              </span>
            </li>
          </ul>
        }
        <div className="card">
          优惠卷
          <Link to={'/order/pay/card'}>{pay.get('useCard') ? pay.get('useCard') : '请选择优惠卷  >'}</Link>
        </div>
        {
          <ul className="pay">
            <li>
              支付方式
              <span>
              需要支付：
                { Number.parseInt(orderPay.price, 10) + Number.parseInt(orderPay.track, 10) }
              </span>
            </li>
            <li
              className={this.state.mode === '余额' && 'active'}
              onTouchTap={() => { this.tabMode('余额'); }}
            >
              余额宝
              <span className="red">
              4590
            </span>
            </li>
            <li
              className={this.state.mode === '微信' && 'active'}
              onTouchTap={() => { this.tabMode('微信'); }}
            >
              微信支付
            </li>
            <li
              className={this.state.mode === '现金' && 'active'}
              onTouchTap={() => { this.tabMode('现金'); }}
            >
              现金支付
            </li>
          </ul>
        }
        <p>
          当现金不足时，可使用余额和微信支付，或余额和现金支付，进行联合支付。
        </p>
        <input type="button" value="立即支付" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pay: state.pay,
  };
}
export default connect(mapStateToProps)(Pay);