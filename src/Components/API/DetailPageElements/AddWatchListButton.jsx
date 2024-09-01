import React, { useState, useEffect } from 'react';
import { Box, Button, Text, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'; 

const AddToWatchlistButton = ({ item, itemType }) => {
  const navigate = useNavigate();
  const { user } = useAuth(); 
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (user) {
      setShowAlert(false); // Eğer kullanıcı mevcutsa, uyarı mesajını gizle
    }
  }, [user]);

  const addToWatchlist = () => {
    if (!user) {
      setShowAlert(true);
      return;
    }

    let watchlist = [];

    try {
      const storedWatchlist = localStorage.getItem(`watchlist_${user.email}`);
      watchlist = storedWatchlist ? JSON.parse(storedWatchlist) : [];
      
      // console.log ile hataları yakalayın
      console.log('Current Watchlist:', watchlist);
      
    } catch (error) {
      console.error('Error parsing watchlist:', error);
      watchlist = [];
    }

    if (!watchlist.some((watchlistItem) => watchlistItem.id === item.id)) {
      const updatedWatchlist = [...watchlist, item];
      localStorage.setItem(`watchlist_${user.email}`, JSON.stringify(updatedWatchlist));
      alert(`${item.title || item.name} has been added to your watchlist!`);
    } else {
      alert(`${item.title || item.name} is already in your watchlist!`);
    }
  };

  return (
    <Box mt={1} textAlign="start">
      <Button onClick={addToWatchlist}>Add to Watchlist</Button>
      {showAlert && (
        <Box textAlign="center" mt={4} p={4} bg={"gray.600"} borderRadius="md">
          <Text>You need to sign in to add items to your watchlist.</Text>
          <Link color="blue.500" onClick={() => navigate("/signIn")}>
            Click here to sign in.
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default AddToWatchlistButton;
