import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LandingPage.css';

const LandingPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await axios.post('http://localhost:3001/api/users/register', { username });
    navigate(`/game?userId=${response.data._id}`);
  };

  return (
    <div className="landing-container">
      <h1>Welcome to Globetrotter!</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleRegister}>Start Game</button>
    </div>
  );
};

export default LandingPage;