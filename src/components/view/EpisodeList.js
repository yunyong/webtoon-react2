import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import _ from 'lodash';

const EpisodeList = props => {
    const episodeList = props.episodeList;

    return (
        <div id="episodeList">
            <ul className="list_episode">
                { episodeList.map((episode, index) => {
                    const title = episode.title;
                    const img = episode.images.thumbnailImage.url;
                    const isPayWebtoon = episode.products && episode.products.length > 0;

                    let className = 'link_webtoon';
                    if(props.selectedEpisode.indexOf(episode.id) > -1){
                        className += ' on';
                    } else if(props.selectedEpisode.length > 0 && !isPayWebtoon){
                        className += ' off';
                    };

                    return (
                        <li key={index}>
                            <Link to={`/webtoon/viewer/${episode.id}`}
                                  className={className}
                                  onClick={(e) => {
                                      if((isPayWebtoon)){
                                          props.selectEpisode(e, episode.id)
                                      } else if(props.selectedEpisode.length > 0){
                                          e.preventDefault();
                                      };
                                  }}>
                                <img src={img} alt={title} className="img_thumb" />
                                <div className="wrap_episode">
                                    <div className="tit_episode">{title}</div>
                                    {isPayWebtoon ? (
                                        <span className="txt_date" style={{color:'red'}}>200원</span>
                                    ) : (
                                        <span className="txt_date">2018.06.02</span>
                                    )}
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

EpisodeList.propTypes = {
    episodeList : PropTypes.array,
    selectedEpiosde : PropTypes.array,
    selectEpisode : PropTypes.func
}

export default EpisodeList;