import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

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
            {appBarLabel('enableColorOnDark')}
          </AppBar>
        )}
        {!dark && (
          <AppBar position="static" color="primary">
            {appBarLabel('default')}
          </AppBar>
        )}
      </ThemeProvider>
    </Stack>
  );
}