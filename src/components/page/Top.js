import React, { Component } from "react";
import Adfit from "../ad/Adfit";

class Top extends Component {
    render() {
        return (
            <div id="top">
                <div className="bg_gnb" style={{backgroundColor:'brown'}}></div>
                <Adfit />
                <div style={{height:1000,background:'black'}}>dd</div>
            </div>
        );
    }
}

export default Top;
