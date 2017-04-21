import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutableTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Slider from '../components/Root/Slider';
import { FETCH_ROOT_LIST } from '../actions';

/**
 * @静态资源
 * */
import _menu0 from '../../../source/img/menu/0.png';
import _menu1 from '../../../source/img/menu/1.png';
import _menu2 from '../../../source/img/menu/2.png';
import _menu3 from '../../../source/img/menu/3.png';
import _menu4 from '../../../source/img/menu/4.png';
import _menu5 from '../../../source/img/menu/5.png';
import _menu6 from '../../../source/img/menu/6.png';
import _menu7 from '../../../source/img/menu/7.png';
import _menu8 from '../../../source/img/menu/8.png';

const menus = [
  { name: '洗衣', icon: _menu0, hash: '#laundry', id: 0 },
  { name: '保洁', icon: _menu1, hash: '#clearing', id: 1 },
  { name: '保姆', icon: _menu2, hash: '#nanny', id: 2 },
  { name: '清洗', icon: _menu3, hash: '#purge', id: 3 },
  { name: '保养', icon: _menu4, hash: '#warranty', id: 4 },
  { name: '跑腿', icon: _menu5, hash: '#walk', id: 5 },
  { name: '维修', icon: _menu6, hash: '#aegis', id: 6 },
  { name: '生鲜', icon: _menu7, hash: '#fresh', id: 7 },
  { name: '开锁', icon: _menu8, hash: '#unlock', id: 8 }
];

class Root extends PureComponent {
  static propTypes() {
    return {
      $$rootData: ImmutableTypes.map.isRequired,
      FETCH_ROOT_LIST: PropTypes.func.isRequired
    };
  }

  componentWillMount() {
    this.props.FETCH_ROOT_LIST();
  }

  render() {
    const props = this.props;
    return (
      <div id="box">
        <Link className="selectAreaIcon" to={'/area'} />
        <Slider />
        {/* menu */}
        <ul id="rootMenu" className="clear">
          {
            menus.map(item => (
              <li key={item.id}>
                <Link
                  to={{
                    pathname: '/service',
                    hash: item.hash
                  }}
                >
                  <img src={item.icon} alt="" />
                  <p>{item.name}</p>
                </Link>
              </li>
            ))
          }
        </ul>
        {/* itemLists */}
        <div className="serviceItem">
          <Link to={'/service/about'}>
            <img className="banner" src={props.$$rootData.get('banner')} alt="" />
          </Link>
          <ul className="clear">
            {
              props.$$rootData.get('list').valueSeq().map(item => (
                <li key={item.id}>
                  <img src={item.img} alt="" />
                  <div className="textContent">
                    <h2>{item.type}</h2>
                    <p>{item.node}</p>
                    <p>{item.unit}</p>
                    <strong>￥{item.price}</strong>
                    <a className="shopCart">
                      <span>.</span>
                    </a>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    $$rootData: state.$$rootData
  };
}
export default connect(mapStateToProps, {
  FETCH_ROOT_LIST
})(Root);