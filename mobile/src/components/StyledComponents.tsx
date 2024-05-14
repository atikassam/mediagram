import { styled } from '@gluestack-style/react';
import {
  Avatar,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Center,
  Divider,
  Pressable,
  Text,
  Textarea
} from '@gluestack-ui/themed';
import { StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 50;

export const NCenter = styled(Center, {
  //   justifyContent: 'center',
  flex: 1
});
export const StyledTextarea = styled(Textarea, {
  h: '$16',
  borderWidth: 0
});
export const WhiteBox = styled(Box, {
  bg: '$white',
  _dark: {
    bg: '$light900'
  }
});
export const NewAvatar = styled(Avatar, {
  //   justifyContent: 'center',
});

export const LinkButton = styled(Pressable, {
  px: '$0',
  py: '$0'
});
export const CustomButton = styled(Button, {
  rounded: '$md',
  w: '$full',
  h: '$11',
  variants: {
    variant: {
      solid: {
        bgColor: '#3797EF'
      },
      outline: {
        bgColor: 'transparent',
        borderColor: '$light300',
        borderWidth: 1
      },
      link: {
        bgColor: 'transparent'
      }
    }
  }
});
export const CustomButtonText = styled(ButtonText, {
  variants: {
    variant: {
      solid: {
        color: '$white'
      },
      outline: {
        color: '$light900'
      }
    }
  }
});
//Icon Button style
export const RoundButtonStyle = styled(Button, {
  bgColor: 'transparent',
  rounded: '$full',
  pl: '$0',
  pr: '$0',
  pt: '$0',
  pb: '$0',
  h: '$10',
  w: '$10'
});
export const IconStyle = styled(ButtonIcon, {
  color: '$textLight900',
  h: '$6',
  w: '$6',
  _dark: {
    color: '#F9F9F9'
  }
});
export const Text11 = styled(Text, {
  fontSize: 11,
  color: '#00000066',
  _dark: {
    color: '#ffffff99'
  },
  variants: {
    variant: {
      normal: {
        fontWeight: '$normal'
      },
      medium: {
        fontWeight: '$medium'
      },
      semibold: {
        fontWeight: '$semibold'
      }
    },
    textColor: {
      regular: {
        color: '#3797EF',
        _dark: {
          color: '#3797EF'
        }
      },
      white: {
        color: '$white'
      },
      light900: {
        color: '$textLight900',
        _dark: {
          color: '$white'
        }
      },
      default: {
        color: '#00000066',
        _dark: {
          color: '#ffffff99'
        }
      }
    }
  },
  defaultProps: {
    variant: 'normal',
    textColor: 'default'
  }
});
export const Text12 = styled(Text, {
  fontSize: '$xs',
  color: '#00000066',
  _dark: {
    color: '#ffffff99'
  },
  variants: {
    variant: {
      normal: {
        fontWeight: '$normal'
      },
      medium: {
        fontWeight: '$medium'
      },
      semibold: {
        fontWeight: '$semibold'
      }
    },
    textColor: {
      regular: {
        color: '#3797EF',
        _dark: {
          color: '#3797EF'
        }
      },
      light900: {
        color: '$textLight900',
        _dark: {
          color: '$white'
        }
      },
      white: {
        color: '$white'
      },
      default: {
        color: '#00000066',
        _dark: {
          color: '#ffffff99'
        }
      }
    }
  },
  defaultProps: {
    variant: 'normal',
    textColor: 'default'
  }
});
export const Text13 = styled(Text, {
  fontSize: 13,
  color: '#00000066',
  _dark: {
    color: '#ffffff99'
  },
  variants: {
    variant: {
      normal: {
        fontWeight: '$normal'
      },
      medium: {
        fontWeight: '$medium'
      },
      semibold: {
        fontWeight: '$semibold'
      }
    },
    textColor: {
      regular: {
        color: '#3797EF',
        _dark: {
          color: '#3797EF'
        }
      },
      light900: {
        color: '$textLight900',
        _dark: {
          color: '$white'
        }
      },
      white: {
        color: '$white'
      },
      default: {
        color: '#00000066',
        _dark: {
          color: '#ffffff99'
        }
      }
    }
  },
  defaultProps: {
    variant: 'normal',
    textColor: 'default'
  }
});
export const Text14 = styled(Text, {
  fontSize: '$sm',
  variants: {
    variant: {
      normal: {
        fontWeight: '$normal'
      },
      medium: {
        fontWeight: '$medium'
      },
      semibold: {
        fontWeight: '$semibold'
      }
    },
    textColor: {
      regular: {
        color: '#3797EF',
        _dark: {
          color: '#3797EF'
        }
      },
      light900: {
        color: '$textLight900',
        _dark: {
          color: '$white'
        }
      },
      white: {
        color: '$white'
      },
      default: {
        color: '#00000066',
        _dark: {
          color: '#ffffff99'
        }
      }
    }
  },
  defaultProps: {
    variant: 'normal',
    textColor: 'default'
  }
});
export const Text15 = styled(Text, {
  fontSize: 15,
  variants: {
    variant: {
      normal: {
        fontWeight: '$normal'
      },
      medium: {
        fontWeight: '$medium'
      },
      semibold: {
        fontWeight: '$semibold'
      }
    },
    textColor: {
      regular: {
        color: '#3797EF',
        _dark: {
          color: '#3797EF'
        }
      },
      light900: {
        color: '$textLight900',
        _dark: {
          color: '$white'
        }
      },
      white: {
        color: '$white'
      },
      default: {
        color: '#00000066',
        _dark: {
          color: '#ffffff99'
        }
      }
    }
  },
  defaultProps: {
    variant: 'normal',
    textColor: 'default'
  }
});
export const Text16 = styled(Text, {
  fontSize: '$md',
  variants: {
    variant: {
      normal: {
        fontWeight: '$normal'
      },
      medium: {
        fontWeight: '$medium'
      },
      semibold: {
        fontWeight: '$semibold'
      }
    },
    textColor: {
      regular: {
        color: '#3797EF',
        _dark: {
          color: '#3797EF'
        }
      },
      light900: {
        color: '$textLight900',
        _dark: {
          color: '$white'
        }
      },
      white: {
        color: '$white'
      },
      default: {
        color: '#00000066',
        _dark: {
          color: '#ffffff99'
        }
      }
    }
  },
  defaultProps: {
    variant: 'normal',
    textColor: 'default'
  }
});

export const CustomDivider = styled(Divider, {
  w: '$full',
  bg: '#00000033',
  _dark: {
    bg: '#ffffff26'
  }
});
export const StatusBarPlaceholder = styled(Box, {
  h: statusBarHeight,
  bgColor: '$trueGray50'
});
