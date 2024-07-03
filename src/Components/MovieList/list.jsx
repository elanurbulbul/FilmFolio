import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "./card";

const List = ({ movieList }) => {
  return (
    <SimpleGrid 
    columns={{ sm: 2, md: 3, lg: 4, xl:5}} 
    spacing="4">
      {movieList.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default List;
