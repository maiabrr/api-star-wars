import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (id) {
        navigate(`/${resource}/${id}`);
        }
    };

    return (
        <div>
        <h1>Star Wars API Search</h1>
        <select value={resource} onChange={(e) => setResource(e.target.value)}>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="species">Species</option>
            <option value="planets">Planets</option>
        </select>
        <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Id"
        />
        <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Home;
