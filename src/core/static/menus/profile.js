import React, { useState } from "react";
import { iconBilling, iconBuilding, iconCampaign, iconDashboard, iconDirectory } from 'assets/images'
import Icons, {
  IoMdWallet,IoMdSettings, IoMdTimer, IoMdPulse, IoIosGift,
  IoIosContacts, IoIosFiling, IoIosFunnel, IoIosCash, IoIosAnalytics, IoIosCart, IoMdPie,
  IoIosAddCircleOutline, IoIosLogOut, IoIosHome, IoIosSettings, IoIosTimer, IoIosPulse, IoIosPie } from 'react-icons/io';


export default id => ([
  {
    icon: <IoIosTimer size={'1.2em'}/>,
    label: 'Badges',
    to: `/profile/${id}/badges`,
  },
  {
    icon: <IoIosPie size={'1.2em'}/>,
    label: 'Services',
    to: `/profile/${id}/services`,
  },
  {
    icon: <IoIosPulse size={'1.2em'}/>,
    label: 'Spaces',
    to: `/profile/${id}/spaces`,
  },
  {
    icon: <IoIosFiling size={'1.2em'}/>,
    label: 'Settings',
    to: `/profile/${id}/settings`,
  },

])