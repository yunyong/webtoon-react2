import React from "react";

const PayOptionBar = props => (
    <div id="payOptionBar" className={props.episodeSize > 0 ? 'on' : 'off'}>
        <button onClick={props.selectAction}>전체선택</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={props.clearAction}>닫기</button>
    </div>
)

export default PayOptionBar;