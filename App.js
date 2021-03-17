import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components'

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto') // new_punto, all_puntos
  const [pointsFilter, setPointsFilter] = useState(true)
  
  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handlerLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleCancel = () => {
    setPuntoTemp('')
    setNombre('')
    setVisibility(false)
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress = { handlerLongPress } puntos = { puntos } pointsFilter = {pointsFilter} />
      <Panel onPressLeft = { handleLista } textLeft = 'Lista' togglePointsFilter = { togglePointsFilter }/>
      <Modal visibility={ visibility }>
        { visibilityFilter == 'new_punto' ?
          <View style = { styles.form }>
            <Input title = 'Nombre' placeholder='Nombre del punto' onChangeText= { handleChangeText }/>
            <Button title = 'Acepar' onPress={ handleSubmit } />
            <Button title = 'Cancelar' onPress={ handleCancel } />
          </View>
        : <List puntos = {puntos} closeModal = { () => setVisibility(false)}/>}
      </Modal>
      
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
