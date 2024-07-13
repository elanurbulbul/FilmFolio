import React, { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import SearchList from "../../../AllCards/SearchResultCards/list"; // `MultiSearchList` bileşeninin doğru yolunu belirleyin

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
    return <div><Spinner /></div>;
  }

  const sortedResults = multiSearch.reduce((acc, item) => {
    if (item.media_type === "movie") {
      acc.movies.push(item);
    } else if (item.media_type === "tv") {
      acc.tvShows.push(item);
    } else if (item.media_type === "person") {
      acc.people.push(item);
    }
    return acc;
  }, { movies: [], tvShows: [], people: [] });

  return (
    <SearchList 
      movies={sortedResults.movies}
      tvShows={sortedResults.tvShows}
      people={sortedResults.people}
    />
  );
};

export default MultiSearch;
