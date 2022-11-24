import * as React from 'react';

import Link from 'next/link';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { AnchorType, MenuListType, MenuListItemType } from './../../../type'

type Props = {
  listData: MenuListType;
  anchor?: AnchorType;
};

export const MenuBoxList: React.FC<Props> = (
  {listData, anchor} :Props
): JSX.Element => {

  const createlistItme = (listItmeData: Array<MenuListItemType>) => {
    return listItmeData.map((data, index) => (
        <ListItem key={index} disablePadding>
          {data.href && (
            <Link href={data.href}>
              <ListItemButton component="a" href={data.href}>
                <ListItemIcon>
                  {data.icon}
                </ListItemIcon>
                <ListItemText primary={data.text} />
              </ListItemButton>
            </Link>
          )}
          { !data.href && (
            <ListItemButton>
              <ListItemIcon>
                {data.icon}
              </ListItemIcon>
              <ListItemText primary={data.text} />
            </ListItemButton>
          )}
        </ListItem>
      )
    )
  }

  const createList = (listData: MenuListType) => {
    return listData.map((listItemData, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Divider />}
          <List>
            {createlistItme(listItemData)}
          </List>
        </React.Fragment>
      )
    )
  }


  return (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      {createList(listData)}
    </Box>
  );
}
