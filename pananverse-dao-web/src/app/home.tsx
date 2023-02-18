"use client"
import {Box,Grid, Highlight,Avatar, AvatarBadge, AvatarGroup, Card, CardBody, CardHeader, CardFooter, Flex, Spacer, Center,Text, Image, Button, Heading, GridItem, Container, SimpleGrid} from '@chakra-ui/react'
import Link from 'next/link'
import Images from 'next/image'
import style from './home.module.css';



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
                            <Heading mt={{lg:'60px',md:'45px', base:'30px'}} fontFamily='mina' fontWeight='800' fontSize='50px'>
                                <Highlight query='Earn while you learn' styles={{ px: '2', py: '2', bg: 'red.500' ,color:'#FCDC3E' }}>
                                    Program is a nutshell: Earn while you learn
                                    {/* <i className={style.earn}>Earn while you learn</i> */}
                                </Highlight>
                                
                            </Heading>
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
            <Box>
                <Container maxW={1350} p={{lg:'30px',md:'20px',base:'15'}}>
                    <Box textAlign='center'>
                        <Heading mt={{lg:'60px',md:'45px', base:'30px'}} color='#FCDC3E' fontFamily='mina' fontWeight='800' fontSize='35px' letterSpacing='0.03em'> <span className={style.panaverse}>Panaverse</span> Cources</Heading>
                    </Box>
                    <SimpleGrid mt={{lg:'50px',md:'30px',base:'15px'}} gap={{lg:'20px',md:'15px',base:'10px'}} gridTemplateColumns={{lg:'repeat(4,1fr)',md:'repeat(2,1fr)',base:'repeat(1,1fr)'}}>
                        <Card align='center' bg='#006450' color='#FCDC3E' shadow='2xl'>
                            <CardHeader>
                                <Heading size='md'> Web 3.0 & Metaverse</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>This Web 3.0 specialization focuses on developing full-stack Web 3.0 experiences for the next generation of the internet.</Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='course'><Button colorScheme='#FCDC3E' variant='outline' _hover={{ bg: "#FCDC3E", color: "#006450" }} _focus={{ boxShadow: "outline" }} >Explore</Button></Link>
                            </CardFooter>
                        </Card>
                        <Card align='center' bg='#FCDC3E' color='#006450' shadow='2xl'>
                            <CardHeader>
                                <Heading size='md'> BlockChain</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.</Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='course'><Button colorScheme='#FCDC3E' variant='outline' _hover={{ bg: "#006450", color: "#FCDC3E" }} _focus={{ boxShadow: "outline" }}>Explore</Button></Link>
                            </CardFooter>
                        </Card>
                        <Card align='center' bg='#006450' color='#FCDC3E' shadow='2xl'>
                            <CardHeader>
                                <Heading size='md'> Artificail Intelligence</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='course'><Button colorScheme='#FCDC3E' variant='outline' _hover={{ bg: "#FCDC3E", color: "#006450" }} _focus={{ boxShadow: "outline" }}>Explore</Button></Link>
                            </CardFooter>
                        </Card>
                        <Card align='center' bg='#FCDC3E' color='#006450' shadow='2xl'>
                            <CardHeader>
                                <Heading size='md'> Cloud Computing</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='course'><Button colorScheme='#FCDC3E' variant='outline' _hover={{ bg: "#006450", color: "#FCDC3E" }} _focus={{ boxShadow: "outline" }}>Explore</Button></Link>
                            </CardFooter>
                        </Card>
                        <Card align='center' bg='#FCDC3E' color='#006450' shadow='2xl'>
                            <CardHeader>
                                <Heading size='md'> Ambient Computing </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Roll your own API to easily connect with other apps or services. Pull in updates.</Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='course'><Button colorScheme='#FCDC3E' variant='outline' _hover={{ bg: "#006450", color: "#FCDC3E" }} _focus={{ boxShadow: "outline" }}>Explore</Button></Link>
                            </CardFooter>
                        </Card>
                        <Card align='center' bg='#006450' color='#FCDC3E' shadow='2xl'>
                            <CardHeader>
                                <Heading size='md'> Genomics & Bioinformatics</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved.</Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='course'><Button colorScheme='#FCDC3E' variant='outline' _hover={{ bg: "#FCDC3E", color: "#006450" }} _focus={{ boxShadow: "outline" }}>Explore</Button></Link>
                            </CardFooter>
                        </Card>
                        <Card align='center' bg='#FCDC3E' color='#006450' shadow='2xl'>
                            <CardHeader>
                                <Heading size='md'> Network Programmability & Automation</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile.</Text>
                            </CardBody>
                            <CardFooter>
                                <Link href='course'><Button colorScheme='#FCDC3E' variant='outline' _hover={{ bg: "#006450", color: "#FCDC3E" }} _focus={{ boxShadow: "outline" }}>Explore</Button></Link>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </Container>
            </Box>
            <Box mb='10'>
                <Container maxW={1350} p={{lg:'30px',md:'20px',base:'15'}}>
                    <Box textAlign='center'>
                        <Heading mt={{lg:'60px',md:'45px', base:'30px'}} color='#FCDC3E' fontFamily='mina' fontWeight='800' fontSize='35px' letterSpacing='0.03em'> <span className={style.panaverse}>Panaverse</span> Instructors</Heading>
                    </Box>
                    <SimpleGrid mt={{lg:'50px',md:'30px',base:'15px'}} gap={{lg:'20px',md:'15px',base:'10px'}} gridTemplateColumns={{lg:'repeat(5,1fr)',md:'repeat(3,1fr)',base:'repeat(1,1fr)'}}>
                        <Box textAlign={'center'}>
                            <Avatar size='xl' name='Zia Khan' src='/images/zia.jpg' />
                            <Heading mt='5' size='md' color='#006450'>Zia Khan</Heading>
                            <Text color='#FCDC3E'>COO PIAIC | PanaCloud | Panaverse</Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Avatar size='xl' name='Zeeshan Hanif' src='/images/zeeshan.jfif' />
                            <Heading mt='5' size='md' color='#006450'>Zeeshan Hanif</Heading>
                            <Text color='#FCDC3E'>COO PIAIC | PanaCloud | Panaverse</Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Avatar size='xl' name='Daniyal Nagori' src='/images/danial.jfif' />
                            <Heading mt='5' size='md' color='#006450'>Daniyal Nagori</Heading>
                            <Text color='#FCDC3E'>COO PIAIC | PanaCloud | Panaverse</Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Avatar size='xl' name='Adil Altaf' src='/images/adil.jfif' />
                            <Heading mt='5' size='md' color='#006450'>Adil Altaf</Heading>
                            <Text color='#FCDC3E'>COO PIAIC | PanaCloud | Panaverse</Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Avatar size='xl' name='Hira Khan' src='/images/hira.jpg' />
                            <Heading mt='5' size='md' color='#006450'>Hira Khan</Heading>
                            <Text color='#FCDC3E'>COO PIAIC | PanaCloud | Panaverse</Text>
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