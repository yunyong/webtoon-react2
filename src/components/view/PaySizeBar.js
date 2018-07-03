import React from "react";

const PaySizeBar = props => (
    <div id="paySizeBar" className={props.size > 0 ? 'on' : 'off'}>
        {props.size > 0 ? `${props.size}개 선택` : ''}
    </div>
)

export default PaySizeBar;