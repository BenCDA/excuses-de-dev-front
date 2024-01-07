import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HttpCode = () => {
    const { http_code } = useParams();
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMessage = async (http_code) => {
            try {
                const response = await axios.get(`http://localhost:3001/excuses/${http_code}`);
                console.log('Réponse du serveur :', response.data);
                setMessage(response.data.message);
            } catch (error) {
                console.error('Erreur lors de la récupération du message', error);

                if (error.response) {
                    console.log('Réponse du serveur avec erreur :', error.response.data);
                    setError(`Erreur: ${error.response.data.message}`);
                } else if (error.request) {
                    console.log('Aucune réponse reçue du serveur');
                    setError('Erreur lors de la récupération du message');
                } else {
                    console.log('Erreur lors de la configuration de la requête', error.message);
                    setError('Erreur lors de la récupération du message');
                }
            }
        };

        console.log('Avant la requête Axios 2');
        fetchMessage();
    }, [http_code]);


    return (
        <div>
            <h1>Message correspondant au code HTTP {http_code} :</h1>
            {error ? (
                <p>Erreur : {error}</p>
            ) : (
                <p>{message}</p>
            )}
        </div>
    );
};

export default HttpCode;
