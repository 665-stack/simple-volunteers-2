import React, { useEffect, useState } from 'react';

const Main = () => {
    const [valunteers, setValunteers] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setValunteers(data))
    })
    return (
        <div>
            <h2>Valunteers activities: {valunteers.length}</h2>
        </div>
    );
};

export default Main;