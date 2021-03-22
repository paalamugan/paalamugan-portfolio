import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import { Link } from '../../Common';

const ContactForm = ({ button }) => {

  const [isEmailReceived, setIsEmailReceived] = useState(false);
  const [isEmailSend, setIsEmailSend] = useState(false);

  const sendEmail = (e) => {

    e.preventDefault();

    setIsEmailSend(false);

    let name = $(e.target).find(`#name`);
    let email = $(e.target).find(`#email`);
    let message = $(e.target).find(`#message`);

    emailjs.sendForm(`service_jehsv7y`, `template_8819peq`, e.target, `user_UT6nBSGGl0ObZLRHKuqSA`)
    .then((result) => {

      name && name.val(``);
      email && email.val(``);
      message && message.val(``);
      setIsEmailReceived(true);

    }, (error) => {
      setIsEmailReceived(false);
    }).finally (() => {
      setIsEmailSend(true);
      setTimeout(() => {
        setIsEmailSend(false);
      }, 8000);
    });

  }

  return (
    <form id="contact-form" onSubmit={sendEmail}>
      <div className="row uniform 50%">
        <div className="6u 12u$(xsmall)">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            autoComplete="off"
          />
        </div>
        <div className="6u 12u$(xsmall)">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            autoComplete="off"
          />
        </div>
        <div className="12u">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="4"
            required
          ></textarea>
        </div>
      </div>
      <ul className="actions" style={{ marginTop: 30 }}>
        <li>
          <input type="submit" value={button.name} />
        </li>
        {isEmailSend && (<li className={`text-${isEmailReceived ? `green` : `red`} ${isEmailSend ? `fade-in` : `fade-out`}`}>
            <i className={`icon mr-5 fa-${isEmailReceived ? `check-circle` : `times-circle`}`}></i>
            Email {isEmailReceived ? `was successfully sent` : `Not Received`}.
          </li>)
        }
      </ul>
    </form>
  )
};

ContactForm.displayName = `ContactForm`;
ContactForm.propTypes = {
  button: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}
export default ContactForm;