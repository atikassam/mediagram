import { AvatarFallbackText, AvatarImage, Icon } from '@gluestack-ui/themed';
import React from 'react';
import { NewAvatar } from './StyledComponents';

const CustomAvatar = (props: {
  uri?: string;
  alt?: string;
  icon?: any;
  [p: string]: any;
}) => {
  const { uri, alt, icon, ...rest } = props;
  return (
    <NewAvatar size={'lg'} {...rest}>
      {uri && (
        <>
          <AvatarFallbackText>{alt}</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: uri
            }}
            alt={alt}
          />
        </>
      )}

      {icon && (
        <Icon as={icon} color="$light900" $dark-color="$white" size="xl" />
      )}
      {/* {
        <AvatarBadge
          w={'$10'}
          h={'$6'}
          rounded={'$lg'}
          left={0}
          ml={'$4'}
          bottom={'$0'}
        />
      } */}
    </NewAvatar>
  );
};
export default CustomAvatar;
