/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import { Box, Button, Flex, Heading, HorizontalRule, Image, Span } from 'atoms'

import { mapExample } from 'assets/images'
/* --- React Component --- */
class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: Data[this.props.id].name,
      type: Data[this.props.id].type,
      status: Data[this.props.id].status,
      contact: Data[this.props.id].contact,
      campaigns: Data[this.props.id].campaigns,
      contact: Data[this.props.id].contact
    }
  }

  componentDidMount()
  {
    console.log(this.props, 'organization')
  }
  
  /* Will Update */
  componentWillUpdate()
  {

  }

  /* Did Update */
  componentDidUpdate()
  {

  }

  /* Will Mount */
  componentWillUnmount()
  {

  }


  render(){
    return(
      <Box>
        <Heading color='blue' fontSize={[3,3,5]}>
          {this.state.name}
        </Heading>
        <Flex>
          <Span fontSize={1} mr={15}><strong>campaigns:</strong> {this.state.campaigns.count}</Span>
          <Span fontSize={1} mr={15}><strong>type:</strong> {this.state.type}</Span>
          <Span fontSize={1}><strong>status:</strong> {this.state.status}</Span>
        </Flex>
        <HorizontalRule my={20}/>
        <Flex between>
          <Box width={[1,1,0.6]}>
            <Campaigns/>
          </Box>
          <Box width={[1,1,0.35]}>
            <ContactInformation contact={this.state.contact}/>
            <AnalyticsInformation/>
            <InvoiceInformation/>
          </Box>
        </Flex>

        <Image src={mapExample} width={1}/>
      </Box>
    )
  }
}

const ContactInformation = ({ contact }) =>
<Box boxShadow={0} borderRadius={10} gradient='white' p={15} >
  <Heading fontSize={[3]}>
    Contact
  </Heading>
  <HorizontalRule/>
  <Flex column>
    <Span fontSize={1} mr={15}><strong>phone:</strong> {contact.phone}</Span>
    <Span fontSize={1}><strong>email:</strong> {contact.email}</Span>
    <Span fontSize={1}><strong>site:</strong> {contact.site}</Span>
  </Flex>
</Box>

const InvoiceInformation = ({ contact }) =>
<Box boxShadow={0} borderRadius={10} gradient='white' mt={25} p={15} >
  <Heading fontSize={[3]}>
    Billing
  </Heading>
  <HorizontalRule/>
  <Flex column>
    
  </Flex>
</Box>

const AnalyticsInformation = ({ contact }) =>
<Box boxShadow={0} borderRadius={10} gradient='white' mt={25} p={15} >
  <Heading fontSize={[3]}>
    Analytics
  </Heading>
  <HorizontalRule/>
  <Flex column>
    
  </Flex>
</Box>

const Campaigns = props =>
<Flex column boxShadow={0} borderRadius={10} gradient='white' p={15}>
  {DataCampaigns.map( i => <CampaignItem {...i}/>)}
</Flex>

const CampaignItem = ({ analytics, budget, dateStart, dateEnd, name, type, managers }) =>
<Flex column borderBottom='1px solid' borderColor='gray' py={25}>
  <Flex between>
    <Flex column>
      <Heading color='blue' fontSize={[3]} fontWeight={300}>
        Campaign Name: <strong>{name}</strong>
      </Heading>
      <Span fontSize={2} mr={15}><strong>Monthly Budget:</strong> <Span color='green'>${budget}</Span></Span> 
    </Flex>
    <Box>
      <Button mb={15}>Full Details</Button>
    </Box>
  </Flex>
  <HorizontalRule my={10} width={20}/>
  <Flex width={1}>
    <Flex column width={[1,1, 0.3333]} >
      <Heading color='green' fontSize={[1]}>
        Analytics
      </Heading>
      <Span fontSize={1} mr={15}><strong>Total Calls:</strong> {analytics.callsInboundTotal}</Span>
      <Span fontSize={1} mr={15}><strong>Weekly (Avg) Calls:</strong> {analytics.callsInboundWeek}</Span>
      <Span fontSize={1} mr={15}><strong>Today's Call :</strong> {analytics.callsInboundDay}</Span>
    </Flex>
    <Flex column mx={30} width={[1,1, 0.3333]} >
      <Heading color='green' fontSize={[1]}>
        Details
      </Heading>
      <Span fontSize={1} mr={15}><strong>Date Start:</strong> {dateStart}</Span>
      <Span fontSize={1} mr={15}><strong>Date End:</strong> {dateEnd}</Span>
    </Flex>
    <Managers managers={managers}/>
  </Flex>
</Flex>

const Managers = ({managers}) => 
<Flex column width={[1,1, 0.4333]}>
  <Heading color='green' fontSize={[1]}>
    Administrators
  </Heading>
  {managers.map( m => <Span fontSize={1} mr='5px'><strong>{m.name}:</strong> {m.role}</Span>,) }
</Flex>

const DataCampaigns = [
  {
    analytics: {
      callsInboundTotal: '124',
      callsInboundWeek: '15',
      callsInboundDay: '4'
    },
    budget: '450',
    dateStart: 'February 21, 2019',
    dateEnd: 'November 21,  2019',
    name: 'Weekend Special',
    managers: [
      {
        name: 'Kames Geraghty',
        role: 'Ads Manager'
      },
      {
        name: 'Sarah Johnstone',
        role: 'Account Specialist'
      }
    ]
  },
  {
    analytics: {
      callsInboundTotal: '124',
      callsInboundWeek: '15',
      callsInboundDay: '4'
    },
    budget: '150',
    dateStart: 'October 15, 2019',
    dateEnd: 'November 31, 2019',
    name: 'Halloween Discount',
    managers: [
      {
        name: 'Kames',
        role: 'Manager'
      }
    ]
  },
  {
    analytics: {
      callsInboundTotal: '124',
      callsInboundWeek: '15',
      callsInboundDay: '4'
    },
    budget: '450',
    dateStart: 'February 21, 2019',
    dateEnd: 'November 21, 2019',
    name: 'Weekend Special',
    managers: [
      {
        name: 'Kames',
        role: 'Manager'
      }
    ]
  },
]


const Data = {
  sals: {
    alias: '1fhbkalqw',
    address: {
      city: 'Honolulu',
      street: '122 Ocean Blvd ',
      state: 'Hawaii',
      zip: '94503',
    },
    name: 'Sunrise Surf Rentals',
    status: 'verified',
    campaigns: {
      count: '3',
      items: [
        '1bfkd',
        '2bfkd',
        '3bfkd',
      ]
    },
    contact: {
      email: 'info@salssurfrentals.com',
      phone: '(555) 444-1234',
      site: 'https://www.salssurfrentals.com',
    },
    social: {
      facebook: '',
      instagram: '',
      twitter: '',
    },
    type: 'travel',
  }
}


export default ClassComponent