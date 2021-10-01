import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  secondContainer: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  btnContainer: {
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: 'yellow',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  customBtnContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    marginTop: Dimensions.get('window').height-300,
  },
  subTagline: {
    textDecorationLine: 'underline',
  },
  header: {
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 18,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    height: 25,
  },
  goBack: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '8%',
  },
  btn: {
    backgroundColor: '#4D4D4D',
    padding: 10,
    borderRadius: 50,
    width: 120,
    display: 'flex',
    alignItems: 'center',
    marginLeft: -13.8,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
  },
  detailContainer: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    marginTop: '27%',
  },
  imageSingal: {
    height: '100%',
    width: '100%',
  },
  detailHeader: {
    position: 'absolute',
    marginTop: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
  },
  textContainer: {
    position: 'absolute',
    marginTop: Dimensions.get('window').height - 300,
    width: Dimensions.get('window').width,
  },
  titleCar: {
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:22,
    marginBottom:10,
  },
});
export default styles;
