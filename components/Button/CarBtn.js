import React from 'react'
import {View,Pressable,Text} from 'react-native'
import styles from '../../styles/commonStyles'
const CarBtn = (props) => {
    const {type,textColor,text,onPress}=props
    const backgroundColor=type==='primary'?'black':'white'
    return (
        <View style={styles.btnContainer}>
            <Pressable
            style={[styles.button,{backgroundColor:backgroundColor}]}
            onPress={onPress}
            >
                <Text style={[styles.btnText],{color:textColor}}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default CarBtn
