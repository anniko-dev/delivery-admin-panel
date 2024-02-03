import { useMediaQuery, useTheme } from '@mui/material';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';

export const useBreakpoints = (breakpoint: Breakpoint): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints['down'](breakpoint));
};
