import React from "react";

const WebtoonInfo = props => (
    <div id="webtoonInfo">
        <strong className="tit_webtoon">{props.data.title}</strong>
        <span className="txt_artist">{props.data.artists[0].penName}</span>
    </div>
)

export default WebtoonInfo;