import React, { useRef, useState, useEffect } from "react";
import { Box, Image, Text, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PersonCard = ({ person }) => {
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
      onClick={handleDetailClick}
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image
        width="100%"
        aspectRatio={2 / 3}
        height="auto"
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
      </Box>
    </Box>
  );
};

export default PersonCard;