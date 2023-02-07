import React from "react";

function renderTree(nestedData) {
  return (
    <ul>
      {nestedData.map(item => (
        <li key={item.id}>
          {item.name}
          {item.children.length > 0 && renderTree(item.children)}
        </li>
      ))}
    </ul>
  );
}

function TreeMenu(props) {
  const { nestedData } = props;
  return (
    <div className="mainmenu">
      {renderTree(nestedData)}
    </div>
  );
}

export default TreeMenu;