import {
  Box,
  CloseIcon,
  HStack,
  Image,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  ThreeDotsIcon,
  VStack
} from '@gluestack-ui/themed';
import Background from '../../components/Background';
import CustomInput from '../../components/CustomInput';
import IconButton from '../../components/IconButton';
import { Feather, FontAwesome } from '@expo/vector-icons';
import PaddingBox from '../../components/PaddingBox';
import { LinkButton, Text14, Text13 } from '../../components/StyledComponents';
import { Dimensions } from 'react-native';
import CustomAvatar from '../../components/CustomAvatar';

const { width } = Dimensions.get('window');
export default function StoryScreen() {
  return (
    <Background disableSafeArea={false} variant="dark" statusBarMode="light">
      <VStack flex={1}>
        {/* Story feed */}
        <Box w={'$full'} h="$full" position="absolute">
          <Image
            size="full"
            borderRadius={8}
            resizeMode="cover"
            alt="live"
            source={{
              uri: 'https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863'
            }}
          />
        </Box>
        {/* live feed top nev */}
        <PaddingBox pl="$2.5">
          <HStack space={'xs'} mb="$2">
            {[100, 100, 30, 0, 0].map((item, i) => {
              return (
                <Box key={i} flex={1}>
                  <Slider
                    defaultValue={item}
                    size="sm"
                    orientation="horizontal"
                    isDisabled={false}
                    isReversed={false}
                  >
                    <SliderTrack bg="#ffffff5b">
                      <SliderFilledTrack bg="$white" />
                    </SliderTrack>
                    {/* <SliderThumb /> */}
                  </Slider>
                </Box>
              );
            })}
          </HStack>

          <HStack alignItems="center" justifyContent="space-between">
            <HStack space="lg" alignItems="center">
              <CustomAvatar
                uri={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfvtTe9t_L7NqZQLIY_5nkhJ47pykADq3jHg1pU1MEA&s'
                }
                alt={'Kaven11'}
                style={{ width: 32, height: 32 }}
              />
              <HStack space="md">
                <LinkButton>
                  <Text14 variant="medium" textColor="white">
                    Buddha_109
                  </Text14>
                </LinkButton>
                <Text13 color="$light50">6h</Text13>
              </HStack>
            </HStack>

            <Box>
              <IconButton icon={CloseIcon} color="$white" onPress={() => {}} />
            </Box>
          </HStack>
        </PaddingBox>
        {/* Notifications */}
      </VStack>
      {/* bottom nav */}
      <HStack h={67} p="$3" alignItems="center" space="sm">
        <CustomInput
          bg="transparent"
          placeHolder="Comment"
          h="$10"
          color="$white"
          rounded="$full"
          iconBg="#ffffff4c"
          leftIcon={() => <FontAwesome name="camera" size={18} color="white" />}
        />
        <IconButton
          icon={() => (
            <Box>
              <Feather name="send" size={30} color="#fff" />
            </Box>
          )}
          onPress={() => {}}
        />
        <IconButton color="$white" icon={ThreeDotsIcon} onPress={() => {}} />
      </HStack>
    </Background>
  );
}
