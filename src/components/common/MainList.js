import React from 'react';
import Lnb from "./Lnb";
import WebtoonList from "../list/WebtoonList";


const MainList = (props) => (
    <div className="main_list">
        <Lnb list={props.lnbList} />
        <WebtoonList list={props.list} />
    </div>
);

export default MainList;