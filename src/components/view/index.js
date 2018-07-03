import React, {Component} from 'react';
import axios from 'axios';
import WebtoonHomeContent from "./WebtoonHomeContent";
import WebtoonInfo from "./WebtoonInfo";
import EpisodeList from "./EpisodeList";
import PayOptionBar from "./PayOptionBar";
import BottomBar from "./BottomBar";
import PaySizeBar from "./PaySizeBar";
import {connect} from "react-redux";

class View extends Component {
    constructor(props){
        super(props);
        this.state = {
            webtoon : {
                id : 0
            },
            selectedEpisode : [],
            episodeList : [],
            order : 'asc'
        };

        this._selectEpisode = this._selectEpisode.bind(this);
        this._selectAllPayEpisodes = this._selectAllPayEpisodes.bind(this);
        this._clearEpisode = this._clearEpisode.bind(this);
        this._toggleOrderList = this._toggleOrderList.bind(this);
    }

    componentDidMount(){
        this._getData();
    }

    _getData(){
        const apiUrl = `/api/webtoons/${this.props.match.params.webtoonId}`;
        axios.get(apiUrl)
            .then(res => {
                let allEpisodes = [];

                res.data.seasons.forEach((s) => {
                    s.webtoonEpisodes.forEach((episode) => {
                        allEpisodes.push(episode);
                    });
                });

                this.setState({
                    webtoon : res.data,
                    episodeList : allEpisodes
                });
            })
            .catch(e => {
                console.log(e)
            })
    }

    _selectEpisode(e, episodeId){
        e.preventDefault();

        let newList = [];

        if(this.state.selectedEpisode.indexOf(episodeId) > -1){
            newList = this.state.selectedEpisode.filter((id) => id !== episodeId);
        } else {
            newList = [...this.state.selectedEpisode, episodeId];
        };

        this.setState({
            selectedEpisode : newList
        });
    }

    _selectAllPayEpisodes(){
        let allPayEpisodes = [];

        this.state.episodeList.forEach((episode) => {
            if(episode.products && episode.products.length > 0) {
                allPayEpisodes.push(episode.id);
            };
        });

        this.setState({
            selectedEpisode : allPayEpisodes
        });
    }

    _clearEpisode(){
        this.setState({
            selectedEpisode : []
        });
    }

    _toggleOrderList(){
        this.setState({
            episodeList : [...this.state.episodeList].reverse(),
            order : this.state.order === 'desc' ? 'asc' : 'desc'
        });
    }

    render() {
        const webtoon = this.state.webtoon;
        return (
            <div id="view">
                {(webtoon.id > 0) && (
                    <div>
                        <PayOptionBar
                            episodeSize={this.state.selectedEpisode.length}
                            clearAction={this._clearEpisode}
                            selectAction={this._selectAllPayEpisodes}
                        />
                        <WebtoonHomeContent data={webtoon.webtoonHomeContents} />
                        <WebtoonInfo data={webtoon} />
                        <EpisodeList
                            episodeList={this.state.episodeList}
                            selectedEpisode={this.state.selectedEpisode}
                            selectEpisode={this._selectEpisode}
                        />
                        <BottomBar order={this.state.order} toggleOrderList={this._toggleOrderList} />
                        <PaySizeBar size={this.state.selectedEpisode.length} />
                    </div>
                )}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        user : state
    }
}

View = connect(mapStateToProps)(View);

export default View;