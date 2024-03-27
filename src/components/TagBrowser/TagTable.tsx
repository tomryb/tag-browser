import {
  TableContainer,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Tag } from "../../types/types";

interface TagTableProps {
  tags: Tag[];
  rowsPerPage: number;
  currentPage: number;
}
export default function TagTable({
  tags,
  currentPage,
  rowsPerPage,
}: TagTableProps) {
  const getCurrentPageTags = (): Tag[] => {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return tags.slice(startIndex, endIndex);
  };

  return (
    <TableContainer component={Box}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getCurrentPageTags().map(({name, count}) => (
            <TableRow key={name}>
              <TableCell sx={{ width: 400 }}>
                <b>{name}</b>
              </TableCell>
              <TableCell>
                <b>{count}</b>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
