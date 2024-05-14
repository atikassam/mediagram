import {
  Box,
  HStack,
  ScrollView,
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
  Text15
} from '../../components/StyledComponents';
import PaddingBox from '../../components/PaddingBox';
import TopBar from '../../components/TopBar';
import CustomAvatar from '../../components/CustomAvatar';
import CustomInput from '../../components/CustomInput';

const formNames = ['Name', 'Username', 'Website', 'Bio'];
const privateFormNames = ['Email', 'Phone', 'Gender'];

export default function ProfileEditScreen() {
  return (
    <Background disableSafeArea={false} variant="gray">
      {/* head */}
      <TopBar
        leftText={'Cancel'}
        rightText={'Done'}
        centerText={'Edit Profile'}
        onPressLeft={function (): void {
          console.log('Function not implemented.');
        }}
        onPressRight={function (): void {
          console.log('Function not implemented.');
        }}
      />
      <Background variant="regular" disableSafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack>
            <VStack alignItems="center" pt="$4.5">
              <CustomAvatar
                uri={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfvtTe9t_L7NqZQLIY_5nkhJ47pykADq3jHg1pU1MEA&s'
                }
                alt={'Kaven11'}
                style={{ width: 95, height: 95 }}
              />
              <Box h="$3.5" />
              <LinkButton>
                <Text13 textColor="regular" variant="semibold">
                  Change Profile Photo
                </Text13>
              </LinkButton>
              <Box h="$4" />
              <CustomDivider />
            </VStack>
            <PaddingBox pt="$0" pb="$0">
              <VStack>
                {formNames.map((name, i) => {
                  return (
                    <HStack alignItems="center" key={i}>
                      <Box w="$1/5" mb={name === 'Bio' ? '$4' : '$0'}>
                        <Text15 variant="normal" textColor="light900">
                          {name}
                        </Text15>
                      </Box>
                      <Box ml="$4" flex={1}>
                        {name === 'Bio' ? (
                          <StyledTextarea
                            size="md"
                            isReadOnly={false}
                            isInvalid={false}
                            isDisabled={false}
                          >
                            <TextareaInput
                              pl="$0"
                              placeholder="Write some thing about you..."
                            />
                          </StyledTextarea>
                        ) : (
                          <CustomInput
                            bg="transparent"
                            placeHolder={name}
                            variant="underlined"
                            h="$12"
                          />
                        )}
                      </Box>
                    </HStack>
                  );
                })}
              </VStack>
            </PaddingBox>
            <CustomDivider />
            <PaddingBox pt="$0" pb="$0">
              <CustomButton
                variant="link"
                justifyContent="flex-start"
                onPress={() => {}}
              >
                <Text15 textColor="regular">
                  Switch to Professional Account
                </Text15>
              </CustomButton>
              <Box py="$3.5">
                <Text15 textColor="light900" variant="semibold">
                  Private Information
                </Text15>
              </Box>
              <VStack>
                {privateFormNames.map((name, i) => {
                  return (
                    <HStack alignItems="center" key={i}>
                      <Box w="$1/5" mb={name === 'Bio' ? '$4' : '$0'}>
                        <Text15 variant="normal" textColor="light900">
                          {name}
                        </Text15>
                      </Box>
                      <Box ml="$4" flex={1}>
                        <CustomInput
                          bg="transparent"
                          placeHolder={name}
                          variant="underlined"
                          h="$12"
                        />
                      </Box>
                    </HStack>
                  );
                })}
              </VStack>
            </PaddingBox>
          </VStack>
        </ScrollView>
      </Background>
    </Background>
  );
}
