import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExcuse = () => {
    const [message, setMessage] = useState('');
    const [httpCode, setHttpCode] = useState('');
    const navigate = useNavigate();

    const handleAddExcuse = async () => {
        try {
            await axios.post('http://localhost:3001/excuses/add', { message, http_code: httpCode });
            console.log('Excuse ajoutée avec succès');
            navigate('/excuses');
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'excuse', error);
        }
    };

    return (
        <div>
            <h1>Ajouter une excuse :</h1>
            <label>Message :</label>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <label>HTTP Code :</label>
            <input type="text" value={httpCode} onChange={(e) => setHttpCode(e.target.value)} />
            <button onClick={handleAddExcuse}>Ajouter</button>
        </div>
    );
};

export default AddExcuse;
