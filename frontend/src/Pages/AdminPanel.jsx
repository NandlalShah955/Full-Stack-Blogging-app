import React from "react";
import { SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";

function AdminPanel() {
  return (
    <Stack>
      <Text fontSize='4xl' as='i'>Welcome to Admin Panel</Text>

      <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
        <VStack></VStack>
        <VStack></VStack>
      </SimpleGrid>
    </Stack>
  );
}

export default AdminPanel;
