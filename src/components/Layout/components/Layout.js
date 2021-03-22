import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import $ from 'jquery';
global.$ = $;

class DefaultLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

      const { bodyClass, children } = this.props;

      return (
        <>
          <Helmet>
              <html lang="en" className="fs-base" />
              <body className={bodyClass} />
              {
              // <script type="text/javascript">
              //     {`
              //         function onReCaptchaSubmit (token) {

              //             var contactForm = $('#contact-form');
              //             var name = $('#name').val();
              //             var email = $('#email').val();
              //             var message = $('#message').val();
              //             var submitButton = $('#submitButton');

              //             $.ajax({
              //                 url: contactForm.prop('action'),
              //                 method: 'POST',
              //                 data: JSON.stringify({
              //                     name: name,
              //                     email: email,
              //                     message: message,
              //                     captcha: token

              //                 }),
              //                 dataType: 'json',
              //                 contentType: 'application/json;charset=utf-8',
              //                 success: function(data) {

              //                     contactForm.addClass('display-none');
              //                     contactForm
              //                     .after("<div class='mt7 mb7 self-stretch'>\
              //                                 <div class='green tc db f4 mt4 flex flex-column'>\
              //                                     <i class='fa fa-thumbs-up f-headline'></i> \
              //                                     <div class='mt4 mb4 text-grey'>\
              //                                         Message was successfully sent.\
              //                                     </div>\
              //                                 </div>\
              //                             </div>")

              //                     if (typeof window !== 'undefined') {
              //                         window.scrollTo(0,0);
              //                     }

              //                     // Reset recaptcha
              //                     grecaptcha.reset();

              //                 },
              //                 error: function(data) {

              //                     submitButton.val("Submit");
              //                     submitButton.attr("disabled", false);

              //                     var errors = (data.responseJSON && data.responseJSON.errors);
              //                     var errorMsg = "";

              //                     errors && errors.forEach((error) => {
              //                         errorMsg = errorMsg + "<div class='mb2'><i class='icon fa-times-circle mr1'></i> <span>" + error.msg + "</span> </div> "
              //                     })

              //                     contactForm.append("<div class='red db f4 mt6 flex flex-column items-start flex-100'>" + errorMsg + "</div>");

              //                     // Reset recaptcha
              //                     grecaptcha.reset();

              //                 }
              //             });
              //         }
              //     `}
              //     </script>
              }

          </Helmet>

          {children}

        </>
      )
    }

}

DefaultLayout.defaultProps = {
    bodyClass: `bg-white`,
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,

}

export default DefaultLayout
