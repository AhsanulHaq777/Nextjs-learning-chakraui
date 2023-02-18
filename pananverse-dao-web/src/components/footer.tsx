"use client"
import React from 'react'
import {
    Box,
    Container,
    Text,
    SimpleGrid,
    Heading,
    Grid,
    Divider,
    Center
  } from '@chakra-ui/react';
  import Logo from '../../public/images/panaverse-logo.webp'
import Image from 'next/image';
import Link from 'next/link';
  

 export default function Footer() {
   return (
     <Box bg='gray.100' >
      <Container maxW={1300}>
        <SimpleGrid p={{lg:'40px',md:'30px',base:'20px'}} gap={{lg:'20px',md:'15px',base:'8px'}} gridTemplateColumns={{base:'repeat(1,1fr)', md:'repeat(2,1fr)', lg:'repeat(4,1fr)'}}>
          <Box>
            <Grid justifyItems={{base:'center' ,md:'initial',lg:'initial'}}>
              <Image height={90} width={90} src={Logo} alt='panaverse-dao' />
              <Text textAlign={{base:'center',md:'initial',lg:'initial'}} mt='10px'>Earn while your learn. And play your role to make Pakistan stable.</Text>
            </Grid>
          </Box>
          <Box textAlign={{base:'center',md:'initial',lg:'initial'}}>
            <Grid >
              <Heading fontSize='lg' mb='20px'>Services</Heading>
              <Link href='about'>About us</Link>
              <Link href='course'>Cources</Link>
              <Link href=''>Others</Link>
            </Grid>
          </Box>
          <Box textAlign={{base:'center',md:'initial',lg:'initial'}}>
            <Grid>
              <Heading fontSize='lg' mb='20px'>Company</Heading>
              <Link href='contact'>Contac Us</Link>
              <Link href=''>Terms of Use</Link>
              <Link href=''>Help</Link>
            </Grid>
          </Box>
          <Box textAlign={{base:'center',md:'initial',lg:'initial'}}>
            <Grid>
              <Heading fontSize='lg' mb='20px'>Social</Heading>
              <Link href=''>Facebook</Link>
              <Link href=''>Twitter</Link>
              <Link href=''>Youtube</Link>
            </Grid>
          </Box>
        </SimpleGrid>
        <Divider borderColor='gray.300'/>
        <Center py='20px'>
          <Text>© 2023 Panaverse Dao. All rights reserved.</Text>
        </Center>
      </Container>
     </Box>
   )
 }
 




















































  
  // const SocialButton = ({
  //   children,
  //   label,
  //   href,
  // }: {
  //   children: ReactNode;
  //   label: string;
  //   href: string;
  // }) => {
  //   return (
  //     <chakra.button
  //       bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
  //       rounded={'full'}
  //       w={8}
  //       h={8}
  //       cursor={'pointer'}
  //       as={'a'}
  //       href={href}
  //       display={'inline-flex'}
  //       alignItems={'center'}
  //       justifyContent={'center'}
  //       transition={'background 0.3s ease'}
  //       _hover={{
  //         bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
  //       }}>
  //       <VisuallyHidden>{label}</VisuallyHidden>
  //       {children}
  //     </chakra.button>
  //   );
  // };
  
  // export default function Footer() {
  //   return (
  //     <Box
  //       bg={useColorModeValue('gray.50', 'gray.900')}
  //       color={useColorModeValue('gray.700', 'gray.200')}>
  //       <Container
  //         as={Stack}
  //         maxW={'6xl'}
  //         py={4}
  //         spacing={4}
  //         justify={'center'}
  //         align={'center'}>
  //         <Image  src={Logo.src} h="100px" />
               
  //         <Stack direction={'row'} spacing={6}>
  //           <Link href='/'>Home</Link>
  //           <Link href='about'>Cources</Link>
  //           <Link href='#'>About</Link>
  //           <Link href='#'>Contact</Link>
  //         </Stack>
  //       </Container>
  
  //       <Box
  //         borderTopWidth={1}
  //         borderStyle={'solid'}
  //         borderColor={useColorModeValue('gray.200', 'gray.700')}>
  //         <Container
  //           as={Stack}
  //           maxW={'6xl'}
  //           py={4}
  //           direction={{ base: 'column', md: 'row' }}
  //           spacing={4}
  //           justify={{ base: 'center', md: 'space-between' }}
  //           align={{ base: 'center', md: 'center' }}>
  //           <Text>© 2023 Panaverse Dao. All rights reserved</Text>
  //           <Stack direction={'row'} spacing={6}>
  //             <SocialButton label={'Twitter'} href={'#'}>
  //               <FaTwitter />
  //             </SocialButton>
  //             <SocialButton label={'YouTube'} href={'#'}>
  //               <FaYoutube />
  //             </SocialButton>
  //             <SocialButton label={'Instagram'} href={'#'}>
  //               <FaInstagram />
  //             </SocialButton>
  //           </Stack>
  //         </Container>
  //       </Box>
  //     </Box>
  //   );
  // }