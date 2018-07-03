import React, { Component } from "react";
import $ from 'jquery';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

class WebtoonHomeContent extends Component {
    constructor(){
        super();
        this.state = {
            position : 0,
            page : 0
        }

        this._scrollStart = this._scrollStart.bind(this);
        this._setPage = this._setPage.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this._scrollStart);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this._scrollStart);
    }

    _scrollStart(){
        this.setState({
            position : $(window).scrollTop()
        });
    }

    _setPage(page){
        this.setState({
            page : page
        })
    }

    render() {
        const settings = {
            dots : false,
            arrows : false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight : true,
            beforeChange : (page, newPage) => {
                console.log(newPage)
                this._setPage(newPage);
            },
            scrolling : true,
            vertical: false,
            verticalSwiping: false,
        };

        const content = this.props.data.map((c) => (
            <div key={c.id} className="wrap_cont">
                {(c.content.contentType === 'image') && (
                    <div className="cont_img">
                        <div className="bg_top" style={{
                            backgroundImage : `url(${c.content.image.backgroundImage.url})`,
                            backgroundPosition : `50% -${this.state.position/10}px`
                        }}></div>
                    </div>
                )}
                {(c.content.contentType === 'quotation') && (
                    <div className="cont_txt">
                        <p className="desc_txt">{c.content.quotation.text}</p>
                    </div>
                )}
            </div>
        ))

        const imgContent = this.props.data.map((c, index) => {
            if(this.state.page === 0){
                return (
                    <div key={index} className="wrap_cont_img" style={{
                        }}>
                            {(c.content.contentType === 'image') && (
                                <img src={c.content.image.thumbnailImage.url} className="img_top" alt="" style={{
                                    top : this.state.position < 0 ? 0 : `${this.state.position/2}px`,
                                    opacity : (100-(this.state.position))/100
                                }} />
                            )}
                        </div>
                    )
            } else {
                return null;
            }
        })


        return (
            <div id="webtoonHomeContent">
                <div className="bar_top">ddd</div>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                {content}
                </Slider>
                {imgContent}
            </div>
        );
    }
}

export default WebtoonHomeContent;