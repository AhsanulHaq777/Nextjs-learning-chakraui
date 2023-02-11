"use client";
import React from 'react'
import { Box, Button, Container, Flex, SimpleGrid } from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/images/panaverse-logo.webp'

export default function Header() {
  return (  
    <Box boxShadow='2xl' bg='#006450'>
      <Container maxW={1600}>
        <SimpleGrid templateColumns={{base:'repeat(2,1fr)', md:'repeat(2,1fr)', lg:'repeat(3,1fr)',}}>
          <Box py='5px'>
            <Image src={Logo} alt='panaverse logo'/>
          </Box>
          <Flex display={{lg:'flex', md:'none', base:'none'}} placeItems='center' color='#FCDC3E' fontWeight='semibold' fontSize={18} gap={8}>
            <Link href='/'>Home</Link>
            <Link href='/'>Cources</Link>
            <Link href='about'>About</Link>
            <Link href=''>Contact</Link>
          </Flex>
          <Box display={{lg:'initial', md:'none', base:'none'}} mt='21px' color='#FCDC3E' >
            <Button colorScheme='#FCDC3E' variant='outline' float='right'_hover={{ bg: "#FCDC3E", color: "#006450" }} _focus={{ boxShadow: "outline" }}>Get Enrolled</Button>
          </Box>
          <Box display={{lg:'none', md:'initial', base:'initial'}} mt='21px' color='#FCDC3E' >
            <Button colorScheme='#FCDC3E' variant='outline' float='right'_hover={{ bg: "#FCDC3E", color: "#006450" }} _focus={{ boxShadow: "outline" }}><HamburgerIcon/></Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}





































































// import { useState } from 'react'
// import {
//   useColorMode,
//   Switch,
//   Flex,
//   Button,
//   IconButton,
//   Image,
//   Center
// } from '@chakra-ui/react'
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
// import NextLink from 'next/link'
// import Logo from '../../public/images/logo.jpeg'


// // const Header() = () => {
// //   return(
// //     <Flex>
// //       <Box>

// //       </Box>
// //     </Flex>
// //   )
// // }

// // export default Header;

//   const Header = () => {
//   const { colorMode, toggleColorMode } = useColorMode()
//   const isDark = colorMode === 'dark'
//   const [display, changeDisplay] = useState('none')
//   return (
//     <Flex>
//       <Flex
//         // position="fixed"
//         // top="1rem"
//         // right="1rem"
//         w="100%"
//         px="6"
//         py="1"
//         align="center"
//         justify="space-between"
//         bg='#006450'
//         boxShadow=' 0px 4px 5px rgba(0, 0, 0, 0.25)'
//       >
//         {/* Desktop */}
//         <Flex
//           display={['none', 'none', 'flex','flex']}
//         >
//             <NextLink href="/" passHref >
              
//                 <Image  src={Logo.src} h="100px"
//                aria-label="Home"
//                position='relative'
//               w="100%"/>
           
            
//             </NextLink>
            

//           <NextLink href="/" passHref>
//             <Button
               
//               variant="outline"
//               aria-label="Home"
//               m={5}
//               w="100%"
//             >
//               Home
//                     </Button>
//           </NextLink>

//           <NextLink href="/about" passHref>
//             <Button
               
//               variant="outline"
//               aria-label="About"
//               m={5}
//               w="100%"
//             >
//               About
//                     </Button>
//           </NextLink>

//           <NextLink href="/contact" passHref>
//             <Button
               
//               variant="outline"
//               aria-label="Contact"
//               m={5}
//               w="100%"
//             >
//               Contact
//                     </Button>
//           </NextLink>
//         </Flex>

//         {/* Mobile */}
//         <IconButton
//           aria-label="Open Menu"
//           size="lg"
//           mr={2}
//           icon={
//             <HamburgerIcon />
//           }
//           onClick={() => changeDisplay('flex')}
//           display={['flex', 'flex', 'none', 'none']}
//         />
//         <Switch
//           color="green"
//           isChecked={isDark}
//           onChange={toggleColorMode}
//         />
//       </Flex>

//       {/* Mobile Content */}
//       <Flex
//         w='100vw'
//         display={display}
//         bgColor="gray.50"
//         zIndex={20}
//         h="100vh"
//         pos="fixed"
//         top="0"
//         left="0"
//         overflowY="auto"
//         flexDir="column"
//       >
//         <Flex justify="flex-end">
//           <IconButton
//             mt={2}
//             mr={2}
//             aria-label="Open Menu"
//             size="lg"
//             icon={
//               <CloseIcon />
//             }
//             onClick={() => changeDisplay('none')}
//           />
//         </Flex>

//         <Flex
//           flexDir="column"
//           align="center"
//         >
//           <NextLink href="/" passHref>
//             <Button
               
//               variant="outline"
//               aria-label="Home"
//               my={5}
//               w="100%"
//             >
//               Home
//                     </Button>
//           </NextLink>

//           <NextLink href="/about" passHref>
//             <Button
               
//               variant="outline"
//               aria-label="About"
//               my={5}
//               w="100%"
//             >
//               About
//                     </Button>
//           </NextLink>

//           <NextLink href="/contact" passHref>
//             <Button
               
//               variant="outline"
//               aria-label="Contact"
//               my={5}
//               w="100%"
//             >
//               Contact
//             </Button>
//           </NextLink>
//         </Flex>
//       </Flex>
//     </Flex>
//   )
// }

// export default Header;