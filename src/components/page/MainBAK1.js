import React, { Component } from "react";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import Top from "./Top";
import Series from "./Series";
import Gnb from "../common/Gnb";
import Finish from "./Finish";
import Gidamoo from "./Gidamoo";
import TopContent from "../common/TopContent";
import $ from 'jquery';

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
        console.log($('#top'))
    }

    _goPage(page){
        this.slider.slickGoTo(page);
    }

    render() {
        const settings = {
            dots : false,
            arrows : false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight : true,
            afterChange : (e, page) => {
                console.log(e)
                console.log(page)
                this._goTop();
            },


            scrolling : true,
            vertical: false,
            verticalSwiping: false,
            swiping : false,
            touchThreshold : 4,
        };
        return (
            <div className="daum_wrap" style={{height:this.state.height}}>
                <TopContent />
                <Gnb goPage={this._goPage} />
                <div className="wrap_main">
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
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
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Main;
