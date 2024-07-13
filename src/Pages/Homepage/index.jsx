import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import MultiSearch from "../../Components/API/Search/MultiSearch";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedTerm, setSubmittedTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    setSubmittedTerm(searchTerm); 
  };

  return (
    <div>
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearch}>Search</Button>
      {submittedTerm && <MultiSearch searchTerm={submittedTerm} />}
    </div>
  );
};

export default Homepage;
