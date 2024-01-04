import React, {useState, useEffect} from 'react';
import axios from "axios";
const Excuses = () => {
    const [excuses, setExcuses] = useState([]);

    useEffect(() => {
        const fetchExcuses = async () => {
        try {
            const response = await axios.get('http://localhost:3001/excuses');
            const excusesData = response.data;
            console.log(excusesData);
            setExcuses(excusesData);
        } catch (e) {
            console.log("Erreur", e);
        }
        };
        fetchExcuses();
    }, []);

    return (
        <div>
            <h1>Les excuses de dev : </h1>
            <ul>
                {excuses.map((excuse) => (
                    <li key={excuse.http_code}>
                        {Object.keys(excuse).map((key) => (
                            <p key={key}>{key}: {excuse[key]}</p>
                        ))}
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Excuses;