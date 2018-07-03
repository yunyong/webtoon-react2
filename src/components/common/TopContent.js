import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class TopContent extends Component {
    constructor(props){
        super(props)

        this.state = {
            items : [
                {
                    id : 0
                }
            ],
            item : {
                id : 0
            },
        }
    }

    componentDidMount(){
        this._getData();
    }

    componentDidUpdate(prevProps) {
        if ((this.props.topContentClass !== prevProps.topContentClass) && this.props.topContentClass === 'on') {
            this.setState({
                item : _.sample(this.state.items),
            })
            clearTimeout(this.timer);
        }
    }

    _getData(){
        let apiUrl;

        if(this.props.tab === 'top'){
            apiUrl = '/api/features/2';
        } else if(this.props.tab === 'series'){
            apiUrl = '/api/features/1';
        } else if(this.props.tab === 'finish'){
            apiUrl = '/api/features/3';
        } else if(this.props.tab === 'gidamoo'){
            apiUrl = '/api/features/11';
        }

        axios.get(apiUrl)
            .then(res => {
                this.setState({
                    items : res.data.items,
                    item : _.sample(res.data.items)
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        const topContentClass = `top_content ${this.props.topContentClass}`;
        const item = this.state.item;

        return (
            <div className={topContentClass} style={{opacity:this.props.opacity}}>
                { (item.id > 0) && (
                    <div>
                        { (this.props.currentPage) && (
                            <div>
                                <strong className="tit_data">{item.data.title}</strong>
                                <span className="txt_data">{item.data.subTitle}</span>
                                <img src={item.data.firstImage.url} alt="" className="img_top" />
                                <img src={item.data.image.url} alt="" className="img_top" onLoad={this._hideImg} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default TopContent;