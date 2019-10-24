import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button,TouchableOpacity,AsyncStorage, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationEvents } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import CityFavoris from '../components/CityFavoris';

class FavoritesPage extends React.Component{

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Favoris',
            headerRight: (
                <Icon style={{marginTop:8, marginRight:20}} name="plus-circle" 
                    size={30} color="white" onPress={() => FavoritesPage.onPressFav(navigation)}/>
            )
        }
    };

    static onPressFav(navigation) {
        if (FavoritesPage.count < 4){
            navigation.push('AddFavorites')
        }
        else{
            alert("Vous ne pouvez pas avoir plus de 15 villes favorites")
        }
    }

    static  count = 0 

    state = { cities: [], refreshing: true }

    addFav(){
        if (AsyncStorage.getItem('city') != null){
            AsyncStorage.getItem('city').then((data) => {
                this.setState({ cities: JSON.parse(data) }) 
                /*let tab=[];
                if(data != null){
                    tab = JSON.parse(data);
                }
                let tabComplet = []
                let base = null;
                for (let city of tab)
                {
                    console.log(city.name)
                    this.serv.getWeatherHome(city.name).then((resp) =>{
                        base = resp.data  
                        tabComplet.push({name: base.name, temp: base.main.temp, icon: base.weather[0].icon}) 
                        this.setState({
                            cities: tabComplet
                        })                
                    }).catch (error => {alert("non")})
                }*/
                this.setState({refreshing: false})
                FavoritesPage.count = this.state.cities.length;
            });
        }else{
            FavoritesPage.count = 0;
        }
    }

    onRefresh() {
        
    }

    deleteCity(cityname){
        let tab = [...this.state.cities];
        tab.splice(tab.findIndex(e => e === cityname), 1);
        AsyncStorage.setItem('cities', JSON.stringify(tab)).then(()=>{
            this.setState({cities: tab})
        })
    }

    suppFav(){
        AsyncStorage.removeItem('city').then(() => {
            this.setState({
                cities : []
            })
            this.addFav();
            FavoritesPage.count = 0;
        });

    }

    componentDidMount(){
        this.addFav()
    }

    componentDidUpdate(){
    }
      
    render(){
        return(
            this.state.cities !== null && this.state.cities.length != 0 ? (
                <View style={{flex:1}}>
                    <NavigationEvents onDidFocus={() => this.addFav()} />
                    <LinearGradient colors={['#9edffb','#4478a2']} style={{flex:1}}>
                    <FlatList
                        data={this.state.cities}
                        renderItem={({ item }) => 
                            <CityFavoris tab={item} onDelete={(tab) => this.deleteCity(tab)}></CityFavoris>
                        }
                        ItemSeparatorComponent={this.renderSeparator}
                        keyExtractor={(item, index) => index.toString()}
                        refreshControl={
                            <RefreshControl
                              //refresh control used for the Pull to Refresh
                              refreshing={this.state.refreshing}
                              onRefresh={this.onRefresh.bind(this)}
                            />
                        }
                    />
                    </LinearGradient>
                    <Button title="Supprimer tout les favoris" onPress={() => this.suppFav()}/>
                </View>
            ):(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <NavigationEvents onDidFocus={() => this.addFav()} />
                <Text>Vous n'avez pas de favoris :'(</Text>
            </View>
            )
        );
    }

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE"
            }}
          />
        );
      };
}

export default FavoritesPage;