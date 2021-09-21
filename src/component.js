import React from 'react';
import Header from './components/header';

function Component() {
  return (
    //   Code Here
    <div>
      <Header />
      <Content />
    </div>
  );
}

// Create a new component here
function Content() {
  return (
    <div>
      <h1>This is A content</h1>
      <button>Click me</button>
    </div>
  );
}

export default Component;
