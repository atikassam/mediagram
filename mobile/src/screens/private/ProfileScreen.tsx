import {
  Icon,
  Box,
  HStack,
  LockIcon,
  ScrollView,
  Text,
  VStack,
  ChevronDownIcon,
  MenuIcon,
  AddIcon
} from '@gluestack-ui/themed';
import * as React from 'react';
import Background from '../../components/Background';
import BottomNav from '../../components/BottomNav';
import {
  LinkButton,
  Text16,
  CustomDivider,
  Text13,
  Text12,
  CustomButton,
  CustomButtonText
} from '../../components/StyledComponents';
import { GalleryIcon, TaggedIcon } from '../../../assets/Icons';
import IconButton from '../../components/IconButton';
import InstaGradientAvatar from '../../components/InstaGradientAvatar';
import CustomAvatar from '../../components/CustomAvatar';
import PressImage from '../../components/PressImage';
import { Dimensions } from 'react-native';
import PaddingBox from '../../components/PaddingBox';
import TopNav from '../../components/TopNav';

const storyData = [
  {
    uri: 'https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg',
    name: 'Your story',
    isLive: false
  },
  {
    uri: 'https://i.pinimg.com/originals/9c/ac/dc/9cacdc207e8997bf90a3daf9c8aaca80.jpg',
    name: 'Jhon_mskjs',
    isLive: false
  },
  {
    uri: 'https://i.pinimg.com/originals/23/de/49/23de493ca285c455b065cc5eecdcaf2d.jpg',
    name: 'Falicaty',
    isLive: false
  },
  {
    uri: 'https://i.pinimg.com/736x/11/9b/82/119b822c24bfddfaab7ee792ba575413.jpg',
    name: 'Radha',
    isLive: false
  },
  {
    uri: 'https://i.pinimg.com/originals/23/de/49/23de493ca285c455b065cc5eecdcaf2d.jpg',
    name: 'Sadieanto',
    isLive: false
  }
];

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  const [pressHead, setPressHead] = React.useState('gallery');
  const user = {
    uri: 'https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg',
    name: 'Your story',
    isLive: false
  };

  return (
    <Background disableSafeArea={false} variant="gray">
      {/* head */}
      <TopNav
        icon={MenuIcon}
        right={0}
        onPressIcon={() => {}}
        text={
          <>
            <Icon as={LockIcon} w="$4" h="$4" />
            <Text16 textColor="light900">jacob_w</Text16>
            <Icon as={ChevronDownIcon} w="$5" h="$5" />
          </>
        }
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack>
          <PaddingBox pb="$0" pt="$0">
            {/* user photo */}
            <HStack alignItems="center">
              <Box>
                <InstaGradientAvatar
                  uri={user.uri}
                  dimension={96}
                  ringDistance={10}
                />
              </Box>
              <HStack ml="$6" flex={1}>
                <StackText number={56} text="Post" onPress={() => {}} />
                <StackText number={845} text="Followers" onPress={() => {}} />
                <StackText number={16} text="Following" onPress={() => {}} />
              </HStack>
            </HStack>
            {/* user about */}
            <Box mt="$3" mb="$4">
              <Text12 variant="semibold" textColor="light900">
                Jacob West
              </Text12>
              <Text12 textColor="light900">
                Digital goodies designer{' '}
                <Text12 textColor="regular">@pixsellz</Text12>
              </Text12>
              <Text12 textColor="light900">Everything is designed.</Text12>
            </Box>

            <CustomButton
              variant={'outline'}
              h="$8"
              size={'sm'}
              isDisabled={false}
              onPress={() => {}}
            >
              <CustomButtonText variant={'outline'}>
                Edit Profile
              </CustomButtonText>
            </CustomButton>
            <Box h="$4" />
          </PaddingBox>
          {/* Story */}
          <HStack mb="$4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Box w="$4" />

              <CustomAvatar
                icon={AddIcon}
                bg="transparent"
                borderWidth={1}
                borderColor="$light300"
              />
              {storyData.map((story, index) => {
                return (
                  <Box
                    key={index}
                    ml="$4"
                    mr={index + 1 >= storyData.length ? '$4' : '$0'}
                  >
                    <InstaGradientAvatar
                      uri={story.uri}
                      name={story.name}
                      isLive={story.isLive}
                      dimension={64}
                    />
                  </Box>
                );
              })}
            </ScrollView>
          </HStack>
          {/* Gallery */}
          <CustomDivider />
          <Box>
            <HStack w="$full" h="$11">
              <Box flex={1}>
                <LinkButton
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  borderBottomWidth={pressHead === 'gallery' ? 1 : 0}
                  borderColor="$textLight900"
                  onPress={() => setPressHead('gallery')}
                >
                  <GalleryIcon />
                </LinkButton>
              </Box>
              <Box flex={1}>
                <LinkButton
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  borderBottomWidth={pressHead === 'tagged' ? 1 : 0}
                  borderColor="$textLight900"
                  onPress={() => setPressHead('tagged')}
                >
                  <TaggedIcon />
                </LinkButton>
              </Box>
            </HStack>
          </Box>
          <CustomDivider />
          {/* Photos */}
          <Box>
            {[1, 2, 3, 4, 5].map((d, i) => {
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
      <BottomNav />
    </Background>
  );
}

const StackText = (props: {
  number: number;
  text: string;
  onPress?: () => void;
}) => {
  const { text, onPress, number } = props;
  return (
    <>
      <Box alignItems="center" flex={1}>
        <LinkButton alignItems="center" onPress={onPress}>
          <Text16 variant="semibold" textColor="light900">
            {number}
          </Text16>
          <Text13 textColor="light900">{text}</Text13>
        </LinkButton>
      </Box>
    </>
  );
};
