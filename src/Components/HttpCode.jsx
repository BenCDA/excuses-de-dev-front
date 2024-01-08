import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HttpCode = () => {
  const { http_code } = useParams();
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/excuses/${http_code}`);
        console.log('Réponse du serveur :', response.data);
        setMessage(response.data.message);
      } catch (error) {
        console.error(error);
        setError(error.message)
      }
    };

    fetchMessage();
  }, [http_code]);


  return (
    <div>
      <h1>Message correspondant au code HTTP {http_code} :</h1>

        <p>{message}</p>

    </div>
  );
};

export default HttpCode;
