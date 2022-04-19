// cài đặt môi trường chạy node/yarn mode-fetch/axios
// corona Api by node-fetch
import fetch from 'node-fetch';

const callApiCovidResponse = async ()=>{
    const url = `https://api.covid19api.com/summary`;
    const response = await fetch(url);
    const data = response.json();
    return data;
}

// Weather Api by axios
import axios from 'axios';
const callApiWeatherResponse = async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : {cod: 404, message: 'no found'};
    return data;
}

export const api = {
    callApiCovidResponse,
    callApiWeatherResponse
}