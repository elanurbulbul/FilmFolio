import React, { useRef, useState, useEffect } from "react";
import { Box, Image, Text, Button, Flex, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Card = ({ person }) => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDetailClick = () => {
    navigate(`/people/${person.id}`);
  };

  useEffect(() => {
    if (textRef.current) {
      setIsTooltipVisible(
        textRef.current.scrollWidth > textRef.current.clientWidth
      );
    }
  }, [person.name]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image
      height="400px"
        width="100%"
        borderTopRadius="8px"
        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
        alt={person.name}
      />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p="4"
      >
        <Tooltip
          label={person.name}
          aria-label="Name Tooltip"
          isOpen={isTooltipVisible && isHovered}
          hasArrow
        >
          <Text
            ref={textRef}
            fontWeight="bold"
            fontSize="lg"
            mb={1}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {person.name}
          </Text>
        </Tooltip>
        <Text mb={3} fontSize="md" as="samp" opacity="0.7">
          {person.known_for_department}
        </Text>
        <Button onClick={handleDetailClick} alignSelf="center">
          Detay
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
