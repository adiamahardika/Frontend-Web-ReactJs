import React, { Component } from 'react';
import "./css/contact.css";
import Gplay from '../images/Gplay.png'
import Logo from '../images/logo-makyur-03.png'


class Contact extends Component {
    state = {}
    render() {
        return (
            <div style={{ textAlign: 'center', backgroundColor: '#35B829', height: '100%', padding: 20 }}>
                <div className="container">
                    <div class="row text-center">
                        <div class="col textFooter">
                            <h3 class="footerText">Download</h3>
                            <hr />
                            <img class="imageFooter" src={Gplay} style={{ width: '200px' }} />
                        </div>
                        <div class="col">
                            <img class="imageFooter" src={Logo} style={{ width: '200px' }} />
                        </div>
                        <div class="col textFooter">
                            <h3 class="footerText">Follow Us</h3>
                            <hr />
                            <div style={{ padding: '10px' }}>
                                <img class="imageFooter" src='https://image.flaticon.com/icons/svg/1384/1384015.svg' style={{ width: '40px' }} />
                                <img class="imageFooter" src=' https://image.flaticon.com/icons/svg/1384/1384005.svg' style={{ width: '40px', marginLeft: '5px' }} />
                                <img class="imageFooter" src='  https://image.flaticon.com/icons/svg/49/49351.svg' style={{ width: '40px', marginLeft: '5px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;