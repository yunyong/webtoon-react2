import React from "react";
import {Link} from "react-router-dom";

const NavButtons = props => (
    <div className={props.showBar ? 'nav_btns on' : 'nav_btns'}>
        <Link to={`/webtoon/viewer/${props.prevEpisodeId}`}>이전화</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={`/webtoon/viewer/${props.nextEpisodeId}`}>다음화</Link>
    </div>
)

export default NavButtons;