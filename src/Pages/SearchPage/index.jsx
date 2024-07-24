import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MultiSearch from "../../Components/API/Search/MultiSearch"; // Path'i ihtiyaca göre güncelleyin
import { Heading, Text } from "@chakra-ui/react";

const SearchPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    setSearchTerm(query || "");
  }, [location.search]);

  return (
    <div>
      <Text>
        {searchTerm ? `Search Results for "${searchTerm}"` : "Please enter a search term."}
      </Text>
      {searchTerm && <MultiSearch searchTerm={searchTerm} />}
    </div>
  );
};

export default SearchPage;
