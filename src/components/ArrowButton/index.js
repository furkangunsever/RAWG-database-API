import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { arrow } from '../../assets/icons'
const ArrowButton = () => {
  return (
    <View style={styles.conteiner}>
      <Image style={styles.image_contein} source={arrow}/>
    </View>
  )
}

export default ArrowButton