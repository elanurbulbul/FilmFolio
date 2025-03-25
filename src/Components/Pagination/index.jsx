import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import PageButton from "./PageButton";

const Pagination = ({ page, totalPages, onPageChange, visiblePages }) => {
  const handleNextPage = () => {
    if (page < totalPages) {
      onPageChange(page + 1);
      window.scrollTo(0, 0); // Scroll to top when page changes
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      onPageChange(page - 1);
      window.scrollTo(0, 0); // Scroll to top when page changes
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

    return buttons.map((num, index) => (
      <PageButton
        key={index}
        num={num}
        isCurrent={page === num}
        onClick={() => {
          onPageChange(num);
          window.scrollTo(0, 0); // Scroll to top when page changes
        }}
      />
    ));
  };

  return (
    <Flex alignItems="center" justifyContent="center" wrap="nowrap" overflow="hidden" gap={1} mb={4} mt={4}>
      <IconButton
        onClick={handlePreviousPage}
        isDisabled={page === 1}
        aria-label="Previous Page"
        icon={<ChevronLeftIcon />}
        mr={2}
      />
      <Flex alignItems="center" wrap="nowrap" gap={2} maxW="calc(100% - 80px)">
        {renderPageButtons()}
      </Flex>
      <IconButton
        onClick={handleNextPage}
        isDisabled={page >= totalPages}
        aria-label="Next Page"
        icon={<ChevronRightIcon />}
        ml={2}
      />
    </Flex>
  );
};

export default Pagination;
