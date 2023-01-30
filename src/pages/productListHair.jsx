import React from 'react'
import { BsHeart } from "react-icons/bs";
import {Center,Box,Image,Stack,Heading,Text,useColorModeValue,Flex,Button,Circle} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import ProductModal from "../Pages/ProductModal";
// import {Link} from 'react-router-dom'

const ProductListHair=({image,title,price,rating,count,id,el})=> {

    return (
      <Center py={12}>
        
        <Box role={'group'}  maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          
          <BsHeart
              size="22px"
               bg="red.200"
            />
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
             
              src={image}
            />
         
          <Stack pt={10} align={'center'}>
           
            <Text fontSize={'l'} fontFamily={'body'} fontWeight={500} textAlign={'center'}>
             {title}
            </Text>

            <Flex color="#191817" >
                {Rating({rating:Number(rating)})} 
                <Box as="span" color={'gray.600'} fontSize="lg">
                {count}
              </Box>
            </Flex>

            <Stack direction={'column'} align={'center'}>
            <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text>
              <Text fontWeight={800} fontSize={'xl'}>
              ${price}
              </Text>
              </Stack>
              <Box width='100%' p='0.5rem' cursor='pointer' >
                {/* <Link to={`/HairPage/${id}`}> */}
              <Box
                  // loadingText="Submitting"
                  //   size="lg"
                  //   width= '100%'
                  //   height='40px'
                  //  color="white"
                  //  p='5px'
                  //  textAlign={'center'}
                  //  backgroundColor="#242830" border="1px solid"
                  // _hover={{bg: 'grey',color: 'white'}}
                  // onClick={()=>handelClick(el)}
                  >
                    <ProductModal el={el}/>
                 {/* QUICK BUY */}
                </Box>
                
              </Box>
          </Stack>
        </Box>
      </Center>
    );
  }

  export default ProductListHair

  function Rating({ rating }) {
    return (
      <Box display='flex' alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                 
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
       
      </Box>
    );
  }
  