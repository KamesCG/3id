import React, { useState } from "react";
import { iconBilling, iconBuilding, iconCampaign, iconDashboard, iconDirectory } from 'assets/images'
import Icons, {
  IoMdWallet,IoMdSettings, IoMdTimer, IoMdPulse, IoIosGift,
  IoIosContacts, IoIosFiling, IoIosFunnel, IoIosCash, IoIosAnalytics, IoIosCart, IoMdPie,
  IoIosAddCircleOutline, IoIosLogOut, IoIosHome, IoIosSettings, IoIosTimer } from 'react-icons/io';


export default [
  {
    icon: <IoIosAnalytics size={'1.2em'}/>,
    label: 'Account',
    to: '/dashboard/account'
  },
  {
    icon: <IoMdPulse size={'1.2em'}/>,
    label: 'Credentials',
    to: '/dashboard/account/credentials'
  },
  {
    icon: <IoIosFunnel size={'1.2em'}/>,
    label: 'Notifications',
    to: '/dashboard/account/notifications'
  },
  {
    icon: <IoMdPie size={'1.2em'}/>,
    label: 'Spaces',
    to: '/dashboard/account/spaces'
  },
  {
    icon: <IoMdTimer size={'1.2em'}/>,
    label: 'Threads',
    to: '/dashboard/account/threads'
  },
  {
    icon: <IoIosContacts size={'1.2em'}/>,
    label: 'Connections',
    to: '/dashboard/account/connections'
  },
  {
    icon: <IoMdSettings size={'1.2em'}/>,
    label: 'Settings',
    to: '/dashboard/account/settings'
  },

]