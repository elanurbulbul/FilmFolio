import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Card from "./card";

const List = ({ people }) => {
  return (
    
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl:5 }} spacing={5}>
        {people.map(person => (
          <Card key={person.id} person={person} />
        ))}
      </SimpleGrid>
    
  );
};

export default List;
