import { Meta, StoryObj } from "@storybook/react";
import TagBrowser from "./TagBrowser";

const meta: Meta = {
  title: "Components/TagBrowser",
  component: TagBrowser,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TagBrowserDefault: Story = {};
TagBrowserDefault.args = {};
