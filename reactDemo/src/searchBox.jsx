import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "ee1bc37f8999688b490c4e37103eff12"
    let getWeatheInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result)
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatheInfo();
            updateInfo(info);
        }
        catch (err) {
            setError(true)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box sx={{ width: 500, maxWidth: '100%' }}>
                    <TextField fullWidth label="city name" id="fullWidth" required onChange={handleChange} value={city} />
                </Box>
                <br />
                <Button variant="outlined" type='submit' >
                    search
                </Button>

            </form>
            {error && <P style={{ color: "red" }}>No such place exists!</P>}

        </div>
    )
}