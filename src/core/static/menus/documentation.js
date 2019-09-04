import React, { useState } from "react";
import { iconBilling, iconBuilding, iconCampaign, iconDashboard, iconDirectory } from 'assets/images'
import Icons, {
  IoMdWallet,IoMdSettings, IoMdTimer, IoMdPulse, IoIosGift,
  IoIosContacts, IoIosFiling, IoIosFunnel, IoIosCash, IoIosAnalytics, IoIosCart, IoMdPie,
  IoIosAddCircleOutline, IoIosLogOut, IoIosHome, IoIosSettings, IoIosTimer } from 'react-icons/io';

export default [
  {
    icon: <IoIosAnalytics size={'1.2em'}/>,
    label: 'Overview',
    to: '/documentation'
  },
  {
    icon: <IoMdPulse size={'1.2em'}/>,
    label: 'API',
    to: '/documentation/api'
  },
  {
    icon: <IoMdPie size={'1.2em'}/>,
    label: 'Guides',
    to: '/documentation/guides'
  },
  {
    icon: <IoIosTimer size={'1.2em'}/>,
    label: 'Tutorials',
    to: '/documentation/tutorials'
  },
]