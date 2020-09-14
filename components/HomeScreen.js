import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import RNPickerSelect from 'react-native-picker-select'
// import Picker from '@react-native-community/picker'
import Select from './Select'



export const HomeScreen = (props) => {

    selectItems = [
        {label: "Food", value: "Food"},
        {label: "Transport", value: "Transport"},
        {label: "Groceries", value: "Groceries"},
        {label: "Bills", value: "Bills"},
    ]

    const [category, setCategory] = useState(null)
    const [amount, setAmount] = useState(0)
    const [note, setNote] = useState(null)

    // Instantiate the navigation object
    const navigation = useNavigation()

    const renderList = ({ item }) => (
        <ListItem 
            id={ item.id } 
            category={ item.category } 
            amount={ item.amount } 
            clickHandler = { showDetail }
            item = { item }
        />
    )

    const showDetail = ( item ) => {
        navigation.navigate("Detail", item )
    }

    return(
        <View style={ styles.container }>
            <View>
                <TextInput placeholder="amount" style={styles.input} onChangeText={ (amount)=>setAmount(amount) }/>
                <Select items={selectItems} onSelect={setCategory}/>
                <TextInput placeholder="notes" style={styles.input} onChangeText={ (note)=>setNote(note) }/>
            </View>
            <FlatList 
                data = { props.data }
                renderItem = { renderList }
                keyExtractor = { item => item.id }
            />
        </View>
    )
}

const ListItem = (props) => {
    return (
        <TouchableOpacity onPress={ () => props.clickHandler( props.item ) }>
            <View style={ styles.listItem }>
                <Text style={styles.cateText}>{ props.category }</Text>
                <Text style={styles.cateText}>$ { props.amount }</Text>
            </View>
        </TouchableOpacity>       
    )
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        justifyContent: 'center',
        paddingTop: 10,
    },
    input: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: '#ffffff',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 10,
    },
    picker: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: '#ffffff',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 10,
    },
    listItem: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    cateText: {
        fontFamily: 'serif',
    }
  });