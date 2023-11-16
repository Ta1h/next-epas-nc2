"use client";
import React, { useState, useEffect } from 'react';

const Score = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchTopScores = async () => {
      try {
        const response = await fetch('https://docs.google.com/document/d/18ixFFSB_ugfBkUUU0u-A8Zx4dELUczCT/edit?usp=sharing&ouid=108434064786345919678&rtpof=true&sd=true'); // Update the API endpoint accordingly

        if (response.ok) {
          const data = await response.json();
          setScores(data); // Assuming your API returns an array of scores
        } else {
          console.error('Failed to fetch scores. Status:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTopScores();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <main className="p-10">
      <div className="flex justify-center font-semibold text-2xl pb-10">
        TOP SCORES
      </div>

      <div>
        <ul>
          {scores.map((score, index) => (
            <li key={index}>{score}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Score;
