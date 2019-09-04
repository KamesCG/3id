import React from "react";
import {
  IoMdTimer,
  IoIosContacts, IoIosFiling
} from 'react-icons/io';

export default [
  {
    icon: <IoIosContacts size={'1.2em'}/>,
    label: 'Issuers',
    to: '/issuers',
  },
  {
    icon: <IoIosFiling size={'1.2em'}/>,
    label: 'Register',
    to: '/issuers/register',
  },
  {
    icon: <IoMdTimer size={'1.2em'}/>,
    label: 'Contest',
    to: '/issuers/contest',
  },
  
]