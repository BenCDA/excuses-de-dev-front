import React, { useState } from 'react';
import axios from 'axios';

const AddExcuse = () => {
    const [message, setMessage] = useState('');
    const [httpCode, setHttpCode] = useState('');

    const handleAddExcuse = async () => {
        try {
            await axios.post('http://localhost:3001/excuses/add', { message, http_code: httpCode });
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
