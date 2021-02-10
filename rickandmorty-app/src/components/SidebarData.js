import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import { logout } from '../utils/oauth';


export const SidebarData = [
  {
    title: 'AllEpisodes',
    path: '/allepisodes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Search',
    path: '/search',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
];