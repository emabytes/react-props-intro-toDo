import React from 'react';

const Item = (props) => {
    return (
        <div className="wrap">
            <img src={props.source1} alt="" />
            <h3 className={props.status}>{props.task}</h3>
            <img src={props.source2} alt="" />
        </div>
    );
}

export default Item;