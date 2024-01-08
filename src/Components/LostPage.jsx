import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LostPage = () => {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setRedirect(true);
        }, 5000);

        return () => {
            clearTimeout(timeOut);
        };
    }, []);

    useEffect(() => {
        if (redirect) {
            navigate('/');
        }
    }, [redirect, navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>i'm lost</h1>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden' }}>
                <iframe
                    title="Lost GIF"
                    src="https://giphy.com/embed/WEcPFwvwTonYAbUHEr/video"
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default LostPage;
