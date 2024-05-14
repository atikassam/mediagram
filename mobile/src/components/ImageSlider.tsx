import {
  Image,
  ScrollView,
  View,
  Card,
  Text,
  Box,
  Center,
  HStack
} from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Text12 } from './StyledComponents';

const { width } = Dimensions.get('window');

const images = [
  'https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300'
  // Add more image URLs here
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;

    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index + 1);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16} // Adjust the throttle value as needed
      >
        {images.map((image, index) => (
          <Card key={index} style={styles.card} bgColor="$warmGray50" p={0}>
            <Image source={{ uri: image }} alt={image} style={styles.image} />
          </Card>
        ))}
      </ScrollView>
      <Center
        position="absolute"
        right="$3.5"
        top="$3.5"
        w="$11"
        h="$6"
        bgColor="#121212b2"
        rounded={13}
      >
        <Text12 textColor="white">
          {currentIndex}/{images.length}
        </Text12>
      </Center>

      <HStack
        position="absolute"
        alignItems="center"
        justifyContent="center"
        space="sm"
        bottom="-$9"
        w="$full"
      >
        {images.map((image, index) => {
          return (
            <Box
              w="$1.5"
              h="$1.5"
              key={index}
              bgColor={index + 1 === currentIndex ? '#3897F0' : '#00000026'}
              rounded={'$full'}
            />
          );
        })}
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  card: {
    width,
    // height: 280,
    maxHeight: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default ImageSlider;
