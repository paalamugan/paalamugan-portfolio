import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer';
import Icon from '../Icon';
import Link from '../Link';

import avatar from '../../../assets/images/avatar.jpg'

const Header = ({ icon, title, description, footer }) => (
  <header id="header">
    <div className="inner">
      <Link className="image avatar">
        <Icon name={icon} />
      </Link>
      <h1>
        <strong>{title}</strong>, {description}
      </h1>
    </div>
    <Footer {...footer} />
  </header>
)

Header.displayName = `Header`;
Header.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footer: PropTypes.shape().isRequired,
};

export default Header
