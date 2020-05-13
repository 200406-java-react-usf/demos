import React, { useState } from 'react';

import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';

import { User } from './models/user';

function App() {

  // @ts-ignore
  const [authUser, setAuthUser] = useState(null as User);

  return (
    <>
      <LoginComponent authUser={authUser} setAuthUser={setAuthUser} />
      <HomeComponent username={authUser?.username} />
    </>
  );
}

export default App;
