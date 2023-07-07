import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "~/components/ui/textarea";
import { withColorScheme } from "~/lib/storybook";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Textarea> = {
  title: "Example/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  decorators: [withColorScheme],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: "Default textarea",
  },
};
