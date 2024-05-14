import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Center,
  EditIcon,
  HStack,
  Image,
  Text,
  ThreeDotsIcon,
  VStack
} from '@gluestack-ui/themed';
import Background from '../../components/Background';
import CustomInput from '../../components/CustomInput';
import IconButton from '../../components/IconButton';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  Foundation
} from '@expo/vector-icons';
import PressImage from '../../components/PressImage';
import PaddingBox from '../../components/PaddingBox';
import {
  LinkButton,
  Text11,
  Text13,
  Text15
} from '../../components/StyledComponents';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import CustomAvatar from '../../components/CustomAvatar';

const { width } = Dimensions.get('window');

export default function LiveScreen() {
  return (
    <Background disableSafeArea={false} variant="dark" statusBarMode="light">
      <VStack flex={1}>
        {/* Live feed */}
        <Box w={'$full'} h="$full" position="absolute">
          <Image
            size="full"
            borderRadius={8}
            resizeMode="cover"
            alt="live"
            source={{
              uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            }}
          />
        </Box>
        {/* live feed top nev */}
        <PaddingBox pl="$2.5">
          <HStack alignItems="center" justifyContent="space-between">
            <Box zIndex={1}>
              <IconButton
                icon={() => (
                  <Box>
                    <MaterialIcons name="cameraswitch" size={30} color="#fff" />
                  </Box>
                )}
                onPress={() => {}}
              />
            </Box>

            <HStack
              position="absolute"
              flex={1}
              w="$full"
              h="$full"
              alignItems="center"
              justifyContent="center"
              space="sm"
            >
              <Box w="$9" h="$7" rounded="$sm" overflow="hidden">
                <LinearGradient
                  colors={['#C5008D', '#E20037']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <LinkButton>
                    <Center w="$9" h="$7">
                      <Text11 variant="semibold" textColor="white">
                        LIVE
                      </Text11>
                    </Center>
                  </LinkButton>
                </LinearGradient>
              </Box>
              <Button
                // w="$9"
                h="$7"
                px="$2"
                py="$0"
                rounded="$sm"
                size="xs"
                bgColor="#0000004c"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
              >
                <ButtonIcon
                  as={() => <Foundation name="eye" size={16} color="white" />}
                />
                <ButtonText ml="$1">11</ButtonText>
              </Button>
            </HStack>
            <LinkButton>
              <Text15 variant="semibold" textColor="white">
                End
              </Text15>
            </LinkButton>
          </HStack>
        </PaddingBox>
        {/* Notifications */}
        <Box mt="auto" />
        <PaddingBox>
          <VStack space="sm" w={width - 160}>
            <Text11 variant="semibold" textColor="white">
              We're telling your followers that you’ve started a live video.
            </Text11>
            <Text11 variant="semibold" textColor="white">
              Hang on! We're telling more followers to join your video.
            </Text11>
          </VStack>
          <HStack
            py="$1"
            alignItems="center"
            justifyContent="space-between"
            maxWidth={width - 80}
          >
            <HStack space="md" alignItems="center">
              <CustomAvatar
                uri={
                  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                }
                alt={'profile'}
                style={{ width: 32, height: 32 }}
              />
              <Text13 variant="semibold" textColor="white">
                maxjacobson joined
              </Text13>
            </HStack>
            <Button
              w="$20"
              h="$9"
              px="$0"
              py="$0"
              rounded="$full"
              bgColor="#ffffff33"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
            >
              {/* <ButtonIcon as={() => {}} /> */}
              <Text13 variant="medium" textColor="white">
                👋 Wave
              </Text13>
            </Button>
          </HStack>
        </PaddingBox>
      </VStack>
      {/* bottom nav */}
      <HStack h={67} p="$3" alignItems="center" space="sm">
        <CustomInput
          bg="transparent"
          placeHolder="Comment"
          h="$10"
          rounded="$full"
          color="$white"
          rightIcon={ThreeDotsIcon}
        />
        <IconButton
          icon={() => (
            <Box>
              <FontAwesome6 name="clipboard-question" size={30} color="#fff" />
            </Box>
          )}
          onPress={() => {}}
        />
        <IconButton
          icon={() => (
            <Box>
              <Feather name="send" size={30} color="#fff" />
            </Box>
          )}
          onPress={() => {}}
        />
        <IconButton
          icon={() => (
            <Box>
              <MaterialCommunityIcons
                name="sticker-emoji"
                size={30}
                color="#fff"
              />
            </Box>
          )}
          onPress={() => {}}
        />
        <IconButton
          icon={() => (
            <Box>
              <MaterialIcons
                name="face-retouching-natural"
                size={30}
                color="#fff"
              />
            </Box>
          )}
          onPress={() => {}}
        />
        <Box w="$7" h="$7" overflow="hidden" rounded="$sm">
          <PressImage
            onPress={() => console.log('image')}
            alt={'image'}
            uri={
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
          />
        </Box>
      </HStack>
    </Background>
  );
}
