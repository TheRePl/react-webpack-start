import React from 'react'
import PropTypes from 'prop-types'
import ImmutableTypes from 'react-immutable-proptypes'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CLEAR_SERVICE, ADD_SERVICE_COUNT, REDUCE_SERVICE_COUNT } from '../../../actions'

function CartList(props) {
  return (
    <div className="cartList">
      <div className="header">
        <a
          onTouchTap={() => props.CLEAR_SERVICE()}
          className="clearAll"
        >
          清空
        </a>
        <h1>价格预估</h1>
        <Link
          className="back"
          to={{
            pathname: '/service',
            hash: props.location.hash
          }}
        >
          X
        </Link>
      </div>
      <ul>
        {
          props.$$order.map(item => (
            <li key={item.get('id')}>
              <img src={item.get('img')} alt="" />
              <div className="buyNum">
                <a onTouchTap={() => props.REDUCE_SERVICE_COUNT(item.get('id'))}>-</a>
                <span>{item.get('num')}</span>
                <a onTouchTap={() => props.ADD_SERVICE_COUNT(item.get('id'))}>+</a>
              </div>
              <div className="title">
                <span>{item.get('type')}</span>
                <strong>￥{item.get('price') * item.get('num')}</strong>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

CartList.defaultProps = {
  $$order: {},
  location: {},
  ADD_SERVICE_COUNT: () => false,
  REDUCE_SERVICE_COUNT: () => false,
  CLEAR_SERVICE: () => false
}

CartList.propTypes = {
  $$order: ImmutableTypes.list,
  location: PropTypes.object,
  ADD_SERVICE_COUNT: PropTypes.func,
  REDUCE_SERVICE_COUNT: PropTypes.func,
  CLEAR_SERVICE: PropTypes.func
}

function mapStateToProps(state) {
  return {
    $$order: state.$$order
  }
}
export default connect(mapStateToProps, {
  CLEAR_SERVICE,
  ADD_SERVICE_COUNT,
  REDUCE_SERVICE_COUNT
})(CartList)