import React from 'react'

export type MenuListItemType = {
  text: string,
  href?: string,
  icon?: React.ReactNode
}

export type MenuListType = Array<Array<MenuListItemType>>