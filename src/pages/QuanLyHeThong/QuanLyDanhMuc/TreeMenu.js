import React from 'react';

function renderTree({nestedData, callData}) {
    return (
        <ul>
            {nestedData.map((item) => (
                <li key={item.order}>
                    {item.children.length === 0 ? <a href={item.id} >{`${item.order} - ${item.name}`}</a> : item.name}
                    {item.children.length > 0 && renderTree(item.children)}
                </li>
            ))}
        </ul>
    );
}

function TreeMenu(props) {
    const { nestedData } = props;
    return <div className="mainmenu">{renderTree(nestedData)}</div>;
}

export default TreeMenu;
