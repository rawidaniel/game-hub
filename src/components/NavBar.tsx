import { HStack, Image, Text } from "@chakra-ui/react";
import logog from "../assets/logo.webp";

function NavBar() {
  return (
    <HStack>
      <Image src={logog} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
}

export default NavBar;
