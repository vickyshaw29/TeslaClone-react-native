import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import styles from '../../styles/commonStyles';

const Details = ({ navigation, route }) => {
  const { car } = route.params;
  return (
    <View>
      <ImageBackground source={car.image} style={styles.imageSingal} />
      <View style={styles.detailContainer}>
        <View style={styles.goBack}>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate('CarsList')}
          >
            <Text style={styles.btnText}>Go Back</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.titleCar}>{car.name}</Text>
          <Text style={styles.titleCar}>{`Top speed: ${car.speed}`}</Text>
          <Text style={styles.description}>{car.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
