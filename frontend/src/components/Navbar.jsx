import { Button, Container, HStack, Flex, Text, useColorMode, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const Navbar = () => {
  const {colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip={"text"}
          fontSize={{ base: "22", sm: "28" }}
          fontWeight= {"bold"}
          textAlign={"center"}
          
        >
          <Link to="/">Expense Tracker </Link>
        </Text>
        <HStack spacing={4} alignItems={"center"}>
          <Link to="/create">
          <Button>
          <AiOutlinePlusSquare fontSize={20} />
          </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar