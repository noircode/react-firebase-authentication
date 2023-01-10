import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login');
  };

  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      navigate('/');
    }

    if (!authToken) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <button type="button" onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Home;
