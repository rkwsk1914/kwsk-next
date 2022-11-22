import * as React from 'react';


import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { AppBarLabel } from './../../atoms/AppBarLabel';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

type Props = {
  dark?: boolean;
};

export const EnableColorOnDarkAppBar: React.FC<Props> = ({
  dark = false
}) => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        {dark && (
          <AppBar position="static" color="primary" enableColorOnDark>
            <AppBarLabel label='enableColorOnDark'></AppBarLabel>
          </AppBar>
        )}
        {!dark && (
          <AppBar position="static" color="primary">
            <AppBarLabel label='default'></AppBarLabel>
          </AppBar>
        )}
      </ThemeProvider>
    </Stack>
  );
}