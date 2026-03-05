import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function App() {
  const [status, setStatus] = useState('Checking backend status...');

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.message || 'Backend is reachable');
      })
      .catch(() => {
        setStatus('Backend not reachable yet. Start backend to test API connection.');
      });
  }, []);

  return (
    <main className="container">
      <h1>MERN Stack Starter</h1>
      <p>Frontend: React + Vite</p>
      <p>Backend: Express + MongoDB</p>
      <p className="status">{status}</p>
    </main>
  );
}
