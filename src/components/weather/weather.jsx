import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Note l'api key devrait etre stocker dans un fichier d'environement
const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather?q=__city__&appid=c3fa448b20d4333b499f552522c429d3&units=metric&lang=fr';

const Weather = (props) => {
    const {city} = props;

    const [temp, setTemp] = useState(null);
    const [desc, setDesc] = useState(null);
    const [onLoading, setLoading] = useState(true);
    const [onError, setError] = useState(false);

    // Le useEffect ne se lance la 1er fois et quand la valeur city est modifier
    useEffect(() => {
        setTemp(null);
        setDesc(null);
        setLoading(true);
        setError(false);

        // Envoie de la requete API
        const url = URL_BASE.replace('__city__', city);
        axios.get(url)
            .then(response => {
                const {data} = response;
                setTemp(data.main.temp);
                setDesc(data.weather[0].description)
            })
            .catch(response => {
                console.log(response.data);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [city])

    return (
        <div>
            {onLoading ? (
                <p>Chargement ...</p>
            ) : onError ? (
                <p>Erreur lors de la recherche de {city}</p>
            ): (
                <p>Météo de {city} → Temperature {temp}°c ({desc})</p>
            )}
        </div>
    )
}

Weather.propTypes = {
    city: PropTypes.string.isRequired
}

export default Weather;