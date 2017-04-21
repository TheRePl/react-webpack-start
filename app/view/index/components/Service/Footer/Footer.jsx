import React from 'react';
import PropTypes from 'prop-types';
import ImmutableTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Footer({ $$order, location }) {
  console.log(location);
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
                $$order.map(item => Number.parseInt(item.get('num'), 10))
                  .reduce((pre, next) => pre + next) || 0
              }
            </span>
          }
        </Link>
        <p>
          预估价格：￥
          <strong>
            {
              $$order.map(item => Number.parseInt(item.get('price') * item.get('num'), 10))
                .reduce((pre, next) => pre + next) || 0
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
  );
}

Footer.defaultProps = {
  $$order: [],
  location: {}
};
Footer.propTypes = {
  $$order: ImmutableTypes.list,
  location: PropTypes.object
};

function mapStateToProps(state) {
  return {
    $$order: state.$$order
  };
}
export default connect(mapStateToProps)(Footer);