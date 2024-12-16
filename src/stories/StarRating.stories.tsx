import { StorybookConfig } from "@storybook/nextjs";
import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import StarRating from "@/components/star-rating/StarRating";

type StoryProps = ComponentProps<typeof StarRating>;

const meta: Meta<StoryProps> = {
   component: StarRating,
};

export default meta;

// Create individual stories
type Story = StoryObj<StoryProps>;

export const Small: Story = {
   args: { size: "sm", className: "text-red-500" },
   render: args => <StarRating {...args} />,
};
export const Large: Story = {
   args: { size: "lg" },
   render: args => <StarRating {...args} />,
};
