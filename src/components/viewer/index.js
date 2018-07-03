import React, {Component} from 'react';
import axios from 'axios';
import ImageView from "./ImageView";
import Adfit from "../ad/Adfit";
import NavButtons from "./NavButtons";

class Viewer extends Component {
    constructor(props){
        super(props);
        this.state = {
            episode : {
                id : 0
            },
            showBar : true
        };

        this._scrollAction = this._scrollAction.bind(this);
        this._toggleAction = this._toggleAction.bind(this);
    }

    componentDidMount(){
        this._getData();
        window.addEventListener('scroll', this._scrollAction);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this._scrollAction);
    }

    _getData(){
        const apiUrl = `/api/webtoon_episodes/${this.props.match.params.episodeId}`;
        axios.get(apiUrl)
            .then(res => {
                console.log(res.data)
                this.setState({
                    episode : res.data
                });
            })
            .catch(e => {
                console.log(e)
            })
    }

    _scrollAction(){
        if(window.scrollY < 40 || window.scrollY + window.innerHeight + 100 > document.body.clientHeight){
            this.setState({
                showBar : true
            })
        } else {
            this.setState({
                showBar : false
            })
        }
    }

    _toggleAction(){
        const showBar = this.state.showBar;
        if(window.scrollY < 40 || window.scrollY + window.innerHeight + 100 > document.body.clientHeight){
            this.setState({
                showBar : true
            })
        } else {
            this.setState({
                showBar : !showBar
            })
        }
    }

    render() {
        const episode = this.state.episode;
        return (
            <div id="viewer">
                <div className={this.state.showBar ? 'tit_episode on' : 'tit_episode'}>{episode.title}</div>
                {(episode.id > 0) && (
                    <div>
                        <ImageView images={episode.webtoonEpisodeImages} toggleAction={this._toggleAction} />
                    </div>
                )}
                <Adfit />
                <NavButtons
                    prevEpisodeId={episode.id}
                    newxtEpisodeId={episode.id}
                    showBar={this.state.showBar}
                />
            </div>
        );
    }
}

export default Viewer;