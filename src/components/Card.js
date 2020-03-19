import React, { Component } from 'react';
import "./css/card.css";

class Card extends Component {
    state = {}
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="row">
                    <div class="col-sm">

                    </div>
                    <div class="col-sm middle">
                        <h1 class="display-4 " style={{ fontFamily: 'Archivo Black, sans-serif', color: "#35B829" }}>MAKYUR</h1>
                        <p class="lead" style={{ fontFamily: 'roboto' }}>Pusat belanja Sayur paling lengkap dan murah</p>
                    </div>
                    <div class="col-sm">
                    </div>
                </div>

            </div >
        );
    }
}

export default Card;