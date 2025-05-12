import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch test endpoint
    axios.get(`${process.env.REACT_APP_API_URL}/api/test`)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(err => {
        console.error('Error fetching test endpoint:', err);
        setError('Failed to connect to backend');
      });
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Ridit Advertising</h1>
      {message && <p>Backend says: {message}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}

export default App;