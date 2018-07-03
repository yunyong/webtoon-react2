import React from 'react';

const Lnb = (props) => {
    var list = props.list || []
    const listItems = list.map((key) =>
        <li key={key.name}>{key.text}</li>
    );
    return (
        <div className="lnb">
            <ul>
            {listItems}
            </ul>
        </div>
    );
};

export default Lnb;