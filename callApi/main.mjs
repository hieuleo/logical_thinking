import {api} from './ApiResponse.mjs'

const hendleDataCorona = async () => {
    const data = await api.callApiCovidResponse();
    console.log(data);
    // hendle code 
}

const hendleDataWeatherCity = async () => {
    const data = await api.callApiWeatherResponse('hanoi');
    console.log(data);
    // hendle code 
}

hendleDataCorona()
hendleDataWeatherCity();