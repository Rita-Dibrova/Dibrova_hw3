import React from 'react';

export function List (props) {
  const names = props.names;
  const listItems = names.map((name, index) =>
    <li key={index}>
      {name}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
