import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ObiWanImage from '../assets/obi-wan.jpg'; 

const SearchResult = () => {
    const { resource, id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        try {
            setError(false);
            const response = await axios.get(`https://swapi.dev/api/${resource}/${id}/`);
            setData(response.data);

            // Si el recurso es "people", hacer otra solicitud para obtener el homeworld
            if (resource === 'people') {
            const homeworldResponse = await axios.get(response.data.homeworld);
            setData((prevData) => ({ ...prevData, homeworldName: homeworldResponse.data.name }));
            }
        } catch (error) {
            setError(true);
        }
        };

        fetchData();
    }, [resource, id]);

    if (error) {
        return (
        <div>
            <h2>Estos no son los droides que está buscando</h2>
            <img src={ObiWanImage} alt="Obi-Wan Kenobi" />
        </div>
        );
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <h1>{data.name || data.title}</h1>
        {resource === 'people' && (
            <div>
            <p><strong>Height:</strong> {data.height}</p>
            <p><strong>Hair Color:</strong> {data.hair_color}</p>
            <p><strong>Birth Year:</strong> {data.birth_year}</p>
            <p><strong>Homeworld:</strong> {data.homeworldName}</p>
            </div>
        )}
        </div>
    );
};

export default SearchResult;
