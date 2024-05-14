import { Box } from '@gluestack-ui/themed';
import React from 'react';

const PaddingBox = (props: {
  children: any;
  pt?: any;
  pb?: any;
  pl?: any;
  pr?: any;
}) => {
  const {
    children,
    pb = '$3.5',
    pt = '$3.5',
    pl = '$3.5',
    pr = '$3.5'
  } = props;
  return (
    <Box pl={pl} pr={pr} pb={pb} pt={pt}>
      {children}
    </Box>
  );
};

export default PaddingBox;
