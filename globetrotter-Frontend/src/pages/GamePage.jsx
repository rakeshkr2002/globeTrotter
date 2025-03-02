import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './GamePage.css';
import ChallengeFriend from '../components/ChallengeFriend';

const GamePage = () => {
  const [clues, setClues] = useState([]);
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [funFact, setFunFact] = useState('');
  const { search } = useLocation();
  const userId = new URLSearchParams(search).get('userId');

  const fetchRandomDestination = () => {
    axios.get('http://localhost:3001/api/destinations/random-destination')
      .then(response => {
        console.log('API Response:', response.data);
        const { clues, options, answer } = response.data;
        setClues(clues);
        setOptions(options);
        setAnswer(answer);
        setFeedback(null);
        setFunFact('');
      })
      .catch(error => {
        console.error('Error fetching destination:', error);
      });
  };

  useEffect(() => {
    fetchRandomDestination();
  }, []);

  useEffect(() => {
    if (feedback && feedback.includes('Correct')) {
      axios.get('http://localhost:3001/api/fun-facts')
        .then(response => setFunFact(response.data.fact))
        .catch(error => console.error('Error fetching fun fact:', error));
    }
  }, [feedback]);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === answer;
    axios.post('http://localhost:3001/api/users/submit-answer', { userId, answer: selectedOption, isCorrect })
      .then(response => {
        setFeedback(isCorrect ? 'Correct! 🎉' : 'Incorrect! 😢');
        setUserScore(response.data.score);
      });
  };


  return (
    <div className="game-container">
      <h1>Globetrotter</h1>
      <div className="clues-container">
        {clues.map((clue, index) => (
          <p key={index}>{clue}</p>
        ))}
      </div>
      <div className="options-container">
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      {feedback && <div className={`feedback ${feedback.includes('Incorrect') ? 'sad-face' : ''}`}>{feedback}</div>}
      <div className="fun-fact">
        {feedback && feedback.includes('Correct') && <p>{funFact}</p>}
      </div>
      <div className="score">Score: {userScore}</div>
      {feedback && feedback.includes('Correct') && <button onClick={fetchRandomDestination}>Next</button>}
      {feedback && feedback.includes('Incorrect') && <button onClick={() => window.location.reload()}>Play Again</button>}
      <ChallengeFriend userId={userId} userScore={userScore} />
    </div>
  );
};

export default GamePage;
