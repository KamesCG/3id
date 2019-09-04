import React from "react";
import {
  oMdTimer, IoMdPulse, IoIosGift,
  IoIosContacts, IoIosFiling, } from 'react-icons/io';

export default [
  {
    icon: <IoIosContacts size={'1.2em'}/>,
    label: 'Issuers',
    to: '/dashboard/issuers',
  },
  {
    icon: <IoIosFiling size={'1.2em'}/>,
    label: 'Register',
    to: '/dashboard/issuers/register',
  },
  {
    icon: <IoMdTimer size={'1.2em'}/>,
    label: 'Contest',
    to: '/dashboard/issuers/contest',
  },
  
]