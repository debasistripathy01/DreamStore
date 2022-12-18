import React,{useState,useEffect}from 'react'
import {Box,Text,CheckboxGroup,VStack,Checkbox,Menu,MenuButton,MenuList,MenuOptionGroup,MenuItemOption,MenuDivider,Button} from '@chakra-ui/react'



const FilterComponent = ({name}) => {

  
  return (
    <Box>
      <Box display={{base:"none",md:"block"}} p="1rem 2rem" webkitScrollbar ={{ width:"10px"}}>

        {/* ------------------Brand--------------- */}
        <Text fontSize="2xl" mb='10px' align="left">Brand</Text>
        <Box border='2px solid grey' mb='10px'></Box>
        <CheckboxGroup 
        colorScheme='green' 
        // defaultValue={categoryValue} 
        // onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value="100% Pure">100% Pure(5)</Checkbox>
          <Checkbox value="AGENT NATEUR">AGENT NATEUR(2)</Checkbox>
          <Checkbox value='Alterna'>Alterna(61)</Checkbox>
          <Checkbox value='AMELIORATE'>AMELIORATE(7)</Checkbox>
          <Checkbox value='Aquis'>Aquis(4)</Checkbox>
        </VStack>
        </CheckboxGroup>

        {/* -------------{name}care Category------------- */}
        <Text fontSize="2xl" mb='10px'mt='15px' align="left">{name}care Category</Text>
        <Box border='2px solid grey' mb='10px'></Box>
        <CheckboxGroup 
        colorScheme='green' 
        // defaultValue={categoryValue} 
        // onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value="100% Pure">{name} Preparation(1063)</Checkbox>
          <Checkbox value="AGENT NATEUR">{name} Styling(362)</Checkbox>
          <Checkbox value='Alterna'>Electrical {name} Tools(91)</Checkbox>
          <Checkbox value='AMELIORATE'>{name} Brushes & Combs(57)</Checkbox>
          <Checkbox value='Aquis'>{name} Accessories(34)</Checkbox>
        </VStack>
        </CheckboxGroup>

            {/* ----------{name} Type------------ */}
        <Text fontSize="2xl" mb='10px' mt='15px' align="left">{name} Type</Text>
        <Box border='2px solid grey' mb='10px'></Box>
        <CheckboxGroup 
        colorScheme='green' 
        // defaultValue={categoryValue} 
        // onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value="100% Pure">Afro & Textured (52)</Checkbox>
          <Checkbox value="AGENT NATEUR">Afro-Caribbean (3)</Checkbox>
          <Checkbox value='Alterna'>Braided (7)</Checkbox>
          <Checkbox value='AMELIORATE'>Colored (676)</Checkbox>
          <Checkbox value='Aquis'>Curlv & Wavv (680)</Checkbox>
        </VStack>
        </CheckboxGroup>

        {/* ----------{name} Preparation Products------------ */}
          <Text fontSize="2xl" mb='10px' mt='15px' align="left">{name} Preparation Products</Text>
        <Box border='2px solid grey' mb='10px'></Box>
        <CheckboxGroup 
        colorScheme='green' 
        // defaultValue={categoryValue} 
        // onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value="100% Pure">Shampoo (364)</Checkbox>
          <Checkbox value="AGENT NATEUR">A{name} & Scalp Treatment (313)</Checkbox>
          <Checkbox value='Alterna'>Conditioner (312)</Checkbox>
          <Checkbox value='AMELIORATE'>{name} Masks (94)</Checkbox>
          <Checkbox value='Aquis'>{name} oil (60)</Checkbox>
        </VStack>
        </CheckboxGroup>


      {/* ----------Electrical {name} Tools------------ */}
      <Text fontSize="2xl" mb='10px' mt='15px' align="left">Electrical {name} Tools</Text>
        <Box border='2px solid grey' mb='10px'></Box>
        <CheckboxGroup 
        colorScheme='green' 
        // defaultValue={categoryValue} 
        // onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value="100% Pure">{name} Curler (27)</Checkbox>
          <Checkbox value="AGENT NATEUR">{name} Dryer (2)</Checkbox>
          <Checkbox value='Alterna'>{name} Straightener (21)</Checkbox>
          <Checkbox value='AMELIORATE'>{name} Waver (4)</Checkbox>
          <Checkbox value='Aquis'>Hot Brushes (4)</Checkbox>
        </VStack>
        </CheckboxGroup>

        {/* ---------- {name} Styling------------ */}
      <Text fontSize="2xl" mb='10px' mt='15px' align="left">{name} Styling</Text>
        <Box border='2px solid grey' mb='10px'></Box>
        <CheckboxGroup 
        colorScheme='green' 
        // defaultValue={categoryValue} 
        // onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value="100% Pure">Curl Enhancers (7)</Checkbox>
          <Checkbox value="AGENT NATEUR">{name} Cream (98)</Checkbox>
          <Checkbox value='Alterna'>{name} Foam (21)</Checkbox>
          <Checkbox value='AMELIORATE'>{name} Gel (31)</Checkbox>
          <Checkbox value='Aquis'>Hot Mousse (23)</Checkbox>
        </VStack>
        </CheckboxGroup>


          
        {/* ---------- {name} Care Benefit------------ */}
      <Text fontSize="2xl" mb='10px' mt='15px' align="left">{name} Care Benefit</Text>
        <Box border='2px solid grey' mb='10px'></Box>
        <CheckboxGroup 
        colorScheme='green' 
        // defaultValue={categoryValue} 
        // onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value="100% Pure">Anti-Dandruff (48)</Checkbox>
          <Checkbox value="AGENT NATEUR">Anti-Frizz (156)</Checkbox>
          <Checkbox value='Alterna'>Balancing (14)</Checkbox>
          <Checkbox value='AMELIORATE'>Color Protection (183)</Checkbox>
          <Checkbox value='Aquis'>Damage Repair (236)</Checkbox>
        </VStack>
        </CheckboxGroup>
        

           {/* ---------- {name} Dye Colour------------ */}
      <Text fontSize="2xl" mb='10px' mt='15px' align="left">{name} Dye Colour</Text>
        <Box border='2px solid grey' mb='10px'></Box>
        <CheckboxGroup 
        colorScheme='green' 
        // defaultValue={categoryValue} 
        // onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value="100% Pure">Black (2)</Checkbox>
          <Checkbox value="AGENT NATEUR">Blonde (8)</Checkbox>
          <Checkbox value='Alterna'>Blue (8)</Checkbox>
          <Checkbox value='AMELIORATE'>Brunette (8)</Checkbox>
          <Checkbox value='Aquis'>Yellow (2)</Checkbox>
        </VStack>
        </CheckboxGroup>

      </Box>
  </Box>
  )
}

export default FilterComponent