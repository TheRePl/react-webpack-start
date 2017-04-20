import React from 'react';
import ImmutableTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Footer({ order }) {
  return (
    <div id="serviceFooter">
      <Link className="shopCart active" to={'/service/cartList'}>
        {
          <span>{order.map(item => Number.parseInt(item.get('num'), 10)).reduce((pre, next) => pre + next) || 0}</span>
        }
      </Link>
      <p>
        预估价格：￥
        <strong>
          {
            order.map(item => Number.parseInt(item.get('price') * item.get('num'), 10)).reduce((pre, next) => pre + next)
            || 0
          }
        </strong>
      </p>
      <Link to="/service/ordering" className="selectBuy">立即下单</Link>
    </div>
  );
}

Footer.defaultProps = {
  order: [],
};
Footer.propTypes = {
  order: ImmutableTypes.list,
};

function mapStateToProps(state) {
  return {
    order: state.order,
  };
}
export default connect(mapStateToProps)(Footer);