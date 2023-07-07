import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "~/components/ui/input";
import { withColorScheme } from "~/lib/storybook";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [withColorScheme],
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: "Default input",
  },
};
