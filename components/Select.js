//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';


const Select =(props) => {
    const [selected, setSelected] = useState('Select category')

    return (
        <View>
            <TouchableOpacity>
                <Text>{selected}</Text>
            </TouchableOpacity>
        </View>
    )
}


//make this component available to the app
export default Select;
