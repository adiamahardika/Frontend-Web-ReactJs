import React, { Component } from 'react';
import "./css/card.css";

class Card extends Component {
    state = {}
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="row">
                    <div class="col-sm middle">
                        <h1 class="display-4">SOLUSI MUDAH <br/>HIDUP SEHAT</h1>
                        <p class='slogan'>#MakYurKuy</p>
                    </div>
                </div>

            </div >
        );
    }
}

export default Card;