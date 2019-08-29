import React, { useState } from "react";
import { iconBilling, iconBuilding, iconCampaign, iconDashboard, iconDirectory } from 'assets/images'
import Icons, {
  IoMdWallet,IoMdSettings, IoMdTimer, IoMdPulse, IoIosGift,
  IoIosContacts, IoIosFiling, IoIosFunnel, IoIosCash, IoIosAnalytics, IoIosCart, IoMdPie,
  IoIosAddCircleOutline, IoIosLogOut, IoIosHome, IoIosSettings, IoIosTimer } from 'react-icons/io';

export const Items = [
  {
    icon: <IoIosAnalytics size={'1.2em'}/>,
    label: 'Dashboard',
    to: '/dashboard'
  },
  {
    icon: <IoMdPulse size={'1.2em'}/>,
    label: 'Campaigns',
    to: '/dashboard/campaigns'
  },
  {
    label: 'Billing',
    icon: <IoIosFiling size={'1.2em'}/>,
    to: '/dashboard/billing',
    children: [
      {
        label: 'Invoices',
        icon: <IoIosCash size={'1em'}/>,
        to: '/dashboard/billing/invoice',
        children: [
          {
            icon: <IoIosAddCircleOutline size={'1em'}/>,
            label: 'Create',
            to: '/dashboard/billing/invoice/create',
          },
          {
            icon: <IoIosAddCircleOutline size={'1em'}/>,
            label: 'Bulk Create',
            to: '/dashboard/billing/invoice/bulk',
          },
        ]
      },
      
      {
        label: 'Subscriptions',
        icon: <IoIosFunnel size={'1em'}/>,
        to: '/dashboard/billing/subscriptions',
        children: [
          {
            icon: <IoIosAddCircleOutline size={'1em'}/>,
            label: 'Add Plan',
            to: '/dashboard/billing/subscriptions/plan',
          },
          {
            icon: <IoIosAddCircleOutline size={'1em'}/>,
            label: 'Remove Plan',
            to: '/dashboard/billing/subscriptions',
          },
        ]
      },
      {
        label: 'Discounts',
        icon: <IoIosGift size={'1em'}/>,
        to: '/dashboard/billing/discounts',
      },
      {
        label: 'Tax Rates',
        icon: <IoIosTimer size={'1em'}/>,
        to: '/dashboard/billing/tax-rates',
      },
    ]
  },
  {
    icon: <IoIosContacts size={'1.2em'}/>,
    label: 'Customers',
    to: '/dashboard/crm',
    children: [
      {
        icon: <IoIosAddCircleOutline size={'1em'}/>,
        label: 'Contacts',
        to: '/dashboard/crm/people',
      },
      {
        icon: <IoIosAddCircleOutline size={'1em'}/>,
        label: 'Leads',
        to: '/dashboard/crm/leads',
      },
      {
        icon: <IoIosAddCircleOutline size={'1em'}/>,
        label: 'Opportunities',
        to: '/dashboard/crm/opportunities',
      },
      {
        icon: <IoIosAddCircleOutline size={'1em'}/>,
        label: 'Organizations',
        to: '/dashboard/crm/organizations',
      },
      
    ]
  },
  {
    icon: <IoIosCart size={'1.2em'}/>,
    label: 'Commerce',
    to: '/dashboard/commerce',
    children: [
      {
        icon: <IoIosAddCircleOutline size={'1em'}/>,
        label: 'Products',
        to: '/dashboard/commerce/products',
      },
      {
        icon: <IoIosAddCircleOutline size={'1em'}/>,
        label: 'Orders',
        to: '/dashboard/commerce/orders',
      },
      {
        icon: <IoIosAddCircleOutline size={'1em'}/>,
        label: 'Discounts',
        to: '/dashboard/commerce/discounts',
      },
      {
        icon: <IoIosAddCircleOutline size={'1em'}/>,
        label: 'Affiliates',
        to: '/dashboard/commerce/affiliates',
      },
      
    ]
  },
  {
    icon: <IoMdPie size={'1.2em'}/>,
    label: 'Projects',
    to: '/dashboard/projects'
  },
]