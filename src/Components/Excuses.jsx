import axios from "axios";
import React, { useEffect, useState } from 'react';
import '../Style/style.css';

const Excuses = () => {
  const [excuse, setExcuse] = useState({});
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const fetchExcuse = async () => {
      try {
        const response = await axios.get('http://localhost:3001/excuses');
        const randomExcuse = response.data[Math.floor(Math.random() * response.data.length)];
        setExcuse(randomExcuse);
        setShowTitle(true);
      } catch (e) {
        console.log("Erreur", e);
      }
    };
    fetchExcuse();
  }, []);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:3001/excuses');
      const randomExcuse = response.data[Math.floor(Math.random() * response.data.length)];
      setExcuse(randomExcuse);
    } catch (e) {
      console.log("Erreur", e);
    }
  }

  return (
      <div className="excuses-container">
        {showTitle && (
            <h1 className="fade-in">Les excuses de dev :</h1>
        )}
        <div className="excuse-item">
          {Object.keys(excuse).map((key) => (
              <p key={key}>
                {key}: {excuse[key]}
              </p>
          ))}
        </div>
        <button className="fade-in" onClick={handleButtonClick}>
          Générer une nouvelle phrase
        </button>
      </div>
  );
};

export default Excuses;
