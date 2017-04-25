import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutableTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import img0 from '../../../../../source/img/service/address.png'
import img1 from '../../../../../source/img/service/itemList.png'
import img2 from '../../../../../source/img/service/time.png'

const items = [
  { name: '日常保洁（3小时/次）', num: 2, price: 100, key: 0 },
  { name: '日常保洁（3小时/次）', num: 1, price: 140, key: 1 },
  { name: '日常保洁（3小时/次）', num: 4, price: 120, key: 2 },
  { name: '日常保洁（3小时/次）', num: 2, price: 100, key: 3 }
]

class Ordering extends Component {
  static propTypes() {
    return {
      $$order: ImmutableTypes.map,
      $$pay: ImmutableTypes.map,
      location: PropTypes.object
    }
  }

  constructor(...props) {
    super(props)
    this.state = {}
  }

  render() {
    const props = this.props
    console.log(props.$$order.toJS())
    console.log(props.$$pay.toJS())
    return (
      <div className="Ordering">
        <Header title="订单确认" href={`/service${props.location.hash}`} white />
        <ul>
          <li>
            <img src={img0} alt="" />
            <small>服务地址：</small>
            <p>
              <Link to={`/service/address${props.location.hash}`}>
                还没有设置地址哟
                <span>&gt;</span>
              </Link>
            </p>
          </li>
          <li className="orderItems">
            <img src={img1} alt="" />
            <small>订单详情：</small>
            {
              props.$$order.map(item => (
                <p className="items" key={item.key}>
                  <span className="lt">
                    {item.get('type')}
                    <small>
                      ({item.get('node')})
                    </small>
                  </span>
                  {item.get('num')}
                  <span className="rt">
                    ￥{item.get('price')}
                  </span>
                </p>
              ))
            }
          </li>
          <li>
            <p>
              服务项目总价
              <span className="rt">
              ￥{props.$$pay.get('price')}
              </span>
            </p>
            <p>
              物流
              <small>
                （订单金额不足27.0元时，将收取6.0元物流费用）
              </small>
              <span className="rt">
              ￥{props.$$pay.get('price') > 27 ? 0 : 6}
              </span>
            </p>
            <big>
              实付：
              <span>
                ￥{props.$$pay.get('price') > 27 ? props.$$pay.get('price') : props.$$pay.get('price') + 6}
              </span>
            </big>
            <textarea placeholder="备注:" />
          </li>
          <li>
            <img src={img2} alt="" />
            <small>服务时间：</small>
            <p>
              <Link to={`/service/ordering/time${props.location.hash}`}>
                请选择服务时间
                <span>&gt;</span>
              </Link>
            </p>
          </li>
        </ul>
        <div className="submit">
          <input type="button" value="确认提交" />
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  $$order: state.$$order,
  $$pay: state.$$pay
}), {})(Ordering)