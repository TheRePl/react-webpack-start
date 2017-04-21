import React, { Component } from 'react';
import immutableTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ADD_SERVICE, FETCH_SERVICE } from '../../../actions';

class Items extends Component {
  static propTypes() {
    return {
      service: immutableTypes.list,
      ADD_SERVICE: PropTypes.func.isRequired,
      FETCH_SERVICE: PropTypes.func.isRequired
    };
  }

  componentWillMount() {
    const props = this.props;
    console.log(this.props);
    props.FETCH_SERVICE(props.location.hash);
  }

  handleAddService(item) {
    this.props.ADD_SERVICE(item);
  }

  render() {
    const props = this.props;
    return (
      <div className="serviceItem">
        <ul className="clear">
          {
            this.props.service.map(item => (
              <li key={item.id}>
                <Link
                  className="about"
                  to={{
                    pathname: '/service/about',
                    hash: props.location.hash
                  }}
                >
                  <img src={item.img} alt="" />
                </Link>
                <div className="textContent">
                  <h2>{item.type}</h2>
                  <p>{item.node}</p>
                  <p>{item.unit}</p>
                  <strong>￥{item.price}</strong>
                  <a
                    onTouchTap={() => this.handleAddService({
                      type: item.type,
                      num: 1,
                      img: item.img,
                      price: item.price,
                      id: item.id
                    })}
                    className="shopCart"
                  >
                    <span>.</span>
                  </a>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  order: state.order,
  service: state.service
}), {
  ADD_SERVICE,
  FETCH_SERVICE
})(Items);