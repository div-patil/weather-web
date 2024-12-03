import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import "./style.css"
export default function SearchInfo({info}){
   
    const Hot_URL="https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?s=2048x2048&w=is&k=20&c=DUn7Pkh7ppGsQtIVjht-S0Pcv3iPcCpU-KUlifVQsmE="
    const COLD_URL="https://images.unsplash.com/photo-1524175869111-19b0893d20b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?s=2048x2048&w=is&k=20&c=5-0cwKyftzKvHbxdXfJLyvV7Ijm0-lrB1DryXtJcpfg="
    return(
        <div>
            <h3>
                Weather Info..
            </h3>
            <div className='cardContainer'>

            
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL  :(info.temp > 15) ? Hot_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {/* {info.humidity > 80 ? ThunderstormIcon :(info.temp > 15) ? WbSunnyIcon : AcUnitIcon} */}
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Temprature = {info.temp}&deg;</div>
          <div>Humidity = {info.humidity}</div>
          <div>Max temp = {info.tempMax}&deg;</div>
          <div>Min temp= {info.tempMin}&deg;</div>
          <div>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
     
    </Card>

        </div>
        </div>
    )
}