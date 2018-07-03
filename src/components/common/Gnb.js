import React from 'react';

const Gnb = (props) => (
    <div className="gnb">
        <div className="inner_gnb">
            <a onClick={()=>props.goPage(0)} className={props.pageNum === 0 ? 'on' : ''}>TOP</a>
            <a onClick={()=>props.goPage(1)} className={props.pageNum === 1 ? 'on' : ''}>연재</a>
            <a onClick={()=>props.goPage(2)} className={props.pageNum === 2 ? 'on' : ''}>완결</a>
            <a onClick={()=>props.goPage(3)} className={props.pageNum === 3 ? 'on' : ''}>기다무</a>
        </div>
    </div>
);

export default Gnb;