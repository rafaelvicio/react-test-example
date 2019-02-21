import React from 'react';

const Home = ({ username, tasks }) => (
  <div>
    <p>Welcome, {username}!</p>
    <ul>
      {tasks && tasks.map((t, idx) => <li key={idx}>{t}</li>)}
    </ul>
  </div>
)

export default Home