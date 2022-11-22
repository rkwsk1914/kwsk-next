import * as React from 'react';

import { MENU_LIST } from './../../../constant'
import { PageComponent } from './../../atoms/PageComponent'
import { ThemeProviderComponent } from './../../atoms/ThemeProviderComponent'
import { TopMenu } from './../../molecules/TopMenu'

type Props = {
  children?: React.ReactNode;
  dark?: boolean;
};

export const PageBase: React.FC<Props> = (
  {children, dark} :Props
): JSX.Element => {
  return (
    <ThemeProviderComponent dark={dark}>
      <TopMenu anchor="left" listData={MENU_LIST}/>
      <PageComponent>
        {children}
      </PageComponent>
    </ThemeProviderComponent>
  );
}
