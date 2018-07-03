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
            height : 'auto',
            pageNum : 0,
            swiping : false,
            opacity : 1,
            topContentClass : ''
        }

        this.clientX = 0;
        this.clientY = 0;

        this._goPage = this._goPage.bind(this);
        this._preventTouch = this._preventTouch.bind(this)
        this._touchStart = this._touchStart.bind(this)
    }

    componentDidMount(){
        window.addEventListener('touchstart', this._touchStart);
        window.addEventListener('touchmove', this._preventTouch, {passive: false});
    }

    componentWillUnmount(){
        window.removeEventListener('touchstart', this._touchStart);
        window.removeEventListener('touchmove', this._preventTouch, {passive: false});
    }

    _touchStart(e){
        this.firstClientX = e.touches[0].clientX;
        this.firstClientY = e.touches[0].clientY;
    }

    _preventTouch(e){
        this.clientX = e.touches[0].clientX - this.firstClientX;
        this.clientY = e.touches[0].clientY - this.firstClientY;

        this.setState({
            opacity : (100 - ((Math.abs(this.clientX)/(window.innerWidth/5)*100)))/100,
            topContentClass : ''
        })

        if(Math.abs(this.clientX)>5){
            e.preventDefault();
            e.returnValue = false;
            return false;
        }
    }

    _goPage(page){
        if(page !== this.state.pageNum) {
            this.setState({
                opacity: 0,
                topContentClass: ''
            })
            this.slider.slickGoTo(page);
        };
    }

    _setPage(page){
        this.setState({
            pageNum : page,
            swiping : false,
            opacity : 1,
            topContentClass : ''
        });
        window.scrollTo(0,0);
        this.setState({
            topContentClass : 'on'
        });
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
            beforeChange : (page, newPage) => {
                this._setPage(newPage)
            },
            scrolling : true,
            vertical: false,
            verticalSwiping: false,
        };
        return (
            <div className="daum_wrap" style={{height:this.state.height}}>
                <Gnb goPage={this._goPage} pageNum={this.state.pageNum} />
                <div className="wrap_main">
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        <div className="inner_main">
                            <TopContent tab="top" currentPage={this.state.pageNum===0} opacity={this.state.opacity} topContentClass={this.state.topContentClass} />
                            <Top />
                        </div>
                        <div className="inner_main">
                            <TopContent tab="series" currentPage={this.state.pageNum===1} opacity={this.state.opacity} topContentClass={this.state.topContentClass} />
                            <Series />
                        </div>
                        <div className="inner_main">
                            <TopContent tab="finish" currentPage={this.state.pageNum===2} opacity={this.state.opacity} topContentClass={this.state.topContentClass} />
                            <Finish />
                        </div>
                        <div className="inner_main">
                            <TopContent tab="gidamoo" currentPage={this.state.pageNum===3} opacity={this.state.opacity} topContentClass={this.state.topContentClass} />
                            <Gidamoo />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Main;
