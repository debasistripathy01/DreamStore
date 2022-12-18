import React from 'react'
import {Box} from '@chakra-ui/react'
const HairTop = ({heading}) => {
  return (
    <Box border={'1px solid black'} align="left" padding='1.5rem'>
      {`Home / ${heading}`}  
    </Box>
  )
}

export default HairTop
