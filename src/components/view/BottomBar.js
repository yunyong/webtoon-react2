import React from "react";

const BottomBar = props => (
    <div id="bottomBar">
        <button onClick={ props.toggleOrderList }>{ props.order === 'desc' ? '최신순' : '등록순' }</button>
    </div>
)

export default BottomBar;