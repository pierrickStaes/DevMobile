import React from 'react';
import { Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import PropTypes from 'prop-types';

class Loading extends React.Component{

    static propTypes = {
        displayColor: PropTypes.string.isRequired
    };

    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator size='large' color={this.props.displayColor}></ActivityIndicator>
                <Text>Chargement...</Text>
                {this.props.children}
            </View>
        );
    }
}

export default Loading;