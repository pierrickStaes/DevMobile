import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

class TickToDate extends React.Component{

    static propTypes = {
        time: PropTypes.number.isRequired
    };

    render(){
        const dt = new Date(this.props.time*1000);

        return(
            <Text>{dt.getHours()+2}:{dt.getMinutes()}</Text>
        );
    }
}

export default TickToDate;