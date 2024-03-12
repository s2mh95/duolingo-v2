import React, { Suspense } from 'react';
import FallBack from './fallback';


// Function that returns a promise to load the leaderboard component
const loadLeaderboard = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      resolve();
    }, 2000); // Simulating a 2-second delay
  });
};

const Leaderboard = React.lazy(() => loadLeaderboard().then(() => import('./ActualLeaderboard')));

const SuspenseLeaderboard = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Leaderboard />
    </Suspense>
  );
};

export default SuspenseLeaderboard;