import React, { useState } from "react";
import {
  IoIosContacts, IoIosFiling, IoIosFunnel, IoIosCash, IoIosAnalytics, IoIosCart, IoMdPie,
   IoMdAnalytics, IoMdList, IoIosPerson, IoIosSearch } from 'react-icons/io';

export const Items = [
  {
    icon: <IoIosAnalytics size={'1.2em'}/>,
    label: 'Dashboard',
    to: '/dashboard'
  },
  {
    label: 'Search',
    to: '/dashboard/search',
    icon: <IoIosSearch size={'1.2em'}/>,
  },
  {
    label: 'Credentials',
    to: '/dashboard/credentials',
    icon: <IoMdAnalytics size={'1.2em'}/>,
  },
  {
    icon: <IoMdList size={'1.2em'}/>,
    label: 'Issuers',
    to: '/dashboard/issuers'
  },
  {
    icon: <IoIosPerson size={'1.2em'}/>,
    label: 'People',
    to: '/dashboard/people'
  },
  {
    icon: <IoIosContacts size={'1.2em'}/>,
    label: 'Roles',
    to: '/dashboard/roles'
  }
]