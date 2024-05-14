import {
  AddIcon,
  Box,
  ChevronLeftIcon,
  HStack,
  Icon,
  ScrollView,
  SearchIcon,
  TextareaInput,
  VStack
} from '@gluestack-ui/themed';
import Background from '../../components/Background';
import {
  CustomButton,
  CustomDivider,
  LinkButton,
  StyledTextarea,
  Text13,
  Text15,
  Text16,
  WhiteBox
} from '../../components/StyledComponents';
import PaddingBox from '../../components/PaddingBox';
import TopBar from '../../components/TopBar';
import CustomAvatar from '../../components/CustomAvatar';
import CustomInput from '../../components/CustomInput';
import { Entypo } from '@expo/vector-icons';
import MessageTail from '../../components/MessageTail';
import BottomNav from '../../components/BottomNav';

export default function DirectMessageScreen() {
  return (
    <Background disableSafeArea={false} variant="gray">
      {/* head */}
      <TopBar
        leftIcon={() => (
          <Entypo name="chevron-thin-left" size={24} color="black" />
        )}
        rightIcon={AddIcon}
        centerText={'jacob_w'}
        dropdown
        onPressLeft={function (): void {
          console.log('Function not implemented.');
        }}
        onPressCenter={function (): void {
          console.log('Function not implemented.');
        }}
        onPressRight={function (): void {
          console.log('Function not implemented.');
        }}
      />
      <WhiteBox flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PaddingBox>
            <VStack>
              <CustomInput
                leftIcon={SearchIcon}
                placeHolder="Search"
                borderWidth="$0"
              />
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((d, i) => {
                return (
                  <Box key={i}>
                    <MessageTail
                      data={{
                        profile_uri:
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfvtTe9t_L7NqZQLIY_5nkhJ47pykADq3jHg1pU1MEA&s',
                        name: 'joshua_l',
                        lastMsg: 'Have a nice day, bro!',
                        time: 'Now'
                      }}
                    />
                  </Box>
                );
              })}
            </VStack>
          </PaddingBox>
        </ScrollView>
      </WhiteBox>
      <Box h="$11">
        <CustomButton variant="link" onPress={() => {}}>
          <Icon as={() => <Entypo name="camera" size={24} color="#3797EF" />} />
          <Text15 ml="$2" textColor="regular">
            Camera
          </Text15>
        </CustomButton>
      </Box>
    </Background>
  );
}
