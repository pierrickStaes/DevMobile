import axios from 'axios';

const key='5c3629c0f1348c109ac2485fc4776461';
const url=`https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`;

class WeatherService{
    getWeatherHome(ville){
        return axios.get(`${url}&q=${ville},fr`);
        /*return{
            weather:{
                main: 'Sunny',
                description:`Il fait beau aujourd'hui`
            },
            main:{
                temp:'14',
                temp_min:'13',
                temp_max:'21',
                humidity:'92',
                pressure:'1009'
            },
            wind:{
                main:'Windy',
                speed:'20'
            },
            sys:{
                sunrise: 1560281377,
                sunset: 1560333478
            },
            name: 'Nanterre'
        };*/
    }
}

export default WeatherService;