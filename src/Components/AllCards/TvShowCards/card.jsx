import React, { useRef, useState, useEffect } from "react";
import { Box, Image, Text, Button, Stack, Flex, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { StarIcon } from "@chakra-ui/icons";

const Card = ({ tv }) => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  const handleDetailClick = () => {
    navigate(`/tvshows/${tv.id}`);
  };

  const releaseYear = tv.first_air_date ? format(new Date(tv.first_air_date), 'yyyy') : 'N/A';

  useEffect(() => {
    if (textRef.current) {
      setIsTooltipVisible(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, [tv.name]);
  return (
    <Box 
      
      display="flex"
      flexDirection="column"
      justifyContent="space-between" 
      borderWidth="1px" 
      borderRadius="lg" 
      boxShadow="md"
      onClick={handleDetailClick}
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{ 
        transform: "scale(1.05)",
      }}>
      <Image
        width="100%"
        height="430px"
        borderTopRadius="8px"
        marginBottom="5px"
        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
        alt={tv.name}
      />
      
      <Box 
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p="4">
         <Tooltip 
          label={tv.name} 
          aria-label="Title Tooltip"
          isOpen={isTooltipVisible && isHovered}
          hasArrow
        >
          <Text  
            ref={textRef}
            fontWeight="bold" 
            fontSize="lg" 
            m="8px" 
            overflow="hidden" 
            textOverflow="ellipsis" 
            whiteSpace="nowrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {tv.name}
          </Text>
        </Tooltip>
        <Flex justify="space-between" my={3}>
          <Stack spacing={1}>
            <Text fontSize="md">{releaseYear}</Text>
          </Stack>
          <Stack display="flex" direction="row" spacing={1}>
            <Tooltip label={`${tv.vote_average.toFixed(2)} / 10`} aria-label="Rating Tooltip">
              <Flex align="center">
                <StarIcon color="yellow.400" boxSize="1rem" />
                <Text fontSize="md" ml={1}>{tv.vote_average.toFixed(2)}</Text>
              </Flex>
            </Tooltip>
          </Stack>
        </Flex>
       
      </Box>
    </Box>
  );
};

export default Card;
