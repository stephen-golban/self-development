import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
  CardWrapper: { width, height: height - 100, borderRadius: 10, backgroundColor: 'white' },
  CardImage: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    width: '100%',
  },
});
