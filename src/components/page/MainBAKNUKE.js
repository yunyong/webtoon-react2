import React, { Component } from "react";


import Carousel from 'nuka-carousel';

import Top from "./Top";
import Series from "./Series";
import Gnb from "../common/Gnb";
import Finish from "./Finish";
import Gidamoo from "./Gidamoo";

class Main extends Component {
    constructor(){
        super();
        this.state = {
            height : 'auto'
        }

        this._goPage = this._goPage.bind(this);
    }

    _setHeight(e){
    }

    _goTop(){
        window.scrollTo(0,0);
    }

    _goPage(page){
        this.slider.slickGoTo(page);
    }

    render() {
        return (
            <div className="daum_wrap" style={{height:this.state.height}}>
                <Gnb goPage={this._goPage} />
                <div className="wrap_main">
                    <Carousel vertical={false} wrapAround={true} heightMode="current">
                        <div className="inner_main">
                            <Top />
                        </div>
                        <div className="inner_main">
                            <Series />
                        </div>
                        <div className="inner_main">
                            <Finish />
                        </div>
                        <div className="inner_main">
                            <Gidamoo />
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Main;
