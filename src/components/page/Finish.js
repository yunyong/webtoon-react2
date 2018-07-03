import React, { Component } from "react";
import axios from 'axios';
import _ from 'lodash';

import MainList from "../common/MainList";

const menus = [
    {
        name : 'must',
        text : '필독'
    },
    {
        name : 'all',
        text : '전체'
    }
];

class Finish extends Component {
    constructor(){
        super();
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        this._getData();
    }

    _getData(){
        const apiUrl = '/api/webtoons/?size=200';
        axios.get(apiUrl)
            .then(res => {
                this.setState({
                    list : _.sampleSize(res.data, 10)
                })
            })
            .catch(e => {
                console.log(e)
            })

    }

    render() {
        return (
            <div id="finish">
                <div className="bg_gnb" style={{backgroundColor:'blue'}}></div>
                <MainList lnbList={menus} list={this.state.list} />
            </div>
        );
    }
}

export default Finish;
