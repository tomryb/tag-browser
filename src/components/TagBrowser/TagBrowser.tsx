import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress } from "@mui/material";
import { Tag } from "../../types/types";
import TagTable from "./TagTable";
import Pagination from "./Pagination";

interface TagsData {
  tags: Tag[];
  totalTags: number;
}

export default function TagBrowser() {
  const [tagsData, setTagsData] = useState<TagsData>({
    tags: [],
    totalTags: 0,
  });
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(
          `https://api.stackexchange.com/2.3/tags?&order=desc&sort=popular&site=stackoverflow`
        );
        const allTags: Tag[] = response.data.items;
        const totalTags: number = allTags.length;

        setTagsData({ tags: allTags, totalTags: totalTags });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching tags:", error);
        setIsLoading(false);
      }
    };

    fetchTags();
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!tagsData.tags.length) {
    return (
      <Typography variant="h3" sx={{ color: "red" }}>
        No tags found.
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h1" sx={{ color: "green", fontSize: "2rem" }}>
        Tag Browser
      </Typography>
      <TagTable
        tags={tagsData.tags}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        tagsData={tagsData}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </Box>
  );
}
