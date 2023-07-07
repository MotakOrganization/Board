import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "~/components/ui/button";
import { withColorScheme } from "~/lib/storybook";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [withColorScheme],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default button",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary button",
  },
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
    children: "Subtle button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link button",
  },
};

export const SubtleLink: Story = {
  args: {
    variant: "subtleLink",
    children: "Subtlelink button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning button",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error button",
  },
};
