import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ title, white, href }) {
  return (
    <div id="header">
      <p className={white && 'headerWhite'}>
        {href && <Link to={href}>&lt;</Link>}
        {title}
      </p>
    </div>
  );
}
Header.defaultProps = {
  title: '',
  white: false, // 是否白色导航栏
  href: false,
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  white: PropTypes.bool,
  href: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.bool.isRequired,
  ]).isRequired,
};

export default Header;