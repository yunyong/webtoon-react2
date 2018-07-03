import React, {Component} from 'react';
import {Link} from "react-router-dom";


class WebtoonList extends Component {
    render(){
        const webtoonInfo = this.props.list.map((webtoon) => (
            <li key={webtoon.id}>
                <Link to={`/webtoon/view/${webtoon.id}`} className="link_webtoon">
                    <div className="desc_webtoon">
                        <strong className="tit_webtoon">{webtoon.title}</strong>
                        <span className="txt_artist">윤태호</span>
                    </div>
                    <div className="img_webtoon">
                        <img src={webtoon.images.appThumbnailImage?webtoon.images.appThumbnailImage.url :''} className="img_thumb" alt="" />
                    </div>
                </Link>
            </li>
        ));
        return (
            <ul className="list_webtoon">
                {webtoonInfo}
            </ul>
        )

    }

}

export default WebtoonList;