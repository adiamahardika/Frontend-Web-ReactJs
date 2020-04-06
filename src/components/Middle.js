import React, { Component } from 'react';
import "./css/middle.css";
import hp from '../images/logo.png'
import work from '../images/work.png'

class Footer extends Component {
    state = {}
    render() {
        return (
            <div id="about" style={{ textAlign: 'center' }}>
                <h1 class="headerMiddle">Keunggulan Kami</h1>
                <div class="row">
                    <div class="col advantages">
                        <div class="row">
                            <div class="col">
                                <div className="about">
                                    <div className="row list">
                                    <div className="col images">
                                        <img class="image" src="https://image.flaticon.com/icons/svg/1147/1147832.svg" />
                                    </div>
                                    <div className="col">
                                        <b> <text className="text">Langsung dari sumbernya</text></b>
                                    </div>
                                    </div>
                                </div>
                                <div className="about">
                                <div className="row list">
                                    <div className="col images">
                                        <img class="image" src="https://image.flaticon.com/icons/svg/1611/1611882.svg" />
                                    </div>
                                    <div className="col">
                                        <b><text className="text">Pembayaran mudah</text> </b>
                                    </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col">
                                <div className="about">
                                <div className="row list">
                                    <div className="col images">
                                        <img class="image" src={work} />
                                    </div>
                                    <div className="col">
                                        <b><text className="text">Pesan langsung datang</text></b>
                                    </div>
                                    </div>
                                </div>
                                <div className="about">
                                <div className="row list">
                                    <div className="col images">
                                        <img class="image" src="https://image.flaticon.com/icons/svg/610/610326.svg" />
                                    </div>
                                    <div className="col">
                                        <b><text className="text">Tepat Waktu</text> </b>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="col phone">
                        <img class="image-phone" src={hp} />
                    </div>
                </div>
            </div >
        );
    }
}

export default Footer;