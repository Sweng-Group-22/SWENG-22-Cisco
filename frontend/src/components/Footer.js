import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'

export default function Footer(){

    return(
      <> 
        <div className='container'>
          <div className='content'>
            {/* row 1 */}
            <div className='row'>
              <div className='button-group-1'>
                <a className='twitter' href="https://twitter.com/webex" >
                  <FontAwesomeIcon icon={faTwitter}/>
                </a>

                <a className='linkedin' href="https://www.linkedin.com/company/webex?original_referer=https%3A%2F%2Fwww.webex.com%2F" >
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>

                <a className='facebook' href="https://www.facebook.com/webex" >
                  <FontAwesomeIcon icon={faFacebook}/>
                </a>

                <a className='youtube' href="https://www.youtube.com/c/webex" >
                  <FontAwesomeIcon icon={faYoutube}/>
                </a>

                <a className='instagram' href="https://www.instagram.com/webex/" >
                  <FontAwesomeIcon icon={faInstagram}/>
                </a>
              </div>

            </div>

            <hr/> {/* The Thematic Break (Horizontal Rule) element. */}
            
            {/*row 2 */}
            <div className='row2'>
              <div className='copyright'>
                &copy; {new Date().getFullYear()} Cisco and/or its affiliates. All Rights Reserved.
              </div>

              <div className='button-group-2'>
                <a type='button' className='TermsAndConditions' href="https://www.cisco.com/c/en/us/about/legal/terms-conditions.html">
                  Terms and Conditions
                </a>
  
                <a type='button' className='PrivacyStatement' href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html">
                  Privacy Statement
                </a>
  
                <a type='button' className='Cookies' href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies">
                  Cookies
                </a>
              </div>

            </div>
          </div>
        </div>
      </>
    )
}