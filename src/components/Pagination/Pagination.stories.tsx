import React from "react";
import Pagination from "./Pagination";
import { Meta, StoryFn } from "@storybook/react";

const meta: Meta = {
  title: "Components/Pagination",
  component: Pagination,
};

export default meta;

type PaginationStory = StoryFn<typeof Pagination>;

export const PaginationDefault: PaginationStory = (args) => (
  <Pagination {...args} />
);

PaginationDefault.args = {
  currentPage: 0,
  setCurrentPage: (page: number) => console.log(`Current Page: ${page}`),
  tagsData: { totalTags: 100 },
  rowsPerPage: 10,
  setRowsPerPage: (rowsPerPage: number) =>
    console.log(`Rows Per Page: ${rowsPerPage}`),
};
