import React, { useState, useEffect } from 'react';
import { Box, Button, Text, Link, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'; 

const AddToWatchlistButton = ({ item, itemType }) => {
  const navigate = useNavigate();
  const { user } = useAuth(); 
  const [showAlert, setShowAlert] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (user) {
      setShowAlert(false); 
    }
  }, [user]);

  const addToWatchlist = () => {
    if (!user) {
      setShowAlert(true);
      return;
    }

    const emailKey = user.email.trim().toLowerCase();
    let watchlist = [];

    try {
      const storedWatchlist = localStorage.getItem(`watchlist_${emailKey}`);
      watchlist = storedWatchlist ? JSON.parse(storedWatchlist) : [];
      
      if (Array.isArray(watchlist)) {
        console.log('Current Watchlist:', watchlist);
      } else {
        console.warn('Watchlist is not an array, initializing an empty array.');
        watchlist = [];
      }
      
    } catch (error) {
      console.error('Error parsing watchlist:', error);
      watchlist = [];
    }

    if (!watchlist.some((watchlistItem) => watchlistItem.id === item.id)) {
      const updatedWatchlist = [...watchlist, item];
      localStorage.setItem(`watchlist_${emailKey}`, JSON.stringify(updatedWatchlist));
      toast({
        title: `${item.title || item.name} added to Watchlist`,
        description: `${item.title || item.name} has been added to your watchlist!`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: `${item.title || item.name} already in Watchlist`,
        description: `${item.title || item.name} is already in your watchlist!`,
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box mt={1} textAlign="start">
      <Button onClick={addToWatchlist}>Add to Watchlist</Button>
      {showAlert && (
        <Box textAlign="center" mt={4} p={4} bg={"gray.600"} borderRadius="md">
          <Text>You need to sign in to add items to your watchlist.</Text>
          <Link color="blue.500" onClick={() => navigate("/sign-in")}>
            Click here to sign in.
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default AddToWatchlistButton;
