import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "./card";

const List = ({ movieList }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="4">
      {movieList.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default List;
