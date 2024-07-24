import { Heading, Box, Flex, Center, Spinner, Container, useBreakpointValue, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import List from "../../../AllCards/PersonCards/list";
import Pagination from "../../../Pagination"

const PopulerPeople = () => {
  const [personList, setPersonList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const visiblePages = useBreakpointValue({ base: 5, sm: 5, md: 5, lg: 7 }); 

  const getPerson = (page) => {
    setLoading(true);
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/person/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.results) {
          setPersonList(json.results);
          setTotalPages(json.total_pages);
        }
      })
      .catch((error) => console.error("Error fetching persons:", error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getPerson(page);
  }, [page]);


  return (
    <Box my={10} >
      {loading ? (
        <Center  mt={4}>
          <Spinner size="xl" />
        </Center>
      ) : (
        <>
          <List people={personList} />
          <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        visiblePages={visiblePages}
      />
        </>
      )}
    </Box>
  );
};

export default PopulerPeople;
