
/* --- Global Dependencies --- */
import idx from 'idx'
import React from "react";

/* --- Local Dependencies --- */
import { Avatar, Absolute, Box, Flex, Heading, Span,  } from "atomic";
import { GenerateImage } from 'helpers/ipfs'
/* ------- Component ------- */
export default ({name, image, job, employer, description }) => 
!name ? <div></div>
// : <div>{console.log(box, 'profile card')}</div>
:<Flex rounded column bg='#0000004f !important' color='white' p={30} flex={4} maxWidth={[300]}>
    <Absolute top={-40} right={-60}>
      <Avatar src={GenerateImage(image)} width={120}/>
    </Absolute>
  <Heading color='white' heavy fontSize={[3,3,4]}>
    {name}
  </Heading>
  <Span color='white' heavy fontSize={[2]}>	{job}</Span>
  <Span color='white' thin fontSize={[2]}>	{employer}</Span>
  <Flex between my={20}>
    {/* {
      verifications &&
      verifications.map( v => VerificationTypes(v.id, v.verified))
    } */}
  </Flex>
  <p>{description}</p>
  <Box mt={20}>
    <Heading sm thin>Contact</Heading>
    {/* <Span color='white' fontSize={[2]}>	{email}</Span> */}
  </Box>
</Flex>


// export default ({box}) => 
// :<Flex rounded column bg='#0000004f !important' color='white' p={30} flex={4} maxWidth={[300]}>
//     <Absolute top={-40} right={-60}>
//       <Avatar src={GenerateImage(idx(box, _=>_.profile.image))} width={120}/>
//     </Absolute>
//   <Heading color='white' heavy fontSize={[3,3,4]}>
//     {idx(box, _=>_.profile.name)}
//   </Heading>
//   <Span color='white' heavy fontSize={[2]}>	{idx(box, _=>_.profile.job)}</Span>
//   <Span color='white' thin fontSize={[2]}>	{idx(box, _=>_.profile.employer)}</Span>
//   <Flex between my={20}>
//     {/* {
//       verifications &&
//       verifications.map( v => VerificationTypes(v.id, v.verified))
//     } */}
//   </Flex>
//   <p>{idx(box, _=>_.profile.description)}</p>
//   <Box mt={20}>
//     <Heading sm thin>Contact</Heading>
//     {/* <Span color='white' fontSize={[2]}>	{email}</Span> */}
//   </Box>
// </Flex>