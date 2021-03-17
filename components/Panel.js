import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
    return(
        <View style = { styles.panel }>
            <Button onPress={onPressLeft} title = 'Lista'/>
            <Button title = 'Ocular/Mostrar' onPress = { togglePointsFilter }/>
        </View>
    );
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})