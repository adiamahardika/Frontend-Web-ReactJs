import React, { Component } from 'react';
import "./css/footer.css";
import hp from '../images/logo.jpeg'
import shop from '../images/shop.png'
import purchase from '../images/purchase.png'
import work from '../images/work.png'

class Footer extends Component {
    state = {}
    render() {
        return (
            <div id="about" style={{ textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'Baloo Chettan 2, cursive;' }}>About</h1>
                <div class="row">
                    <div class="col hello">
                        <div class="row">
                            <div class="col">
                                <div className="about">
                                    <div className="images">
                                        <img class="imglul1" src="https://image.flaticon.com/icons/svg/1147/1147832.svg" />
                                    </div>
                                    <div className="text2">
                                        <b> <text className="text" style={{ fontSize: '18px' }}>Langsung dari sumbernya</text></b>
                                    </div>
                                </div>
                                <div className="about">
                                    <div className="images2">
                                        <img class="imglul1" src="https://image.flaticon.com/icons/svg/1611/1611882.svg" />
                                    </div>
                                    <div className="text2">
                                        <b>   <text className="text" style={{ fontSize: '18px' }}>Pembayaran mudah</text> </b>
                                    </div>
                                </div>

                            </div>
                            <div class="col">
                                <div className="about">
                                    <div className="images2">
                                        <img class="imglul1" src={work} />
                                    </div>
                                    <div className="text2">
                                        <b> <text className="text" style={{ fontSize: '18px' }}>Pesan langsung datang</text> </b>
                                    </div>
                                </div>
                                <div className="about">
                                    <div className="images2">
                                        <img class="imglul1" src="https://image.flaticon.com/icons/svg/610/610326.svg" />
                                    </div>
                                    <div className="text2">
                                        <b><text className="text" style={{ fontSize: '18px' }}>Tepat Waktu</text> </b>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="col ss">
                        <img class="imglul" src={hp} />
                    </div>
                </div>
            </div >
        );
    }
}

export default Footer;