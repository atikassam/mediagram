import { Image } from '@gluestack-ui/themed';
import { Pressable } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

const PressImage = (props: {
  onPress?: () => void;
  alt: string;
  uri: string;
}) => {
  const { uri, onPress, alt } = props;
  return (
    <Pressable
      style={styles.card}
      bgColor="$warmGray50"
      p={0}
      onPress={onPress}
    >
      <Image source={{ uri: uri }} alt={alt} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    // width: width / 1.5,
    // // height: 280,
    // maxHeight: width / 1.5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});
export default PressImage;
