import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Accordion extends Component {
  static propTypes() {
    return {
      children: PropTypes.node.isRequired,
    };
  }

  static shouldComponentUpdate() {
    return false;
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  tabList() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const state = this.state;
    const ele = this.props.children;
    return (
      <div className="_accordion" name={state.open && 'open'}>
        {
          ele.type === 'a' || ele.props.to ?
            <Link to={ele.props.to} className="title">
              {ele.props.name}
            </Link> :
            <div
              className="title"
              onTouchTap={() => this.tabList()}
            >
              {ele.props.name}
              {ele.props.children && <span>&gt;</span>}
            </div>
        }
        {
          ele.props.children &&
          <ul className="submenu">
            {ele.props.children}
          </ul>
        }
      </div>
    );
  }
}

export default Accordion;
// 此版本，共享状态，所以只会打开一个list
/*
class Accordion extends Component {
  static propTypes() {
    return {
      children: PropTypes.node.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      open: false,
    };
    this.tabList = this.tabList.bind(this);
  }

  tabList(eventId) {
    const key = Number.parseInt(eventId, 10);
    this.setState({
      id: key,
      open: key === this.state.id ? !this.state.open : true,
    });
  }

  render() {
    const children = this.props.children;
    const state = this.state;
    return (
      <ul id="accordion">
        {
          children.length ?
            children.map((ele, index) => {
              const _props = ele.props;
              return (
                <li key={index} className={state.id === index && state.open && 'open'}>
                  <div
                    id={index}
                    className="title"
                    onClick={e => this.tabList(e.target.id)}
                  >
                    {_props.name}
                    <span>&gt;</span>
                  </div>
                  <ul className="submenu">
                    {_props.children}
                  </ul>
                </li>
              );
            }) :
            (
              <li className={state.open && 'open'}>
                <div
                  className="title"
                  onClick={() => this.tabList(0)}
                >
                  {children.props.name}
                  <span>&gt;</span>
                </div>
                <ul className="submenu">
                  {children.props.children}
                </ul>
              </li>
            )
        }
      </ul>
    );
  }
}*/
