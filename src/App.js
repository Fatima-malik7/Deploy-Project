// import React from 'react';
import LoginScreen from './pages/LoginScreen';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <main>
        <LoginScreen />
      </main>
    </UserProvider>
  );
};

export default App;
