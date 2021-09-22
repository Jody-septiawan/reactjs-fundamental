import React, { useState } from 'react';

// Pages
import GuestPage from './pages/GuestPage';
import PrivatePage from './pages/PrivatePage';

// Components
import Navbar from './components/Navbar';

// Image
import Img from './assets/img.jpg';

function ConditionRenderin() {
  //init State
  const [isLoggedin, setIsLoggedin] = useState(false);
  console.log(isLoggedin);

  // if (isLoggedin) {
  //   return <PrivatePage logout={() => setIsLoggedin(!isLoggedin)} />;
  // } else {
  //   return <GuestPage login={() => setIsLoggedin(!isLoggedin)} />;
  // }

  return (
    // Code Inside div
    <div>
      {/* conditional logic rendering */}
      <Navbar />
      <img src={Img} alt="" style={{ width: '230px' }} />
      {isLoggedin ? (
        <PrivatePage logout={() => setIsLoggedin(!isLoggedin)} />
      ) : (
        <GuestPage login={() => setIsLoggedin(!isLoggedin)} />
      )}
    </div>
  );
}

export default ConditionRenderin;
