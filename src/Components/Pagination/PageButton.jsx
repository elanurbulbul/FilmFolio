import React from "react";
import { Button } from "@chakra-ui/react";

const PageButton = ({ num, isCurrent, onClick }) => {
  return (
    <Button
      onClick={onClick}
      mx={1}
      variant={isCurrent ? "solid" : "outline"}
      isDisabled={num === '...'}
    >
      {num}
    </Button>
  );
};

export default PageButton;
