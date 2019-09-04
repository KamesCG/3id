import React from "react";
import Icons, {
  IoMdWallet,IoMdSettings, IoMdTimer, IoMdPulse, IoIosGift,
  IoIosContacts, IoIosFiling, IoIosFunnel, IoIosCash, IoIosAnalytics, IoIosCart, IoMdPie,
  IoIosAddCircleOutline, IoIosLogOut, IoIosHome, IoIosSettings, IoIosTimer, IoIosPulse, IoIosPie } from 'react-icons/io';


export default id => ([
  {
    icon: <IoIosTimer size={'1.2em'}/>,
    label: 'Activity',
    to: `/dashboard/user/${id}`,
  },
  {
    icon: <IoIosCash size={'1.2em'}/>,
    label: 'Billing',
    to: `/dashboard/user/${id}/billing`,
  },
  {
    icon: <IoIosPulse size={'1.2em'}/>,
    label: 'Campaigns',
    to: `/dashboard/user/${id}/campaigns`,
  },
  {
    icon: <IoIosFiling size={'1.2em'}/>,
    label: 'Subscriptions',
    to: `/dashboard/user/${id}/subscriptions`,
  },

])