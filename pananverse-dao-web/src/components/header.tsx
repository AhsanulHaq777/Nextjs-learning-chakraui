"use client";
import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Image,
  Center
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Logo from '../../public/images/logo.jpeg'


 const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <Flex>
      <Flex
        // position="fixed"
        // top="1rem"
        // right="1rem"
        w="100%"
        px="6"
        py="1"
        align="center"
        justify="space-between"
        bg='#006450'
        boxShadow=' 0px 4px 5px rgba(0, 0, 0, 0.25)'
      >
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
            <NextLink href="/" passHref >
              
                <Image  src={Logo.src} h="100px"
               aria-label="Home"
               position='relative'
              w="100%"/>
           
            
            </NextLink>
            

          <NextLink href="/" passHref>
            <Button
               
              variant="outline"
              aria-label="Home"
              m={5}
              w="100%"
            >
              Home
                    </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button
               
              variant="outline"
              aria-label="About"
              m={5}
              w="100%"
            >
              About
                    </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button
               
              variant="outline"
              aria-label="Contact"
              m={5}
              w="100%"
            >
              Contact
                    </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <NextLink href="/" passHref>
            <Button
               
              variant="outline"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
                    </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button
               
              variant="outline"
              aria-label="About"
              my={5}
              w="100%"
            >
              About
                    </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button
               
              variant="outline"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Contact
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header;