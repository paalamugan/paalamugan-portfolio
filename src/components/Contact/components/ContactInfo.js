import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../Common';

const ContactInfo = ({ address, phone, email }) => (
  <ul className="labeled-icons">
    <li>
      <h3 className="icon fa-home">
        <span className="label">Address</span>
      </h3>
      {address}
    </li>
    <li>
      <h3 className="icon fa-mobile">
        <span className="label">Phone</span>
      </h3>
      {phone}
    </li>
    <li>
      <h3 className="icon fa-envelope-o">
        <span className="label">Email</span>
      </h3>
      <Link to={`mailto:${email}`} >
          {email}
      </Link>
    </li>
  </ul>
);

ContactInfo.displayName = `ContactInfo`;
ContactInfo.propTypes = {
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactInfo;