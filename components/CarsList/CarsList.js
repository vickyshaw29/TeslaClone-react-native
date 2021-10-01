import React from 'react';
import { View,FlatList,Dimensions } from 'react-native';
import Car from '../Car';
import cars from './Cars';
const CarsList = ({navigation}) => {
  return (
    <View style={{ width: '100%' }}>
      <FlatList data={cars} renderItem={({item,index}) => <Car car={item} key={index}  navigation={navigation}/>}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={Dimensions.get('window').height}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        }}
      />
    </View>
  );
};

export default CarsList;
