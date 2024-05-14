import React from 'react';
import { Box, HStack, Center, SearchIcon } from '@gluestack-ui/themed';
import { HomeIcon, AddNewIcon, Like } from '../../assets/Icons';
import CustomAvatar from './CustomAvatar';
import IconButton from './IconButton';
import { CustomDivider } from './StyledComponents';

const BottomNav = () => {
  return (
    <Box mt="$12">
      <Box bg="$trueGray50" h={'$12'} position="absolute" w="$full" bottom={0}>
        <CustomDivider />
        <HStack
          flex={1}
          alignItems="center"
          justifyContent="space-between"
          mx="$0"
        >
          <Center flex={1}>
            <IconButton icon={() => <HomeIcon />} onPress={() => {}} />
          </Center>

          <Center flex={1}>
            <IconButton icon={() => <SearchIcon />} onPress={() => {}} />
          </Center>
          <Center flex={1}>
            <IconButton icon={() => <AddNewIcon />} onPress={() => {}} />
          </Center>
          <Center flex={1}>
            <IconButton icon={() => <Like />} onPress={() => {}} />
          </Center>
          <Center flex={1}>
            <CustomAvatar
              uri="https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg"
              alt={'Hello'}
              style={{ width: 23, height: 23 }}
            />
          </Center>
        </HStack>
      </Box>
    </Box>
  );
};

export default BottomNav;
