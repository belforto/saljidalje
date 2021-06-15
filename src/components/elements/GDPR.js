import React from 'react'
import CookieNotice from '@mirzalikic/react-cookie-notice';



export default function GDPR() {

  //  consentGrantedAll=() =>{
  //   console.log("gtm update granted",isConsentGranted)
  //   gtag('consent', 'update', {
  //     'ad_storage': 'granted',
  //     'analytics_storage': 'granted',
  //     'functionality_storage': 'granted',
  //   'personalization_storage': 'granted',
  //   'security_storage': 'granted'
  //   });
  // }
  return (
    <div>
     <CookieNotice
    onSave={(cookies) => {
        console.log(cookies);
        // consentGrantedAll();
    }}
    onInit={(cookies) => {
        console.log(cookies);
    }}
    acceptAllButtonText="Accept"
    cookiePrefix="my-cookie-"
    cookies={[
        { name: 'necessary', checked: true, editable: false, default: true, title: 'Essential', text: 'Essential cookies enable basic functions and are necessary for the proper function of the website. The website cannot function properly without these cookies.' },
        { name: 'marketing', checked: false, editable: true, title: 'Marketing', text: 'Marketing cookies are used to track visitors across websites. They are used by third-party advertisers or publishers to display personalized ads.' },
        { name: 'test', checked: false, editable: true, title: 'Title', text: 'Lorem ipsum dolor sit amet.' }
    ]}>
    <h3>This website uses cookies</h3>
    <p>We use cookies that help the website to function and also to track how you interact with it. We will only use the cookies if you consent to it by clicking on "Accept all cookies". You can also manage individual cookie preferences.</p>
</CookieNotice>
    </div>
  )
}
