import {
  Box,
  ChevronLeftIcon,
  HStack,
  ScrollView,
  VStack
} from '@gluestack-ui/themed';
import Background from '../../components/Background';
import BottomNav from '../../components/BottomNav';
import { Text16 } from '../../components/StyledComponents';
import TopNav from '../../components/TopNav';
import { Dimensions } from 'react-native';
import PressImage from '../../components/PressImage';

const { width } = Dimensions.get('window');

export default function ScreenPics() {
  return (
    <Background disableSafeArea={false} variant="gray">
      {/* head */}
      <TopNav
        icon={ChevronLeftIcon}
        left={0}
        text={
          <Text16 textColor="light900" variant="semibold">
            All Posts
          </Text16>
        }
      />

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
      <BottomNav />
    </Background>
  );
}
