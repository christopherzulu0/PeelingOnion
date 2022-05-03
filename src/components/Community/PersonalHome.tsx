import React from "react";
import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaReddit } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
const PersonalHome: React.FC = () => {
  return (
    <Flex
      direction="column"
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      position="sticky"
      bg="gray.100"
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        bg="blue.500"
        height="140px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
        bgImage="url('https://lh3.googleusercontent.com/6VTxmNoumpNb8JkuQROcPQr5RkxjrEtxW6tKHpfnUNPykxY2hDtz9QTc0P7t8NMaaYU6cxWmrHrJX-sTcXP8AMnGT6WRRIZS9AImSCgNSTs=s1000')"
        backgroundSize="cover"
    
      ></Flex>
      <Flex direction="column" p="12px">
        <Flex align="center" mb={2}>
          <Icon as={ImDroplet} fontSize={50} color="brand.100" mr={2} />
          <Text fontWeight={600}>Home</Text>
        </Flex>
        <Stack spacing={3}>
          <Text fontSize="9pt">
            Your personal Peeling Onion frontpage, built for you.
          </Text>
          <Button height="30px">Create Post</Button>
          <Button  bg="brand.100" height="30px">
            Create Community
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
