import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import WeatherService from '../services/weather-services';
import {SwipeRow} from 'react-native-swipe-list-view';

class CityFavoris extends React.Component{

    static propTypes = {
        tab: PropTypes.object.isRequired,
        onDelete: PropTypes.func.isRequired
    };

    serv = new WeatherService();

    state = {
        weather : null
    }

    componentDidMount(){
        this.serv.getWeatherHome(this.props.tab.name).then((resp) =>{
            this.setState({
                weather: resp.data
            })               
        }).catch (error => {alert("erreur WeatherService")})
    }

    render(){
        return(
            /*<View key={this.props.data} style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{this.props.data}</Text>
                {this.state.weather !== null ? (
                    <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{this.state.weather.main.temp}</Text>
                    </View>
                )}
            </View>*/
            this.state.weather !== null ? (
            <SwipeRow leftOpenValue={0} rightOpenValue={-75} key={this.props.cities}>
                <View styles={style.standaloneRowBack}>
                    <Text>Supprimer</Text>
                    <Button title="Suppr." onPress={()=> this.props.onDelete(this.props.tab.name)}/>
                </View>
                <View styles={style.standaloneRowFront}>
                    <ListItem
                        title={this.state.weather.name}
                        rightTitle={this.state.weather.main.temp}
                        rightAvatar={{
                            source: this.state.weather.weather[0].icon && { uri: `http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png` }
                        }}
                    />
                </View>
            </SwipeRow>
             ):(<Text></Text>)
        );
    }
}

const style = StyleSheet.create({
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 80,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    }
})

export default CityFavoris;