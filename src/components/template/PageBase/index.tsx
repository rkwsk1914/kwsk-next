import * as React from 'react';

import { TopMenu } from '../../molecules/TopMenu'
import { MENU_LIST } from './../../../constant'
import { PageComponent } from './../../atoms/PageComponent'
import { ThemeProviderComponent } from './../../atoms/ThemeProviderComponent'

type Props = {
  children?: React.ReactNode;
  dark?: boolean;
};

export const PageBase: React.FC<Props> = (
  {children, dark} :Props
): JSX.Element => {
  return (
    <PageComponent>
      <ThemeProviderComponent dark={dark}>
        <TopMenu anchor="left" listData={MENU_LIST}/>
        {children}
      </ThemeProviderComponent>
    </PageComponent>
  );
}
