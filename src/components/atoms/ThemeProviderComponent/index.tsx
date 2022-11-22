import * as React from 'react';

import { ThemeProvider } from '@mui/material/styles';

import { DARK_THEME } from '../../../constant';

type Props = {
  children: React.ReactNode;
  dark?: boolean;
};

export const ThemeProviderComponent: React.FC<Props> = (
  {
    children,
    dark = false
  } :Props
): JSX.Element => {
  return (
    <>
      {dark && (
        <ThemeProvider theme={DARK_THEME}>
          {children}
        </ThemeProvider>
      )}
      {!dark && children }
    </>
  );
}
