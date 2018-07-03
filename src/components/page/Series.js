import React, { Component } from "react";
import axios from 'axios';
import _ from 'lodash';

import MainList from "../common/MainList";

const menus = [
    {
        name : 'mon',
        text : '월',
    },
    {
        name : 'tue',
        text : '화',
    },
    {
        name : 'wed',
        text : '수',
    },
    {
        name : 'thu',
        text : '목',
    },
    {
        name : 'fri',
        text : '금',
    },
    {
        name : 'sat',
        text : '토',
    },
    {
        name : 'sun',
        text : '일',
    }
];

class Series extends Component {
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
            <div id="series">
                <div className="bg_gnb" style={{backgroundColor:'#f00'}}></div>
                <MainList lnbList={menus} list={this.state.list} />
            </div>
        );
    }
}

export default Series;
