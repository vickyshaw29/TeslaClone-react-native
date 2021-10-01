import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles/commonStyles';
import React, { useEffect } from 'react';
import CarBtn from './Button/CarBtn';
const Car = (props) => {
  const { name, tagline, image, taglineCTA, key } = props.car;
  const navigation = props.navigation;
  useEffect(() => {
    if (key) {
      console.log(key);
    }
  }, [key]);
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.secondContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTagline}>{taglineCTA}</Text>
        </Text>
        <View style={styles.customBtnContainer}>
          <CarBtn
            type="secondary"
            textColor="black"
            text="Custom Order"
            onPress={() => console.log('custom')}
            disabled={true}
          />
          <CarBtn
            type="primary"
            textColor="white"
            text="Details"
            onPress={() => navigation.navigate('Details', { car: props.car })}
          />
        </View>
      </View>
    </View>
  );
};

export default Car;
