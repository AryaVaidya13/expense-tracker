import { Button, Container, HStack, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { forwardRef } from 'react';

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
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
          textTransform={"uppercase"}
        >
          <Link to="/">Expense Tracker 💸</Link>
        </Text>
        <HStack spacing={4} alignItems={"center"}>
          <Link to="/create">
          <Button>
          <AiOutlinePlusSquare fontSize={20} />
          </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar