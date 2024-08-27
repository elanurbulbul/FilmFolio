import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {

  Container,

} from "@chakra-ui/react";
import AddWatchList from "../../Components/AddWatchList";

const WatchList = () => {


  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.lg",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <AddWatchList/>
    </Container>
  );
};

export default WatchList;
