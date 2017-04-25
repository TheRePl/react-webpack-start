import React from 'react'
import PropTypes from 'prop-types'
import ImmutableTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Footer({ $$pay, location }) {
  return (
    <div id="serviceFooter">
      <div className="content">
        <Link
          className="shopCart active"
          to={{
            pathname: '/service/cartList',
            hash: location.hash
          }}
        >
          {
            <span>
              {
                $$pay.get('num') || 0
              }
            </span>
          }
        </Link>
        <p>
          预估价格：￥
          <strong>
            {
              $$pay.get('price') || 0
            }
          </strong>
        </p>
        <Link
          className="selectBuy"
          to={{
            pathname: '/service/ordering',
            hash: location.hash
          }}
        >
          立即下单
        </Link>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  $$pay: {},
  location: {}
}
Footer.propTypes = {
  $$pay: ImmutableTypes.map,
  location: PropTypes.object
}

function mapStateToProps(state) {
  return {
    $$pay: state.$$pay
  }
}
export default connect(mapStateToProps)(Footer)