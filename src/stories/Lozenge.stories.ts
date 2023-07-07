import type { Meta, StoryObj } from "@storybook/react";
import { Lozenge } from "~/components/ui/lozenge";
import { withColorScheme } from "~/lib/storybook";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Lozenge> = {
  title: "Example/Lozenge",
  component: Lozenge,
  tags: ["autodocs"],
  decorators: [withColorScheme],
};

export default meta;
type Story = StoryObj<typeof Lozenge>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    appearance: "default",
    text: "lozenge",
  },
};

export const InProgress: Story = {
  args: {
    appearance: "inprogress",
    text: "lozenge",
  },
};

export const New: Story = {
  args: {
    appearance: "new",
    text: "lozenge",
  },
};

export const Moved: Story = {
  args: {
    appearance: "moved",
    text: "lozenge",
  },
};

export const Success: Story = {
  args: {
    appearance: "success",
    text: "lozenge",
  },
};

export const Removed: Story = {
  args: {
    appearance: "removed",
    text: "lozenge",
  },
};

export const DefaultBold: Story = {
  args: {
    appearance: "defaultBold",
    text: "lozenge",
  },
};

export const InProgressBold: Story = {
  args: {
    appearance: "inprogressBold",
    text: "lozenge",
  },
};

export const NewBold: Story = {
  args: {
    appearance: "newBold",
    text: "lozenge",
  },
};

export const MovedBold: Story = {
  args: {
    appearance: "movedBold",
    text: "lozenge",
  },
};

export const SuccessBold: Story = {
  args: {
    appearance: "successBold",
    text: "lozenge",
  },
};

export const RemovedBold: Story = {
  args: {
    appearance: "removedBold",
    text: "lozenge",
  },
};
