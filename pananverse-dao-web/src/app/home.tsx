"use client"
import {Box,Grid, Flex, Spacer, Center,Text, Image, Button, Heading, GridItem, Container, SimpleGrid} from '@chakra-ui/react'
import Images from 'next/image'



export default function MainPage(){
    return(
        <>
            <Box color='#FCDC3E' bg='#006450'>
                <Container maxWidth='full'>
                    <SimpleGrid  p={{lg:'90px', md:'50px',base:'30px'}}  gridTemplateColumns={{base:'repeat(1,1fr)', md:'repeat(2,1fr)', lg:'repeat(2,1fr)'}} gap={{lg:'20px',md:'15px',base:'5px'}}>
                        <Box mt={{lg:'initial', md:'42px',base:'60px'}} >
                            <Grid ml={{lg:'60px'}} mt={{lg:'30px', md:'30px'}}>
                                <Text textAlign={{base:'center',md:'initial',lg:'initial'}} fontFamily='mina' fontWeight='400' fontSize='20px'>Get ready for the next generation of internet</Text>
                                <Text textAlign={{base:'center',md:'initial',lg:'initial'}} mt={{lg:'35px', md:'42px',base:'20px'}} fontFamily='mina' fontWeight='800' fontSize='40px' letterSpacing='0.03em'>Certified Web 3.0 and Metaverse <br/> Developer Program</Text>
                                <Box mt='25px' textAlign={{lg:'initial', md:'initial', base:'center'}}>
                                    <Button colorScheme='#FCDC3E' variant='outline' _hover={{ bg: "#FCDC3E", color: "#006450" }} _focus={{ boxShadow: "outline" }}> Get Started </Button>
                                </Box>
                            </Grid>
                        </Box>
                        <Box mt={{lg:'initial', md:'42px',base:'60px'}} pl={{lg:'60px'}} display={{lg:'flex',md:'flex'}}>
                            <Images priority src="/images/landing.svg" width={600} height={500} alt="image1"/>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>
            {/* <Flex h='656px' w='100%' bg='#006450' p='50px' color='#FCDC3E'>
                <Box w='630px' h='590px' ml='110px' p='2px'>
                    <Box mt='56px' ml='25px' fontFamily='mina' fontWeight='400' fontSize='20px'>
                        Get ready for the next generation of internet
                    </Box>
                    <Box as='h1' mt='35px' ml='25px' fontFamily='mina' fontWeight='800' fontSize='40px' letterSpacing='0.03em'>
                        Certified Web 3.0 and Metaverse <br/>
                        Developer Program
                    </Box>
                    <Box mt='25px' ml='30px'>
                        <Button colorScheme='#FCDC3E' variant='outline'> Get Started </Button>
                    </Box>
                </Box>
                <Spacer />
                <Box mt='40px' mr='20px'>
                    <Images priority src="/images/landing.svg" width={600} height={500} alt=""/>
                </Box>
            </Flex> */}
            <Box color='#006450' bg='#FCDC3E'>
                <Container maxW='full' p={{lg:'50px',md:'35px',base:'20'}}>
                        <Box textAlign='center'>
                            <Heading mt={{lg:'60px',md:'45px', base:'30px'}} fontFamily='mina' fontWeight='800' fontSize='50px'>Program is a nutshell: Earn while you learn</Heading>
                        </Box>
                    <SimpleGrid  gridTemplateColumns={{base:'repeat(1,1fr)', md:'repeat(2,1fr)', lg:'repeat(2,1fr)'}} gap={{lg:'20px',md:'15px',base:'5px'}}>
                        <Box ml={{lg:'60px'}} display={{lg:'flex',md:'flex',base:'flex'}}>
                            <Grid mt={{lg:'160px',md:'90px',base:'50px'}} textAlign={{base:'center',md:'initial',lg:'initial'}}>
                                <Text fontFamily='mina' fontWeight='800' fontSize='35px' letterSpacing='0.03em'>One and quarter years Panaverse Dao earn as you learn program</Text>
                                <Text  mt='2px' fontFamily='mina' fontWeight='400' fontSize='20px' letterSpacing='0.03em'>In this brand new type of curriculum, students will learn how to make
                                    money and boost exports in the classroom and will begin doing so
                                    within six months of the program’s beginning. <br/>
                                    It resembles a cross between a corporate venture and an educational
                                    projects. 
                                </Text>
                            </Grid>
                        </Box>
                        <Box mt={{lg:'60px',md:'60px',base:'10px'}} pl={{lg:'60px'}} display={{lg:'flex',md:'flex'}}>
                        <Image src="/images/dollarss.png" mixBlendMode= 'multiply' width={600} height={500} alt="image2"/>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>
            {/* <Grid  
                    bg='#FCDC3E'
                    color='#006450'
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(4, 1fr)'
                p='50px'>
                <GridItem  colSpan={4}>
                    <Box  as='h1' textAlign='center' mt={{lg:'60px',md:'45px', base:'30px'}} fontFamily='mina' fontWeight='800' fontSize='50px'>
                        Program is a nutshell: Earn while you learn
                    </Box>
                </GridItem>
                <GridItem  colSpan={{lg:2,md:3,base:4}}>
                    <Box as='h2' ml='135px' mt={{lg:'70px',md:'0px',base:'0px'}} fontFamily='mina' fontWeight='800' fontSize='35px' letterSpacing='0.03em'>
                        One and quarter years Panaverse Dao
                        earn as you learn program
                    </Box>
                </GridItem>
                <GridItem  rowSpan={{lg:2,md:3, base:3}} colSpan={{lg:2,md:3,base:4}}>
                    <Box mt='10px' mr='20px'>
                        <Image src="/images/dollarss.png" mixBlendMode= 'multiply' width={600} height={500} alt=""/>
                    </Box>
                </GridItem>
                <GridItem  colSpan={{lg:2,md:3,base:4}}>
                    <Box pr='10px' ml='135px' mt='5px' fontFamily='mina' fontWeight='400' fontSize='20px' letterSpacing='0.03em'>
                        In this brand new type of curriculum, students will learn how to make
                        money and boost exports in the classroom and will begin doing so
                        within six months of the program’s beginning. <br/>
                        It resembles a cross between a corporate venture and an educational
                        projects. 
                    </Box>
                </GridItem>
            </Grid> */}
        </> 
    )
}