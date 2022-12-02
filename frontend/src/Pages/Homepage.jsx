import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";

function Homepage() {
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const loadpost = async () => {
      setloading(false);
      const res = await axios.get("http://localhost:8080/posts");

      setposts(res.data);
      // console.log(res.data)
      // console.log('post',posts)
      setloading(false);
    };
    loadpost();
  }, []);

  if (loading) {
    return <>..loading</>;
  } else {
    return (
      <Stack bg='purple.100'>
       <Text fontSize='4xl' as='citi'>Blogopedia</Text>
       
        {posts?.map((el) => (
          <SimpleGrid key={el.id} columns={[1, 1, 2, 2]} bg='red.100' mt='20px'>
            <Image boxSize="500px" marginLeft="100px" src={el.image}></Image>
            <VStack margin='40px'>
               <Text fontSize="4xl">{el.title}</Text>
            <Text as='cite'>{el.description}</Text>
            </VStack>
           
          </SimpleGrid>
        ))}
      </Stack>
    );
  }
}

export default Homepage;
