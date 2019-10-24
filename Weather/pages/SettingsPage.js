import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class SettingsPage extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <LinearGradient colors={['#9edffb','#4478a2']} style={{flex:1}}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text>
                            Paramètres
                        </Text>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

export default SettingsPage;