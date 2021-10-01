import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/commonStyles';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('CarsList')}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/menu.png')}
          style={styles.menu}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
