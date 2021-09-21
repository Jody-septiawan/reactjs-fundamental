import React from 'react';

//Import Components
import List from './components/list';

function Props() {
  const car = {
    listData: 'Ferrari',
    color: 'red',
  };
  return (
    // Code Inside div
    <div>
      <p>On the image element using the default props, namely src</p>
      <img
        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDE2Njh8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNjMyMTk2MTg4&ixlib=rb-1.2.1&q=80&w=400"
        alt="image"
      />

      <List listData="MBW" color="red" />
      <List listData="Mercedes-Benz" color="black" />
      <List listData="Lamborghini" color="blue" />
      {/* <List car={car} /> */}
    </div>
  );
}

export default Props;
