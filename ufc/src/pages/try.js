

import { useState, useEffect } from 'react';

function FightersPage() {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    async function fetchFighters() {
      try {
        const res = await fetch('/api/fighters');
        const data = await res.json();
        setFighters(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFighters();
  }, []);

  return (
    <div>
      <h1>Fighters List</h1>
      <ul>
        {fighters.map((fighter) => (
          <li key={fighter._id}>
            {fighter.name} - {fighter.weight}, {fighter.country}, {fighter.coordinates}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FightersPage;
