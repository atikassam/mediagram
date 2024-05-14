import {
  Box,
  ChevronDownIcon,
  HStack,
  ScrollView,
  VStack
} from '@gluestack-ui/themed';
import Background from '../../components/Background';
import {
  CustomButton,
  IconStyle,
  LinkButton,
  Text11,
  Text16
} from '../../components/StyledComponents';
import { Dimensions } from 'react-native';
import PressImage from '../../components/PressImage';
import PaddingBox from '../../components/PaddingBox';
import { useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import TopBar from '../../components/TopBar';

const { width } = Dimensions.get('window');

export default function AddImageScreen() {
  const [pressHead, setPressHead] = useState('Photo');

  return (
    <Background disableSafeArea={false} variant="gray">
      {/* head */}
      <TopBar
        leftText={'Cancel'}
        rightText={'Next'}
        centerText={'Recents'}
        dropdown
        onPressLeft={function (): void {
          console.log('Function not implemented.');
        }}
        onPressRight={function (): void {
          console.log('Function not implemented.');
        }}
        onPressCenter={function (): void {
          console.log('Function not implemented.');
        }}
      />

      <Box w={width} height={width} bg="$textLight100">
        <PressImage
          uri="https://i.natgeofe.com/n/f7facfef-285c-4171-b58a-3c4653d11872/2019-travel-photo-contest-epic-landscapes035_square.jpg"
          alt="Panda"
          onPress={() => {}}
        />
        <HStack space="md" p="$2.5" position="absolute" bottom={0} right={0}>
          <CustomButton
            w={'$8'}
            h="$8"
            borderRadius="$full"
            px="$0"
            bg="#262626cc"
          >
            {/* EditIcon is imported from 'lucide-react-native' */}
            <IconStyle
              as={() => <Ionicons name="infinite" size={20} color="white" />}
            />
          </CustomButton>
          <CustomButton
            w={'$8'}
            h="$8"
            borderRadius="$full"
            px="$0"
            bg="#262626cc"
          >
            {/* EditIcon is imported from 'lucide-react-native' */}
            <IconStyle
              as={() => (
                <MaterialCommunityIcons name="table" size={20} color="white" />
              )}
            />
          </CustomButton>
          <CustomButton
            w={'auto'}
            h="$8"
            borderRadius="$full"
            px="$3"
            bg="#262626cc"
          >
            {/* EditIcon is imported from 'lucide-react-native' */}
            <IconStyle
              as={() => (
                <MaterialCommunityIcons name="table" size={20} color="white" />
              )}
            />
            <Text11 ml="$1" variant="semibold" textColor="white">
              Select multiple
            </Text11>
          </CustomButton>
        </HStack>
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack>
          <Box>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((d, i) => {
              return (
                <HStack justifyContent="space-between" mt={1} key={i}>
                  <Box w={width / 3 - 1} h={width / 3 - 1} bg="$amber400">
                    <PressImage
                      uri={'https://via.placeholder.com/300'}
                      alt={'image'}
                    />
                  </Box>
                  <Box w={width / 3 - 1} h={width / 3}>
                    <PressImage
                      uri={'https://via.placeholder.com/300'}
                      alt={'image'}
                    />
                  </Box>
                  <Box w={width / 3 - 1} h={width / 3}>
                    <PressImage
                      uri={'https://via.placeholder.com/300'}
                      alt={'image'}
                    />
                  </Box>
                </HStack>
              );
            })}
          </Box>
        </VStack>
      </ScrollView>
      {/* bottom nev */}
      <HStack w="$full" h="$11" px="$2">
        <BottomNav
          text="Library"
          onPress={() => setPressHead('Library')}
          pressed={pressHead}
        />
        <BottomNav
          text="Photo"
          onPress={() => setPressHead('Photo')}
          pressed={pressHead}
        />
        <BottomNav
          text="Video"
          onPress={() => setPressHead('Video')}
          pressed={pressHead}
        />
      </HStack>
    </Background>
  );
}

const BottomNav = (props: {
  text: string;
  onPress: () => void;
  pressed: string;
}) => {
  const { text, onPress, pressed } = props;
  return (
    <Box flex={1}>
      <LinkButton
        flex={1}
        justifyContent="center"
        alignItems="center"
        onPress={onPress}
      >
        <Text16
          variant="semibold"
          textColor={pressed === text ? 'light900' : 'default'}
        >
          {text}
        </Text16>
      </LinkButton>
    </Box>
  );
};
