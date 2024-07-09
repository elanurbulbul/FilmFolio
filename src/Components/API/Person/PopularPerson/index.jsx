import { Heading, Box, Flex, Button, Spinner, Container, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import List from "../../../../Components/PersonCards/list";


const PopulerPerson = () => {
  const [personList, setPersonList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const visiblePages = useBreakpointValue({ base: 5, sm: 5, md: 5, lg: 7 }); // Mobil ve küçük ekranlarda 5 buton göster

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

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    const maxVisiblePages = Math.min(visiblePages, totalPages);

    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      buttons.push(1);
      if (startPage > 2) buttons.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) buttons.push('...');
      buttons.push(totalPages);
    }

    return buttons.map((num, index) =>
      num === '...' ? (
        <Button key={`ellipsis-${index}`} isDisabled mx={1}>
          ...
        </Button>
      ) : (
        <Button
          key={`page-${num}`}
          onClick={() => handlePageChange(num)}
          mx={1}
          variant={page === num ? "solid" : "outline"}
        >
          {num}
        </Button>
      )
    );
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Popular People</Heading>
      {loading ? (
        <Container centerContent mt={4}>
          <Spinner size="xl" />
        </Container>
      ) : (
        <>
          <List people={personList} />
          <Flex
            alignItems="center"
            justifyContent="center"
            wrap="wrap"
            gap={2} // Butonlar arasındaki boşluk
            mb={4} // Alt margin
          >
            <Button
              onClick={handlePreviousPage}
              isDisabled={page === 1}
              mr={2}
            >
              Previous
            </Button>
            <Flex
              alignItems="center"
              wrap="wrap"
              gap={2}
              maxW="calc(100% - 80px)" // "Previous" ve "Next" butonlarının genişliği için yer bırakma
            >
              {renderPageButtons()}
            </Flex>
            <Button
              onClick={handleNextPage}
              isDisabled={page >= totalPages}
              ml={2}
            >
              Next
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default PopulerPerson;
