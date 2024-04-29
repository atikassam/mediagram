import * as React from 'react';
import { CustomThemeContext } from '../providers/ThemeProvider';

export const useCustomTheme = () => React.useContext(CustomThemeContext);
