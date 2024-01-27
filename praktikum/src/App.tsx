import React, { useState } from 'react';
import Login from './component/Login';
import Register from './component/Register';

const App: React.FC = () => {
  const [isLogin, setIsLogin2] = useState(true);

  const handleSwitchMode = () => {
    setIsLogin2(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login RegisterClick={handleSwitchMode} />
      ) : (
        <Register LoginClick={handleSwitchMode} />
      )}
    </div>
  );
};

export default App;