import { Box, TablePagination } from "@mui/material";
import React from "react";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  tagsData: {
    totalTags: number;
  };
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
}

export default function Pagination({
  currentPage,
  setCurrentPage,
  tagsData,
  rowsPerPage,
  setRowsPerPage,
}: PaginationProps) {
  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(0);
  };

  const rowsPerPageOptions = Array.from(
    { length: Math.ceil(tagsData.totalTags / 10) },
    (_, i) => (i + 1) * 10
  );

  return (
    <Box>
      <TablePagination
        component="div"
        count={tagsData.totalTags}
        page={currentPage}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </Box>
  );
}
