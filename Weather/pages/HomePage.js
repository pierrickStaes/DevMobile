import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import WeatherService from '../services/weather-services';
import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../components/Loading';
import TickToDate from '../components/TickToDate';
import { LinearGradient } from 'expo-linear-gradient';

class HomePage extends React.Component{

    serv = new WeatherService();
    state = {
        weather: null
    }

    componentDidMount(){
        StatusBar.setHidden(true);
        this.serv.getWeatherHome('nanterre').then((resp) =>{
            this.setState({weather: resp.data})
        });
    }

    render(){
        return(
            this.state.weather != null ? (
                <View style={{flex:1}}>
                    <LinearGradient colors={['#9edffb','#4478a2']} style={{flex:1}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                        <Text>La météo du jour à {this.state.weather.name}</Text>
                        <Text>Vendredi 11 octobre 2019</Text>
                    </View>
                    <View style={{flex:2, alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:80, height:80}} source={{uri : `http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}}/>
                        <Text>- - {this.state.weather.weather[0].description} - -</Text>
                    </View>
                    <View style={{flex:3, alignItems:'center',justifyContent:'center'}}>
                        <Text>La température actuelle est de {this.state.weather.main.temp}</Text>
                        <Text>La température minimale est de {this.state.weather.main.temp_min} et la maximal de {this.state.weather.main.temp_max}</Text>
                        <Text>Le lever du soleil est à <TickToDate time={this.state.weather.sys.sunrise}></TickToDate></Text>
                        <Text>Le coucher du soleil est à <TickToDate time={this.state.weather.sys.sunset}></TickToDate></Text>
                    </View>
                    </LinearGradient>
                </View>
            ):(
                <Loading displayColor='blue'>
                    <Text>Connexion au serveur...</Text>
                </Loading>
            )
        );
    }
}

export default HomePage;

const styles = StyleSheet.create({
    Windy: {
        backgroundColor:'#a3c6cb'
    },
    Sunny:{
        backgroundColor:'#7cbac2'
    }
  });