import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MultiSearch from "../../Components/API/Search/MultiSearch"; // Path'i ihtiyaca göre güncelleyin

const SearchPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    setSearchTerm(query || "");
  }, [location.search]);

  return (
    <div>
      <h1>
        {searchTerm ? `Search Results for "${searchTerm}"` : "Please enter a search term."}
      </h1>
      {searchTerm && <MultiSearch searchTerm={searchTerm} />}
    </div>
  );
};

export default SearchPage;
