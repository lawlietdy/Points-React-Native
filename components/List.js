import React from 'react';
import { StyleSheet, Button, FlatList, Text, View, Dimensions } from 'react-native';

export default ({ puntos, closeModal }) => {
    return(
        <>
        <View style = { styles.list }>
            <FlatList 
            data = {puntos.map(x => x.name )}
            renderItem = {({ item }) => <Text style = {styles.item }>{ item }</Text>}
            keyExtractor = { item => item } 
            />
        </View>
        <View style= { styles.button }>
            <Button  onPress = {closeModal} title = 'Cerrar'/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
    },
    list: {
        height: Dimensions.get('window').height - 350,
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 55,
        justifyContent: 'center',
        padding: 15,
    }
})