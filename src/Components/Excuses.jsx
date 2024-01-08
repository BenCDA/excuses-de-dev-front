import axios from "axios";
import React, { useEffect, useState } from 'react';
import '../Style/style.css';
const Excuses = () => {
  const [excuses, setExcuses] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const fetchExcuses = async () => {
      try {
        const response = await axios.get('http://localhost:3001/excuses');
        const excusesData = response.data;
        console.log(excusesData);
        setExcuses(excusesData);
        setTimeout(() => {
          setShowTitle(true);
        }, 2000);
        setTimeout(() => {
          setShowButton(true);
        }, 4000);
      } catch (e) {
        console.log("Erreur", e);
      }
    };
    fetchExcuses();
  }, []);

  const handleButtonClick = () => {
    console.log("Fonctionne");
  }

  return (
    <div className="excuses-container">
      {showTitle && (
        <h1 className="fade-in">Les excuses de dev :</h1>
      )}
      <ul>
        {excuses.map((excuse) => (
          <li key={excuse.http_code}>
            {Object.keys(excuse).map((key) => (
              <p key={key}>
                {key}: {excuse[key]}
              </p>
            ))}
          </li>
        ))}
      </ul>
      {showButton && (
        <button className="fade-in" onClick={handleButtonClick}>
          Montrer le titre
        </button>
      )}
    </div>
  );
};

export default Excuses;
