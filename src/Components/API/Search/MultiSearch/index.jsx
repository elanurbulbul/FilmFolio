import React, { useEffect, useState } from "react";
import { Box, Image, Spinner } from "@chakra-ui/react";

const MultiSearch = ({ searchTerm }) => {
  const [multiSearch, setMultiSearch] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMultiSearch = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/search/multi?language=en-US&query=${searchTerm}&page=1&api_key=${import.meta.env.VITE_API_KEY}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setMultiSearch(json.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching multi search results:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (searchTerm) {
      getMultiSearch();
    }
  }, [searchTerm]);

  if (loading) {
    return <div><Spinner/></div>;
  }

  return (
    <div>
      {multiSearch.length > 0 ? (
        <Box>
          {multiSearch.map((item) => (
            <li key={item.id}>
                <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path  || item.profile_path}`}/>
                {item.name || item.title}
                <p>{item.media_type}</p>
                </li>
          ))}
        </Box>
      ) : (
        <div>No results found for "{searchTerm}".</div>
      )}
    </div>
  );
};

export default MultiSearch;
