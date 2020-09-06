import React from 'react';
import { Formik } from 'formik';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUser, faUnlockAlt, faEnvelope, faMapMarkerAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../connexion.css'; // Tell webpack that Button.js uses these styles

class header extends React.Component {

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }

    render() {


        library.add(
            faUserCircle,
            faUser,
            faUnlockAlt,
            faEnvelope,
            faMapMarkerAlt,
            faMobileAlt
        );
        const MY_API = 'AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk'
        let _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=43.564706, 1.480144`

        return (
            <div className="contact" id="contact">
                <div className="ctnContact">
                    <div className="contactBox sendMsg">
                        <div className="titleCompetences2">
                            Me contacter
                        </div>
                        <form className="boxForm" action="">
                            <input className="nom np" id="nom" type="text" placeholder="Nom" name="nom" />
                            <input className="prenom np" id="prenom" type="text" placeholder="Prenom" name="prenom" />
                            <input className="mail" id="Mail" type="text" placeholder="Mail" name="Mail" />
                            <textarea  name="message" placeholder="Votre message..."/>
                            <input className="send" type="submit" value="Envoyer" />
                            <FontAwesomeIcon className="img-user icoForm" icon={['fas', 'user']} />
                            <FontAwesomeIcon className="img-user2 icoForm" icon={['fas', 'user']} />
                            <FontAwesomeIcon className="icoForm img-env" icon={['fas', 'envelope']} />
                        </form>
                    </div>
                    <div className="contactBox maps">
                        <div className="ctnBox">
                            <div className="info-perso">
                                <FontAwesomeIcon className="ico-maps" icon={['fas', 'map-marker-alt']} />
                                Toulouse, France
                            </div>
                            <div className="info-perso">
                                <FontAwesomeIcon className="ico-maps" icon={['fas', 'mobile-alt']} />
                                06 12 10 05 72
                            </div>
                            <div className="info-perso">
                                <FontAwesomeIcon className="ico-maps" icon={['fas', 'envelope']} />
                                Gwendal.LeFloch82@gmail.com
                            </div>
                            <div className="ctnIframe">
                                <iframe frameBorder="0" style={{ width: "100%", height: "100%"}} 
                                    src={_url}>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(true);
         }, 400);



const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "gwendal.lefloch82@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);


         let donnees = JSON.stringify(values);
         alert(donnees);

       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
            </div>
        )  
    }
}
export default header;