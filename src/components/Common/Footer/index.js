import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Link from '../Link';

const Footer = ({ contacts, reserved }) => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        {contacts?.length ? contacts.map((contact, index) => (
          <li key={index}>
            <Link href={contact.url} className={`icon fa-${contact.icon}`}>
              <span className="label">{contact.type}</span>
            </Link>
          </li>
        )): null}
      </ul>
      <ul className="copyright">
        <li>{reserved}</li>
      </ul>
    </div>
  </div>
)

Footer.displayName = `Footer`;
Footer.propTypes = {
  contacts: PropTypes.array.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default Footer;

