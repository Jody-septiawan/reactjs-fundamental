// code Here
import React from 'react';

function List(props) {
  //   const { listData, color } = props;

  console.log(props);

  return (
    <div>
      <h1>{props.listData}</h1>
      <h5>{props.color}</h5>
    </div>
  );
}

export default List;
