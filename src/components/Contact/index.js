import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ContactForm, ContactInfo } from './components';

const Contact = ({ title, description, button, ...rest }) => (
  <>
    <h2>{title}</h2>
    {description && (<p>{description}</p>)}
    <div className="row">
      <div className="8u 12u$(small)">
        <ContactForm button={button} />
      </div>
      <div className="4u 12u$(small)">
        <ContactInfo {...rest} />
      </div>
    </div>
  </>
)

Contact.displayName = `Contact`;
Contact.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  button: PropTypes.shape({
      name: PropTypes.string.isRequired,
  }),
};

export default Contact;
