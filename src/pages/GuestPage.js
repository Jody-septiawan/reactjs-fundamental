import React from 'react';

export default function GuestPage(props) {
  return (
    <div>
      <h1>Please sign in</h1>
      <button onClick={props.login}>Login</button>
    </div>
  );
}
