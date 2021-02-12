import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

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
    icon: <FaIcons.FaSearchPlus />,
    cName: 'nav-text'
  },
];